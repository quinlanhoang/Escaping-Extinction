class Play extends Phaser.Scene {
    constructor() {
        super('Play');
    }

    create() {
        this.dinosuar = new Dinosaur(this, 100, 300);
        this.meteor = this.physics.add.group();
        this.lavaPit = this.physics.add.group();
    }
}