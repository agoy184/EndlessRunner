class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    preload() {
        this.load.image('car', './assets/redCar.png');
        this.load.image('gran', './assets/granny.png');
        this.load.image('road', './assets/Road.png');
    }

    create() {
        // tile sprite background
        this.road = this.add.tileSprite(0, 0, 640, 480, 'road').setOrigin(0, 0);

        // Game Over flag
        this.gameOver = false;

        // Create player
        this.granny = new Player(this, game.config.width/4, game.config.height/2, 'gran').setOrigin(0.5, 0);

        // Create obstacles
        this.l1car = new Obstacle(this, game.config.width/2, game.config.height/4 + 25, 'car').setOrigin(0.5, 0);
        this.l2car = new Obstacle(this, game.config.width/2, game.config.height/9, 'car').setOrigin(0.5, 0);
        this.l3car = new Obstacle(this, game.config.width/2, game.config.height/2, 'car').setOrigin(0.5, 0);
        this.l1car.setScale(.75);
        this.l2car.setScale(.75);
        this.l3car.setScale(.75);

        // Define keys
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    }

    update() {
        this.road.tilePositionX += 4;
        if (!this.gameOver) {
            this.granny.update();
            this.l1car.update();
            this.l2car.update();
            this.l3car.update();

        }
    }      
}   
