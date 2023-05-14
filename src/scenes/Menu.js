class Menu extends Phaser.Scene{
    constructor(){
        super('menuScene');
    }

    preload() {
        this.load.audio('sfx_select', './assets/pop.wav');
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
        this.add.text(game.config.width/2, game.config.height/4, 'Granny Runner', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Press A to start the game,', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 3.25*game.config.height/5, 'W to see How to play,', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 4*game.config.height/5, 'and D to see the credits', menuConfig).setOrigin(0.5);
        
   
        // define keys
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keyA)) {
            // Novice mode
            game.settings = {
              obstacleSpeed: 4,
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");    
          }
          if (Phaser.Input.Keyboard.JustDown(keyW)) {
            // HowToPlay
            this.sound.play('sfx_select');
            this.scene.start("howtoScene");    
          }
          if (Phaser.Input.Keyboard.JustDown(keyD)) {
            // Credits
            this.sound.play('sfx_select');
            this.scene.start("creditsScene");    
          }
          
    }
}