class Credits extends Phaser.Scene {
    constructor() {
        super('creditsScene');
    }

    preload(){

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
        this.add.text(game.config.width/2, game.config.height/7, 'Credits', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 2*game.config.height/7, 'Programmer: Abel Goy', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 3*game.config.height/7, 'Designer: Abel Goy', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 4*game.config.height/7, 'Sprites made in Aseprite by: Abel Goy', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 5*game.config.height/7, 'Music: "Sunshine" by Kevin Macleod', menuConfig).setOrigin(0.5);        
    }

}