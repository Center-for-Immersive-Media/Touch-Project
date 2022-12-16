import * as THREE from "three";
import Experience from "@Experience/Experience.js";

import Environment from "@World/Environment.js";
import Background from "@World/Background";
import VideoSphere from "@World/VideoSphere.js";
import Fox from "@World/Fox";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.resources.on("loaded", () => {
      // this.fox = new Fox();
      this.floor = new Background();
      this.enviorment = new Environment();
    });
  }

  update() {
    if (this.fox) {
      this.fox.update();
    }
  }
}
