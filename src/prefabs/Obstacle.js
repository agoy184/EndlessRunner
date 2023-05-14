class Obstacle extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene,x, y, texture, frame);
        scene.add.existing(this);
        this.moveSpeed = game.settings.obstacleSpeed;
    }

    update(){
        this.x -= this.moveSpeed;
        if(this.x <= 0 - this.width) {
            this.x = game.config.width + 100;
            // random speed
            //this.moveSpeed = Math.floor(Math.random() * 3) + 1;
        }
    }

    reset() {

    }
}