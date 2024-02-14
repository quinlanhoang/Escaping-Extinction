class Lavapit extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        
        scene.physics.world.enable(this);

        this.setScale(1.5);
        this.body.setSize(80, 0);
        this.body.setOffset(6, 0);
        this.body.setCollideWorldBounds(true);

        scene.anims.create({
            key : 'lava',
            frames : scene.anims.generateFrameNumbers(texture, {start: 0, end: 1}),
            frameRate : 2,
            repeat: -1
        });

        this.play('lava', true);
    }
}