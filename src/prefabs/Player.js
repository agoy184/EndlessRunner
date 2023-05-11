class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene,x, y, texture, frame);
        scene.add.existing(this);
        this.moveSpeed = 2;
    }

    update(){
        if (keyW.isDown && this.y >= 0) {
            this.y -= this.moveSpeed;
        } else if (keyS.isDown && this.y <= game.config.height - borderUISize*3 - borderPadding) {
            this.y += this.moveSpeed;
        }    
    }
}