class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    preload() {
        this.load.image('knife', './assets/Knife.png');
    }

    create() {
        this.gameOver = false;

        this.l1knife = new Obstacle(this, game.config.width/2, game.config.height/2, 'knife').setOrigin(0.5, 0);
    }

    update() {
        if (!this.gameOver) {
            this.l1knife.update();
        }
    }      
}   
