class Meteor extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        scene.add.existing(this);
        
        scene.physics.world.enable(this);

        this.body.setCollideWorldBounds(true);
        this.body.allowGravity = false;

        this.setScale(1.5);

        scene.anims.create({
            key : 'falling',
            frames : scene.anims.generateFrameNumbers(texture, {start: 0, end: 1}),
            frameRate : 10,
            repeat : -1,
        });

        this.play('falling');
    }
}