import Phaser from "phaser";

export default class Mob extends Phaser.Physics.Arcade.Sprite {
    /**
     * scene의 (x, y) 위치에 texture 이미지 및 animKey 애니메이션을 실행하며
     * initHp의 HP, dropRate의 아이템 드랍율을 가진 Mob object를 추가합니다.
     * @param {Phaser.scene} scene
     * @param {Number} x
     * @param {Number} y
     * @param {String} texture
     * @param {String} animKey
     * @param {Number} initHp
     * @param {Number} dropRate
     */

    constructor(scene, x, y, texture, animKey, initHp, dropRate) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.play(animKey);
        this.setDepth(10);
        this.scale = 2;
        // speed, hp, dropRate 멤버 변수를 추가해줍니다.
        // speed를 몹마다 다르게 조절할 수도 있습니다.
        this.m_speed = 50;
        this.m_hp = initHp;
        this.m_dropRate = dropRate;

        // 각 몹마다 사이즈에 맞게 body, size, offset을 설정해주었습니다.
        // https://docs.phaser.io/phaser/concepts/physics/arcade 에서 setbodysize 검색
    }
}
