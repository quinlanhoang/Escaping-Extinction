class Title extends Phaser.Scene {
    constructor() {
        super ('Title');
    }

    create() {
        //background png
        this.add.image(centerX, centerY - 60, 'desertbackground').setOrigin(0.5);
        
        //add title screen text
        const title01 = this.add.bitmapText(centerX, centerY - 150, 'gemFont', 'Escaping Extinction', 95).setOrigin(0.5).setTint(0xFF0000); 
        const title02 = this.add.bitmapText(centerX, centerY - 150, 'gemFont', 'Escaping Extinction', 95).setOrigin(0.5).setTint(0xFFD580).setBlendMode('SCREEN');
        const title03 = this.add.bitmapText(centerX, centerY - 150, 'gemFont', 'Escaping Extinction', 95).setOrigin(0.5).setTint(0xFFFF00).setBlendMode('ADD');

        //press enter to play & credits
        const instruction = this.add.bitmapText(centerX, centerY + 50, 'gemFont', 'Press Space to Start & Jump', 70).setOrigin(0.5).setTint(0xFF0000);
        const credit = this.add.bitmapText(centerX, centerY + 135, 'gemFont', 'By: Quinlan Hoang', 50).setOrigin(0.5).setTint(0xFF0000);

        // title text tween //taken from altice repository
        this.tweens.add({
            targets: title01,
            duration: 2500,
            angle: { from: -1, to: 1 },
            yoyo: true,
            repeat: -1,
            onYoyo: function() {
                this.cameras.main.shake(100, 0.0025);
            },
            onYoyoScope: this
        });
        this.tweens.add({
            targets: title02,
            duration: 2500,
            angle: { from: 1, to: -1 },
            yoyo: true,
            repeat: -1,
            onRepeat: function() {
                this.cameras.main.shake(100, 0.0025);
            },
            onRepeatScope: this
        });

        this.input.keyboard.on('keydown-SPACE', this.startGame.bind(this));
    }

    startGame() {
        this.scene.start('Play');
    }
}