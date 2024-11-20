import { Scene } from "phaser";
import Config from "../Config";

export class MainMenu extends Scene {
    constructor() {
        super("MainMenu");
    }

    create() {
        this.add.image(512, 384, "bg1");

        this.add
            .text(Config.width / 2, Config.height / 2, "Main Menu", {
                fontFamily: "Arial Black",
                fontSize: 38,
                color: "#ffffff",
                stroke: "#000000",
                strokeThickness: 8,
                align: "center",
            })
            .setOrigin(0.5);

        this.input.once("pointerdown", () => {
            this.scene.start("Game");
        });
    }
}
