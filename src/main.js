// Abel Goy 
// Granny Runner 
// 23 hours spent on project 
// Creative tilt justification: 
//  In terms of technicality, I'm particularly proud of the pushback mechanic I created with the fire hydrant obstacle in conjunction with the random obstacle spawning.
//  I made it so that the game would result in a game over if the player was caught in between the left side of the screen and the hydrant, which pushes the player back.
//  Combining this with the fact that the car/hydrant spawn positions are randomly generated, this creates random 'traps' for players who spend too much time on the sidewalk, 
//  since they may be caught in between the car and the hydrant, discouraging camping in the sidewalk lanes. 
//
//  In terms of visual style, I'm particularly proud of the sprites that I created for the game.  I don't have that much experience creating art assets in general,
//  but making all of the sprite assets by myself for this game was fun and I like how the sprites came out.  I also thought the sound effects in conjunction with the music I chose
//  were funny when considering the feel of the game.  Upbeat music interrupted by a car crash was a funny combination. 

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    backgroundColor: '#35A7FF',
    pixelArt: true,
    autoCenter: true,
    physics: {
      default: 'arcade',
      arcade: {
        debug: true,
        gravity: {
          x:0,
          y:0
        }
      }
    },
    scene:  [ Menu, Play, Credits, HowToPlay ]
}

let game = new Phaser.Game(config);

// Reserve keyboard vars
let keySPACE;
let keyW, keyA, keyS, keyD, keyR;

// Set UI Sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
