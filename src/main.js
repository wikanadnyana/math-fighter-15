import Phaser from "phaser";

import HelloWorldScene from "./scenes/HelloWorldScene";
import MathFighterScene from "./scenes/MathFighterScene";

const config = {
  type: Phaser.AUTO,
  width: 480,
  height: 640,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: false,
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [MathFighterScene],
};

export default new Phaser.Game(config);
