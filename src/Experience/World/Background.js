import * as THREE from "three";
import Experience from "@Experience/Experience.js";

export default class Background {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setGeometry();
    this.setMaterial();
    this.setMesh();
  }

  setGeometry() {
    this.geometry = new THREE.PlaneGeometry(15, 15);
  }

  setMaterial() {
    this.material = new THREE.MeshBasicMaterial({
      color: 0x000000,
    });
  }
  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(0, 0, 0);
    this.mesh.receiveShadow = true;
    this.scene.add(this.mesh);
  }

  update() {}
}
