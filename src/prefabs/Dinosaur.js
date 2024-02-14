    class Dinosaur extends Phaser.Physics.Arcade.Sprite {
        constructor(scene, x, y, texture) {
            super(scene, x + 100, y + 300, texture);

            //add dino to scene
            scene.add.existing(this);

            //physics
            scene.physics.world.enable(this);

            //hitbox
            this.body.setSize(55, 0);
            this.body.setOffset(25, 0);

            this.body.setCollideWorldBounds(true);
            this.body.allowGravity  = true;

            this.setScale(2);

            //audio
            this.jumpSound = scene.sound.add('dinosaur_jump')
            this.crySound = scene.sound.add('dinosaur_cry');
            
            //walking animation
            scene.anims.create({
                key : 'walk',
                frames : scene.anims.generateFrameNumbers(texture, {start: 0, end: 3}),
                frameRate : 10,
                repeat: -1
            });

            this.play('walk', true);

            //lavapit death animation
            scene.anims.create({
                key : 'sink',
                frames : scene.anims.generateFrameNumbers(texture, {start: 4, end: 8}),
                frameRate : 100,
                hideOnComplete : true
            });

            scene.input.keyboard.on('keydown-SPACE', this.jump, this);
        }
        
        sink(callback) {
            this.crySound.setSeek(3000);
            this.crySound.play();
            this.play('sink');
            this.once('animationcomplete-sink', callback, this);
        }

        jump() {
            if(this.body.onFloor()) {
                this.jumpSound.play();
                this.body.setVelocityY(-600);
            }
        }
    }