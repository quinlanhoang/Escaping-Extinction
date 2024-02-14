class Gameover extends Phaser.Scene {
    constructor() {
        super('Gameover');
    }

    create(data) {
        //retrieve highscore
        let highScore = data.highScore;
        
        //create transparent background
        this.add.rectangle(centerX, centerY, game.config.width, game.config.height, 0x000000).setOrigin(0.5);

        //Gameover UI
        const gameover01 = this.add.bitmapText(centerX, centerY - 130, 'gemFont', 'GAME OVER', 110).setOrigin(0.5).setTint(0xFF0000);
        const gameover02 = this.add.bitmapText(centerX, centerY - 130, 'gemFont', 'GAME OVER', 110).setOrigin(0.5).setTint(0xFFCCCB).setBlendMode('ADD');
        
        const desc = this.add.bitmapText(centerX, centerY - 50, 'gemFont', 'Youve been exterminated!', 70).setOrigin(0.5).setTint(0xFFFFFF);
        const restart = this.add.bitmapText(centerX, centerY + 20, 'gemFont', 'Press Space to Restart or T to return to Title', 50).setOrigin(0.5).setTint(0xFFFFFF);
        const highscore = this.add.bitmapText(centerX, centerY + 80, 'gemFont', 'High Score: ' + highScore, 50).setOrigin(0.5).setTint(0xFFFFFF);

        this.tweens.add({
            targets: gameover01,
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
            targets: gameover02,
            duration: 2500,
            angle: { from: 1, to: -1 },
            yoyo: true,
            repeat: -1,
            onRepeat: function() {
                this.cameras.main.shake(100, 0.0025);
            },
            onRepeatScope: this
        });

        //hotkeys
        this.input.keyboard.on('keydown-SPACE', () => this.restartGame());
        this.input.keyboard.on('keydown-T',() => this.title());

        //stop play scene from receiving input
        this.input.stopPropagation();

    }

    update() {

    }

    restartGame() {
        this.scene.stop('Gameover');
        this.scene.start('Play');
    }

    title() {
        this.scene.stop('Gameover');
        this.scene.start('Title');
    }
}