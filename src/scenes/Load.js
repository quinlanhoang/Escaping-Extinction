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
        this.load.spritesheet('lavapit', 'assets/images/lavapit.png', {frameWidth: 94, frameHeight: 54});
        this.load.image('desertbackground', 'assets/images/desertbackground.png');
        //audio
        this.load.audio('backgroundmusic', 'assets/audio/backgroundmusic.mp3');
        this.load.audio('dinosaur_jump', 'assets/audio/dinosaur_jump.mp3');
        this.load.audio('dinosaur_cry', 'assets/audio/dinosaur_cry.mp3');
        this.load.audio('burning', 'assets/audio/burning.mp3');
        //font
        this.load.bitmapFont('gemFont', 'assets/fonts/gem.png', 'assets/fonts/gem.xml');


    }

    create() {
        this.scene.start('Title');

        //looping background music
        const musicConfig = {
            volume : 0.5,
            loop : true
        };

        this.sound.add('backgroundmusic', musicConfig).play();
    }
}