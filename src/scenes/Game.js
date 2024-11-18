import { Scene } from "phaser";
import Player from "../characters/Player";
import { setBackground } from "../utils/backgroundManager";
import Config from "../Config";
// import { ConstraintFactory } from "matter";

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

        /** Player */
        this.m_player = new Player(this);

        // camera가 player를 따라 이동 - player가 화면 가운데로 고정
        this.cameras.main.startFollow(this.m_player);

        setBackground(this, "background");

        this.m_cursorKeys = this.input.keyboard.createCursorKeys();

        this.input.once("pointerdown", () => {
            this.scene.start("GameOver");
        });
    }

    update() {
        this.movePlayerManager();

        /** camera가 가는 곳으로 background가 따라 움직이도록 해줌 */
        this.m_background.setX(this.m_player.x - Config.width / 2);
        this.m_background.setY(this.m_player.y - Config.height / 2);

        /** tilePostition을 player가 움직이는 만큼 이동시켜 마치 무한 배경인 것처럼 나타내줌 */
        this.m_background.tilePositionX = this.m_player.x - Config.width / 2;
        this.m_background.tilePositionY = this.m_player.y - Config.height / 2;
    }

    // Player 이동 메소드
    movePlayerManager() {
        /**
         * 이동 키가 눌려있으면 player가 걸어다니는 애니메이션을 재생하고,
         * 이동 키가 눌려있지 않으면 player가 가만히 있도록 함
         */
        if (
            this.m_cursorKeys.left.isDown ||
            this.m_cursorKeys.right.isDown ||
            this.m_cursorKeys.up.isDown ||
            this.m_cursorKeys.down.isDown
        ) {
            if (!this.m_player.m_moving) {
                this.m_player.play("player_anim");
            }
            this.m_player.m_moving = true;
        } else {
            if (this.m_player.m_moving) {
                this.m_player.play("player_idle");
            }
            this.m_player.m_moving = false;
        }

        /**
         * vector을 사용해 움직임을 관리
         * vector = [x좌표 방향, y좌표 방향]
         * 왼쪽 키가 눌려있을 때는 vector[0] += -1, 오른 쪽 키가 눌려있을 때는 vector[0] += 1을 해줌
         */
        let vector = [0, 0];

        if (this.m_cursorKeys.left.isDown) {
            vector[0] += -1;
        } else if (this.m_cursorKeys.right.isDown) {
            vector[0] += 1;
        }
        if (this.m_cursorKeys.up.isDown) {
            vector[1] += -1;
        } else if (this.m_cursorKeys.down.isDown) {
            vector[1] += 1;
        }

        // vector를 player 클래스의 메소드의 파라미터로 넘겨줌
        this.m_player.move(vector);
    }
}
