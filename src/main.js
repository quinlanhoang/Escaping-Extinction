// Quinlan Hoang
// Escaping Extinciton
// Approximate time: 15 hours
// Creative Tilt: I was able to create a local highscore storage that will carry across scenes and update concurrently whenever... 
// ...the player beats the current score. Additionally, I added meteors falling from the sky as a visual affect. 

//main 

//define and config main Phaser game object
let config = {
    parent : 'myGame',
    type : Phaser.AUTO,
    width : 1200,
    height : 680,
    scale : {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics : {
        default : 'arcade',
        arcade : {
            //debug: true
        }
    },
    scene: [Load, Title, Play, Gameover],
};

//defines game
let game = new Phaser.Game(config);

//define globals
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let highScore = 0;
let score = 0;
