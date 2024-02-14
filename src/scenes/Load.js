class Load extends Phaser.Scene {
    constructor() {
        super('Load');
    }
    
    preload() {
        //images
        this.load.image('dinosaur', 'assets/images/dinosaur.png');
        this.load.image('meteor', 'assets/images/meteor.png');
        this.load.image('lavapit', 'assets/images/lavapit.png');
        this.load.image('desertbackground', 'assets/images/desertbackground.png');
        //audio
        //font
        this.load.bitmapFont('gemFont', 'assets/fonts/gem.png', 'assets/fonts/gem.xml');


    }

    create() {
        this.scene.start('Title');
    }
}