import { Scene } from "phaser";
import fontPng from "../../public/assets/font/font.png";
import fontXml from "../../public/assets/font/font.xml";

import bgImg1 from "../../public/assets/images/background.png";
import bgImg2 from "../../public/assets/images/background-2.png";
import bgImg3 from "../../public/assets/images/background-3.png";
import beamImg from "../../public/assets/images/beam.png";

import explosionImg from "../../public/assets/spritesheets/explosion.png";
import playerImg from "../../public/assets/spritesheets/player.png";
import expUpImg from "../../public/assets/spritesheets/expUp.png";
import mobImg1 from "../../public/assets/spritesheets/mob1.png";
import mobImg2 from "../../public/assets/spritesheets/mob2.png";
import mobImg3 from "../../public/assets/spritesheets/mob3.png";
import mobImg4 from "../../public/assets/spritesheets/mob4.png";
import lionImg from "../../public/assets/spritesheets/lion.png";
import catnipImg from "../../public/assets/spritesheets/catnip.png";
import clawWhiteImg from "../../public/assets/spritesheets/claw-white.png";
import clawYellowImg from "../../public/assets/spritesheets/claw-yellow.png";

import beamOgg from "../../public/assets/sounds/beam.ogg";
import scratchOgg from "../../public/assets/sounds/scratch.ogg";
import hitMobOgg from "../../public/assets/sounds/hitMob.ogg";
import growlOgg from "../../public/assets/sounds/growl.ogg";
import explosionOgg from "../../public/assets/sounds/explosion.ogg";
import hurtOgg from "../../public/assets/sounds/hurt.ogg";
import expUpOgg from "../../public/assets/sounds/expUp.ogg";
import nextLevelOgg from "../../public/assets/sounds/nextLevel.ogg";
import gameOverOgg from "../../public/assets/sounds/gameover.ogg";
import gameClearOgg from "../../public/assets/sounds/gameClear.ogg";
import pauseInOgg from "../../public/assets/sounds/pauseIn.ogg";
import pauseOutOgg from "../../public/assets/sounds/pauseOut.ogg";

export class Preloader extends Scene {
    constructor() {
        super("Preloader");
    }

    init() {
        //  이 이미지는 우리의 부트 씬에서 로드했으므로 여기에서 표시할 수 있습니다.
        this.add.image(512, 384, "background");

        //  간단한 진행 바입니다. 이것은 바의 외곽선입니다.
        this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

        //  이것은 진행 바 자체입니다. 진행률에 따라 왼쪽에서부터 크기가 증가합니다.
        const bar = this.add.rectangle(512 - 230, 384, 4, 28, 0xffffff);

        //  로더 플러그인에서 발생하는 'progress' 이벤트를 사용하여 로딩 바를 업데이트합니다.
        this.load.on("progress", (progress) => {
            //  진행 바를 업데이트합니다 (우리의 바는 464px 너비이므로 100% = 464px).
            bar.width = 4 + 460 * progress;
        });
    }

    preload() {
        //  게임 assets을 로드합니다 - 자신의 assets으로 교체하세요.
        this.load.setPath("assets");

        // this.load.image("logo", "logo.png");

        // IMAGES
        this.load.image(bgImg1, "/images/background1");
        this.load.image(bgImg2, "/images/background2");
        this.load.image(bgImg3, "/images/background3");
        this.load.image(beamImg, "/images/beam");

        // SPRITESHEETS
        this.load.spritesheet(playerImg, "/spritesheets/player", {
            frameWidth: 32,
            frameHeight: 36,
        });
        this.load.spritesheet(mobImg1, "/spritesheets/mob1", {
            frameWidth: 28,
            frameHeight: 28,
        });
        this.load.spritesheet(mobImg2, "/spritesheets/mob2", {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet(mobImg3, "/spritesheets/mob3", {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet(mobImg4, "/spritesheets/mob4", {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet(lionImg, "/spritesheets/lion", {
            frameWidth: 48,
            frameHeight: 64,
        });
        this.load.spritesheet(explosionImg, "/spritesheets/explosion", {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet(clawWhiteImg, "/spritesheets/claw_white", {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet(clawYellowImg, "/spritesheets/claw_yellow", {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet(catnipImg, "/spritesheets/catnip", {
            frameWidth: 64,
            frameHeight: 64,
        });
        this.load.spritesheet(expUpImg, "/spritesheets/exp-up", {
            frameWidth: 16,
            frameHeight: 16,
        });

        // AUDIOS
        // AUDIOS
        this.load.audio("beam", [beamOgg]);
        this.load.audio("scratch", [scratchOgg]);
        this.load.audio("hitMob", [hitMobOgg]);
        this.load.audio("growl", [growlOgg]);
        this.load.audio("explosion", [explosionOgg]);
        this.load.audio("expUp", [expUpOgg]);
        this.load.audio("hurt", [hurtOgg]);
        this.load.audio("nextLevel", [nextLevelOgg]);
        this.load.audio("gameOver", [gameOverOgg]);
        this.load.audio("gameClear", [gameClearOgg]);
        this.load.audio("pauseIn", [pauseInOgg]);
        this.load.audio("pauseOut", [pauseOutOgg]);

        // FONT
        this.load.bitmapFont(fontPng, "/font/pixelFont", fontXml);
    }

    create() {
        //  모든 자산이 로드되면, 나머지 게임에서 사용할 수 있는 전역 객체를 여기에서 생성하는 것이 종종 유용합니다.
        //  예를 들어, 다른 씬에서 사용할 수 있도록 전역 애니메이션을 여기에서 정의할 수 있습니다.
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

        //  메인 메뉴로 이동합니다. 카메라 페이드와 같은 씬 전환으로 교체할 수도 있습니다.
        this.scene.start("MainMenu");
    }
}
