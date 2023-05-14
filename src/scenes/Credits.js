class Credits extends Phaser.Scene {
    constructor() {
        super('creditsScene');
    }

    preload(){

    }

    create(){
        let menuConfig = {
            fontFamily: 'Verdana',
            fontSize: '17px',
            backgroundColor: '#F41D1D',
            color: '#FFFFFF',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // menu text
        this.add.text(game.config.width/2, game.config.height/9, 'Credits', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 2*game.config.height/9, 'Programmer: Abel Goy', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 3*game.config.height/9, 'Designer: Abel Goy', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 4*game.config.height/9, 'Sprites made in Aseprite by: Abel Goy', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 5*game.config.height/9, 'Music: "Sunshine" by Kevin Macleod', menuConfig).setOrigin(0.5);        
        this.add.text(game.config.width/2, 6.5*game.config.height/9, 'Sound Effects: \nCar crash: https://freesound.org/people/squareal/sounds/237375/\nScream: https://archive.org/details/WilhelmScreamSample', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 8*game.config.height/9, 'Press S to go back to the starting menu', menuConfig).setOrigin(0.5);

        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keyS)) {
            // Back to starting menu
            this.scene.start("menuScene");    
          }
    }

}