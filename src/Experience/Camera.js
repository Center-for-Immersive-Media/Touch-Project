import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Experience from "@Experience/Experience.js";

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;

    this.setInstace();
    // this.setOrbitControls();
  }

  setInstace() {
    this.instance = new THREE.PerspectiveCamera(
      50,
      this.sizes.width / this.sizes.height,
      4,
      100
    );
    this.instance.position.set(0, 0, 8);
    this.instance.lookAt(0, 0, 0);
    this.scene.add(this.instance);
  }

  // setOrbitControls() {
  //   this.controls = new OrbitControls(this.instance, this.canvas);
  //   this.controls.enableDamping = true;
  // }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }

  update() {
    // this.controls.update();
  }
}
