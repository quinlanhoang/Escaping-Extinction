class Load extends Phaser.Scene {
    constructor() {
        super('Load');
    }
    
    preload() {
        //images
        this.load.spritesheet('dinosaur', 'assets/images/dinosaur.png', {frameWidth: 108, frameHeight: 62});
        this.load.image('meteor', 'assets/images/meteor.png');
        //particle for meteor
        this.load.image('paricle1', 'assets/images/particle1');
        this.load.image('particl2', 'assets/images/particle2');
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