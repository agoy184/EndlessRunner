class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    preload() {
        this.load.image('knife', './assets/Knife.png');
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
        this.l1knife = new Obstacle(this, game.config.width/2, game.config.height/4, 'knife').setOrigin(0.5, 0);
        this.l2knife = new Obstacle(this, game.config.width/2, game.config.height/3, 'knife').setOrigin(0.5, 0);
        this.l3knife = new Obstacle(this, game.config.width/2, game.config.height/2, 'knife').setOrigin(0.5, 0);

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
            this.l1knife.update();
            this.l2knife.update();
            this.l3knife.update();

        }
    }      
}   
