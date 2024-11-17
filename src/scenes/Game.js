import { Scene } from "phaser";
import Player from "../characters/Player";
import { setBackground } from "../utils/backgroundManager";

export class Game extends Scene {
    constructor() {
        super("Game");
    }

    create() {
        this.cameras.main.setBackgroundColor(0x00ff00);

        this.add.image(512, 384, "bgImg1").setAlpha(0.5);

        this.add
            .text(
                512,
                384,
                "Make something fun!\nand share it with us:\nsupport@phaser.io",
                {
                    fontFamily: "Arial Black",
                    fontSize: 38,
                    color: "#ffffff",
                    stroke: "#000000",
                    strokeThickness: 8,
                    align: "center",
                }
            )
            .setOrigin(0.5);

        this.m_beamSound = this.sound.add("beam");
        this.m_scratchSound = this.sound.add("scratch");
        this.m_hitMobSound = this.sound.add("hitMob");
        this.m_growlSound = this.sound.add("growl");
        this.m_explosionSound = this.sound.add("explosion");
        this.m_expUpSound = this.sound.add("expUp");
        this.m_hurtSound = this.sound.add("hurt");
        this.m_nextLevelSound = this.sound.add("nextLevel");
        this.m_gameOverSound = this.sound.add("gameOver");
        this.m_gameClearSound = this.sound.add("gameClear");
        this.m_pauseInSound = this.sound.add("pauseIn");
        this.m_pauseOutSound = this.sound.add("pauseOut");

        this.m_player = new Player(this);

        setBackground(this, "background");

        this.input.once("pointerdown", () => {
            this.scene.start("GameOver");
        });
    }
}
