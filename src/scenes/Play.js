class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    preload() {
        // Sprites
        this.load.image('car', './assets/redCar.png');
        this.load.image('gran', './assets/granny.png');
        this.load.image('road', './assets/Road.png');

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
        this.l1car = new Obstacle(this, game.config.width, game.config.height/8, 'car').setOrigin(0, 0);
        this.l2car = new Obstacle(this, game.config.width, game.config.height/4 + 30, 'car').setOrigin(0, 0);
        this.l3car = new Obstacle(this, game.config.width, game.config.height/2 + 10, 'car').setOrigin(0, 0);
        this.l4car = new Obstacle(this, game.config.width/2, game.config.height/2 + 100, 'car').setOrigin(0, 0);
        
        //debug
        //this.physics.add.image(400, 100, 'car'); 

        // Define keys
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);        

        // Text stuff
        let textConfig = { 
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
        }

        if(this.checkCollision(this.l1car, this.granny) || this.checkCollision(this.l2car, this.granny) || this.checkCollision(this.l3car, this.granny) || this.checkCollision(this.l4car, this.granny)) {
            this.gameOver = true;
            this.sound.stopByKey('bg_music');//stop music
            if (this.screamCheck == 0) {
                this.sound.play('crash');
                this.sound.play('scream');
                this.screamCheck++;
            }
            this.goUI.setVisible(true);
            this.rUI.setVisible(true);    
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
