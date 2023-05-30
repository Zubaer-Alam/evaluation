import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


var scene = new THREE.Scene();
//adding ambient light
scene.add(new THREE.AmbientLight(0xffffff));

var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 0, 5);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x00ff00)
document.body.appendChild(renderer.domElement);

var gltf;

// Load your 3D model
var loader = new GLTFLoader();
loader.load(
    'models/pyramid.glb',
    (gltfData) => {
        // Assign the loaded gltf data to the gltf variable
        gltf = gltfData;

        // Scale down the model
        //gltf.scene.scale.set(0.1, 0.1, 0.1);
        scene.add(gltf.scene);
    },
    undefined,
    (error) => {
        console.error(error);
    }
);

// Render the scene
var animate = () => {
    requestAnimationFrame(animate);

    if (gltf) {
        // Rotate the model if gltf is loaded
        gltf.scene.rotation.y += 0.05; 
        gltf.scene.rotation.x += 0.007; 
    }

    renderer.render(scene, camera);
};

animate();
