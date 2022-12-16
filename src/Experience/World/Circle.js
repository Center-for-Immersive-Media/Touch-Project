import * as THREE from "three";
import Experience from "@Experience/Experience.js";

export default class Circle {
  constructor(x, y) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.x = x;
    this.y = y;

    this.setGeometry();
    this.setMaterial();
    this.setMesh();
  }
  setGeometry() {
    this.geometry = new THREE.CircleGeometry(0.5, 32);
  }

  setMaterial() {
    this.material = new THREE.MeshPhongMaterial({
      color: 0x333333,
    });
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(this.x, this.y, 0.1);
    this.mesh.receiveShadow = true;
    this.scene.add(this.mesh);
  }

  update(x, y) {
    this.mesh.position.setX = x;
    this.mesh.position.setY = y;
    this.mesh.position.setZ = 0.1;
  }
}
