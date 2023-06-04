import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

var scene = new THREE.Scene();
scene.add(new THREE.AmbientLight(0xffffff));

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 0, 5);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x00ff00);
document.body.appendChild(renderer.domElement);

var gltf;

const loader = new GLTFLoader();

loader.load(
    'models/pyramid.glb',
    (gltfData) => {
        gltf = gltfData;
        scene.add(gltf.scene);
    },
    undefined,
    (error) => {
        console.error(error);
    }
);


const animate = () => {
    requestAnimationFrame(animate);

    if (gltf) {
        gltf.scene.rotation.y += 0.05;
        gltf.scene.rotation.x += 0.007;
    }

    renderer.render(scene, camera);
};

animate();
