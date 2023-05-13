class Menu extends Phaser.Scene{
    constructor(){
        super('menuScene');
    }

    preload() {
        this.load.audio('sfx_select', './assets/WilhelmScream.mp3');
    }

    create(){
        let menuConfig = {
            fontFamily: 'Verdana',
            fontSize: '28px',
            backgroundColor: '#F41D1D',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Granny Runner', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use W and S keys to move up and down', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use A and D keys to move left and right', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press A for Novice or D for Expert', menuConfig).setOrigin(0.5);
   
        // define keys
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keyA)) {
            // Novice mode
            game.settings = {
              obstacleSpeed: 3,
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");    
          }
          if (Phaser.Input.Keyboard.JustDown(keyD)) {
            // Expert mode
            game.settings = {
              obstacleSpeed: 4,
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");    
          }
          
    }
}