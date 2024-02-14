    class Dinosaur extends Phaser.GameObjects.Sprite {
        constructor(scene, x, y, texture) {
            super(scene, x + 100, y + 300, texture);

            //add dino to scene
            scene.add.existing(this);

            //physics
            scene.physics.world.enable(this);

            this.body.setCollideWorldBounds(true);
            this.body.allowGravity  = true;

            this.setScale(2);
            scene.anims.create({
                key : 'walk',
                frames : scene.anims.generateFrameNumbers(texture, {start: 0, end: 3}),
                frameRate : 10,
                repeat: -1
            });

            this.play('walk', true);

            scene.input.keyboard.on('keydown-SPACE', this.jump, this);
        }

        jump() {
            if(this.body.onFloor()) {
                this.body.setVelocityY(-600);
            }
        }
    }