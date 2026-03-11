import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useEffect } from "react";

import s from "../../styles/globe.module.scss";

export default function Globe() {
  var camera, scene, renderer, controls;
  var mesh;

  function init() {
    renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#canvas"),
      alpha: true,
    });
    renderer.setClearColor(0x000000, 0);

    camera = new THREE.PerspectiveCamera(70, 1, 1, 100);
    camera.position.z = 25;

    scene = new THREE.Scene();

    controls = new OrbitControls(camera, renderer.domElement);

    var geometry = new THREE.SphereGeometry(10, 100, 100);
    const texture = new THREE.TextureLoader().load("./earth.png");
    var material = new THREE.MeshPhongMaterial({
      map: texture,
      opacity: 0.5,
      transparent: true,
    });

    mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x += 0.1;
    scene.add(mesh);

    var light1 = new THREE.AmbientLight(0xffffff);
    light1.position.set(100, 50, 100);
    scene.add(light1);
  }

  function resize() {
    var width = renderer.domElement.clientWidth;
    var height = renderer.domElement.clientHeight;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    controls.update();
  }

  function animate() {
    resize();
    mesh.rotation.y -= 0.003;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
    controls.update();
  }

  useEffect(() => {
    init();
    animate();
  }, []);

  return (
    <div className={s.globeOverflow}>
      <div className={s.globeBG}>
        <div className={s.earthContainer}>
          <canvas
            id="canvas"
            width="3000"
            height="1900"
            className={s.earth}
          ></canvas>
        </div>
      </div>
      <div className={s.topTextContainer}>
        <h2 className={s.heading}>Global scale</h2>
        <h1 className={s.title}>
          The backbone for <br />
          internet business
        </h1>
        <p className={s.text}>
          For ambitious companies around the world, Stripe makes moving money as
          simple, borderless, and programmable as the rest of the internet. Our
          teams are based in dozens of offices around the world and we process
          hundreds of billions of dollars each year for{" "}
          <a href="#">startups to Fortune 500s</a>.
        </p>
      </div>
      <div className={s.bottomTextContainer}>
        <div className={s.columnContainer}>
          <div className={s.column}>
            <h2 className={s.columnTitle}>250M+</h2>
            <p className={s.columnText}>
              API requests per day peaking at 13,000 requests a second.
            </p>
          </div>
          <div className={s.column}>
            <h2 className={s.columnTitle}>90%</h2>
            <p className={s.columnText}>
              of US adults have bought from <br /> businesses using Stripe.
            </p>
          </div>
          <div className={s.column}>
            <h2 className={s.columnTitle}>135+</h2>
            <p className={s.columnText}>
              currencies and payment <br /> methods supported.
            </p>
          </div>
          <div className={s.column}>
            <h2 className={s.columnTitle}>35+</h2>
            <p className={s.columnText}>
              countries with local aquiring, <br /> optimizing acceptance rates.
            </p>
          </div>
        </div>
      </div>

      <div className={s.globeBGEnd}></div>
    </div>
  );
}
