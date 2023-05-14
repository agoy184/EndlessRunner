class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    preload() {
        // Sprites
        this.load.image('car', './assets/redCar.png', './assets/redCar.json');
        this.load.image('gran', './assets/granny.png');
        this.load.image('road', './assets/Road.png');
        this.load.image('hydrant', './assets/hydrant.png');
        this.load.atlas('face', './assets/face.png', 'assets/face.json');

        // Music
        this.load.audio('bg_music', './assets/Sunshine.mp3');

        // SFX
        this.load.audio('scream', './assets/WilhelmScream.mp3');
        this.load.audio('crash', './assets/carCrash.mp3');        
    }

    create() {
        // tile sprite background
        this.road = this.add.tileSprite(0, 0, 640, 480, 'road').setOrigin(0, 0);

        // Game Over flag
        this.gameOver = false;

        // Create player
        this.granny = new Player(this, game.config.width/4, game.config.height/2, 'gran').setOrigin(0, 0);

        // Create obstacles
        this.l1car = new Obstacle(this, game.config.width+500, game.config.height/8, 'car').setOrigin(0, 0);
        this.l2car = new Obstacle(this, game.config.width+100, game.config.height/4 + 30, 'car').setOrigin(0, 0);
        this.l3car = new Obstacle(this, game.config.width+700, game.config.height/2 + 10, 'car').setOrigin(0, 0);
        this.l4car = new Obstacle(this, game.config.width, game.config.height/2 + 100, 'car').setOrigin(0, 0);

        this.hydrant1 = new Obstacle(this, game.config.width, 0, 'hydrant').setOrigin(0, 0);
        this.hydrant2 = new Obstacle(this, game.config.width, 8*game.config.height/9, 'hydrant').setOrigin(0, 0);
        
        // Define keys
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        
        // Text stuff
        var textConfig = { 
            fontFamily: 'font1',
        fontSize: '28px',
        backgroundColor: '#F4442E',
        color: '#000000',
        align: 'right',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 100
        }

        textConfig.fixedWidth = 0;
        this.goUI = this.add.text(game.config.width/2, game.config.height/3, 'GAME OVER', textConfig).setOrigin(0.5);
        this.rUI = this.add.text(game.config.width/2, game.config.height/3 + 64, 'Press (R) to Restart', textConfig).setOrigin(0.5);
        this.goUI.setVisible(false);
        this.rUI.setVisible(false);

        // Atlas animation
        this.face = this.add.sprite(600, 50, 'face');
        this.anims.create({
            key: 'die',
            frames: this.anims.generateFrameNumbers('face', { start: 0, end: 1, first: 0}),
            frameRate: 7
        });

        // Timer          
        this.timeElapsed = 0;
        this.timeUI = this.add.text(8*game.config.width/9 - 10, game.config.height/9, this.timeElapsed/60, textConfig).setOrigin(0.5);

        let soundConfig = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0,
        }
        var music = this.sound.add('bg_music', soundConfig);
        music.play();
        this.screamCheck = 0;
    }

    update() {
        if (!this.gameOver) {
            this.road.tilePositionX += 4;
            this.granny.update();
            this.l1car.update();
            this.l2car.update();
            this.l3car.update();
            this.l4car.update();
            this.hydrant1.update();
            this.hydrant2.update();
            this.timeElapsed++;
            this.timeUI.text = Math.floor(this.timeElapsed/60);
        }

        if(this.checkCollision(this.l1car, this.granny) || this.checkCollision(this.l2car, this.granny) || this.checkCollision(this.l3car, this.granny) || this.checkCollision(this.l4car, this.granny)) {
            this.gameOver = true;
            this.sound.stopByKey('bg_music');//stop music
            if (this.screamCheck == 0) {
                this.sound.play('crash');
                this.sound.play('scream');
                this.face.play({key: 'die', repeat: 2});
                this.screamCheck++;
            }
            this.goUI.setVisible(true);
            this.rUI.setVisible(true);    
        }

        if(this.checkCollision(this.hydrant1, this.granny) || this.checkCollision(this.hydrant2, this.granny)) {
            if (keyD.isDown) {
                this.granny.x -= this.hydrant1.moveSpeed;
            }
            this.granny.x -= this.hydrant1.moveSpeed;
            if(this.granny.x <= 0) {
                this.gameOver = true;
                this.sound.stopByKey('bg_music');//stop music
                if (this.screamCheck == 0) {
                    this.sound.play('scream');
                    this.face.play({key: 'die', repeat: 2});
                    this.screamCheck++;
                }
                this.goUI.setVisible(true);
                this.rUI.setVisible(true);    
            }
        }

        if(Phaser.Input.Keyboard.JustDown(keyR)){
            this.sound.stopAll();//stop music
            this.scene.restart();
        }
    }
    
    checkCollision(car, granny) {
        if (car.x < granny.x + granny.width &&
            car.x + car.width > granny.x &&
            car.y < granny.y + granny.height &&
            car.height + car.y > granny.y) {
                return true;
            } else {
                return false;
            }
    }
}   
