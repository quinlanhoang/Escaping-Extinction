class Title extends Phaser.Scene {
    constructor() {
        super ('Title');
    }

    create() {
        this.input.on('pointerdown', () => this.scene.start('Play'));
    }
}