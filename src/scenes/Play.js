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

        //this.meteor = this.physics.add.group();
        //this.lavaPit = this.physics.add.group();
    }

    update() {
        //scrolls tile sprite
        this.background.tilePositionX += 2;
    }
}