import { createCube, createPyramid, createSphere } from './cube.js'; // Import createSphere
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


let scene, camera, renderer, cube;

export function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    cube = createCube();
    scene.add(cube);

    const pyramid = createPyramid();
    pyramid.position.set(0, 2, 0);
    scene.add(pyramid);

    const sphere = createSphere();
    sphere.position.set(0, -2, 0);
    scene.add(sphere);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Create and configure OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Add damping for smoother camera movement
    controls.dampingFactor = 0.05; // Adjust damping factor as needed

    animate();

    window.addEventListener('resize', onWindowResize);
}


function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

function onWindowResize() {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
}
