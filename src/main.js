// Quinlan Hoang
// Escaping Extinciton
// Approximate time: 

//main 

const config = {
    type : Phaser.AUTO,
    width : 800,
    height : 600,
    scene: [Load, Title, Play, Gameover],
};

const game = new Phaser.Game(cofig);
