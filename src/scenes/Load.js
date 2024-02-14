class Load extends Phaser.Scene {
    constructor() {
        super('Load');
    }
    
    preload() {
        //images
        this.load.image('dinosaur', 'assets/images/dinosaur.png');
        this.load.image('meteor', 'assets/images/meteor.png');
        this.load.image('lavapit', 'assets/images/lavapit.png');
        //audio

    }

    create() {
        this.scene.start('Title');
    }
}