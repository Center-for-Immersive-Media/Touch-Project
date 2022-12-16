import * as THREE from "three";

import Experience from "@Experience/Experience.js";
import Circle from "@World/Circle";

export default class Touch {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.camera = this.experience.camera;
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this.cicle = null;
    this.intersects = [];

    this.addTouchStartListener();
    this.addTouchMoveListener();
    this.addTouchEndListener();
  }

  addTouchStartListener() {
    window.experience.canvas.addEventListener("touchstart", (e) => {
      this.setPointerPosition(e.touches[0].clientX, e.touches[0].clientY);
      this.update();
      //   console.log("Touch started:", this.pointer);
    });
  }

  addTouchMoveListener() {
    window.experience.canvas.addEventListener("touchmove", (e) => {
      this.setPointerPosition(e.touches[0].clientX, e.touches[0].clientY);
      this.update();
    });
  }

  addTouchEndListener() {
    window.experience.canvas.addEventListener("touchend", (e) => {
      this.update();
      //   console.log("Touch ended:", this.pointer);
    });
  }

  setPointerPosition(clientX, clientY) {
    this.pointer.x = (clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = -(clientY / window.innerHeight) * 2 + 1;
  }

  setCircle() {
    if (this.cicle === null) {
      this.circle = new Circle();
    } else {
      this.circle.update(this.pointer.x, this.pointer.y);
    }
  }

  update() {
    this.setCircle();
    this.raycaster.set(
      new THREE.Vector3(this.pointer.x, this.pointer.y, 8),
      new THREE.Vector3(0, 0, -1)
    );
    // this.intersects = this.raycaster.intersectObjects(this.scene.children);
    // console.log(this.intersects);
    // this.intersects[1].object.position.set(
    //   this.intersects[0].point.x,
    //   this.intersects[0].point.y,
    //   0.1
    // );
  }
}
