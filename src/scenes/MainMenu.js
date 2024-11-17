import { Scene } from "phaser";

export class MainMenu extends Scene {
    constructor() {
        super("MainMenu");
    }

    create() {
        this.add.image(512, 384, "background");

        // this.add.text(512, 460, 'Main Menu', {
        //     fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
        //     stroke: '#000000', strokeThickness: 8,
        //     align: 'center'
        // }).setOrigin(0.5);
        this.add.text(20, 20, "Loading game...");

        this.input.once("pointerdown", () => {
            this.scene.start("Game");
        });

        // MOBS
        this.anims.create({
            key: "mob1_anim",
            frames: this.anims.generateFrameNumbers("mob1"),
            frameRate: 12,
            repeat: -1,
        });
        this.anims.create({
            key: "mob2_anim",
            frames: this.anims.generateFrameNumbers("mob2"),
            frameRate: 12,
            repeat: -1,
        });
        this.anims.create({
            key: "mob3_anim",
            frames: this.anims.generateFrameNumbers("mob3"),
            frameRate: 12,
            repeat: -1,
        });
        this.anims.create({
            key: "mob4_anim",
            frames: this.anims.generateFrameNumbers("mob4"),
            frameRate: 12,
            repeat: -1,
        });
        this.anims.create({
            key: "lion_anim",
            frames: this.anims.generateFrameNumbers("lion"),
            frameRate: 12,
            repeat: -1,
        });
        this.anims.create({
            key: "lion_idle",
            frames: this.anims.generateFrameNumbers("lion", {
                start: 0,
                end: 0,
            }),
            frameRate: 1,
            repeat: 0,
        });

        // PLAYERS
        this.anims.create({
            key: "player_anim",
            frames: this.anims.generateFrameNumbers("player"),
            frameRate: 12,
            repeat: -1,
        });
        this.anims.create({
            key: "player_idle",
            frames: this.anims.generateFrameNumbers("player", {
                start: 0,
                end: 0,
            }),
            frameRate: 1,
            repeat: 0,
        });

        // EFFECT
        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true,
        });

        // ATTACKS
        this.anims.create({
            key: "scratch_white",
            frames: this.anims.generateFrameNumbers("claw_white"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true,
        });
        this.anims.create({
            key: "scratch_yellow",
            frames: this.anims.generateFrameNumbers("claw_yellow"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true,
        });
        this.anims.create({
            key: "catnip_anim",
            frames: this.anims.generateFrameNumbers("catnip"),
            frameRate: 20,
            repeat: -1,
        });

        // EXP UP ITEMS
        this.anims.create({
            key: "red",
            frames: this.anims.generateFrameNumbers("exp-up", {
                start: 0,
                end: 0,
            }),
            frameRate: 20,
            repeat: 0,
        });
        this.anims.create({
            key: "blue",
            frames: this.anims.generateFrameNumbers("exp-up", {
                start: 1,
                end: 1,
            }),
            frameRate: 20,
            repeat: 0,
        });
        this.anims.create({
            key: "yellow",
            frames: this.anims.generateFrameNumbers("exp-up", {
                start: 2,
                end: 2,
            }),
            frameRate: 20,
            repeat: 0,
        });
        this.anims.create({
            key: "green",
            frames: this.anims.generateFrameNumbers("exp-up", {
                start: 3,
                end: 3,
            }),
            frameRate: 20,
            repeat: 0,
        });
    }
}
