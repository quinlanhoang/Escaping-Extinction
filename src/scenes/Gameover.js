class Gameover extends Phaser.Scene {
    constructor() {
        super('Gameover');
    }

    create() {
        this.input.on('pointerdown', () => this.scene.start('Title'));
    }
}