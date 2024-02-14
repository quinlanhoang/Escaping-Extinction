class Play extends Phaser.Scene {
    constructor() {
        super('Play');
    }

    create() {
        //initalizes gravity
        this.physics.world.setBounds(0, 0, game.config.width, game.config.height - 60);
        this.physics.world.gravity.y = 1000;
        
        //scrolling tile sprite
        //adding variables to debug the sprite as it wasn't functioning properly intially
        const background = this.add.image(centerX, centerY - 60, 'desertbackground')
        .setOrigin(0.5);

        const scaleX = this.sys.game.config.width / background.width;
        const scaleY = this.sys.game.config.height / background.height;
        background.setScale(scaleX, scaleY);

        this.background = this.add.tileSprite(centerX, centerY - 60, background.width, background.height, 'desertbackground')
        .setOrigin(0.5).setScrollFactor(0);
        
        this.dinosaur = new Dinosaur(this, 100, 300, 'dinosaur')

        //lavapits
        this.lavapits = this.physics.add.group({
            immovable : true,
            allowGravity : false
        });

        //randomly generated lavapits
        const createLavapit = () => {
            const x = game.config.width + Phaser.Math.Between(100, 300);
            const y = game.config.height - 35;
            const lavapit = new Lavapit(this, x, y, 'lavapit');
            this.lavapits.add(lavapit);
        };

        this.time.addEvent({
            delay : Phaser.Math.Between(1000, 5000),
            callback : createLavapit,
            callbackScope : this,
            loop : true
        });

        //lavapit burn audio
        this.burningSound = this.sound.add('burning', {volume : 3});

        this.physics.add.collider(this.dinosaur, this.lavapits, this.gameOver, null, this);

        //meteors
        this.explosionSound = this.sound.add('explosion', {volume : 1.5});

        this.meteors = this.physics.add.group({
            immovable : true,
            allowGravity : false,
        });

        const createMeteor = () => {
            const x = Phaser.Math.Between(300, game.config.width);
            const meteor = new Meteor(this, x, -50, 'meteor');
            this.meteors.add(meteor);
            this.cameras.main.shake(100, 0.025);
            this.explosionSound.play();
        }

        this.time.addEvent({
            delay : Phaser.Math.Between(2000, 5000),
            callback : createMeteor,
            callbackScope : this,
            loop: true,
        });

        this.physics.add.collider(this.dinosaur, this.meteors, this.gameOver, null, this);

        //UI for score
        const scoreBoxWidth = 300;
        const scoreBoxHeight = 50;
        this.scoreBox = this.add.rectangle(centerX - 440, centerY - 305, scoreBoxWidth, scoreBoxHeight, 0x000000, 0.5).setOrigin(0.5);
        
        //initalize scores
        score = 0;
        highScore = highScore || 0;

        //score UI
        this.scoreText = this.add.bitmapText(16, 16, 'gemFont', 'Score: 0/0' , 32);

    }

    update() {
        //update score
        score = Math.floor(this.background.tilePositionX / 10);

        if (score > highScore) {
            highScore = score;
        }

        this.scoreText.setText('Score: ' + score + '/' + highScore);

        //scrolls tile sprite
        this.background.tilePositionX += 2;

        //move lavapits left
        this.lavapits.children.iterate((lavapit) => {
            if (lavapit && lavapit.x !== undefined) {
                lavapit.x -= 2;
            

            //if out of bounds, destroy
                if (lavapit.x < -lavapit.width) {
                lavapit.destroy();
                }
            }  
        });

        this.meteors.children.iterate((meteor) => {
            if (meteor && meteor.y !== undefined) {
                meteor.y += 5;

                //when meteor hit ground, becomes obstacle
                if (meteor.y > game.config.height - 70) {
                    meteor.body.immovable = true;
                    meteor.body.allowGravity = false;
                }
            }
        })
    }

    gameOver() {
        //burning audio
        this.burningSound.play();
        
        //reset dinosaur, play animation, and send highscore to Gameover
        this.dinosaur.setVelocityX(0);
        this.dinosaur.setVelocityY(0);

        this.dinosaur.sink(() => {
            this.scene.start('Gameover', { highScore: highScore});
        });
        
    }
}