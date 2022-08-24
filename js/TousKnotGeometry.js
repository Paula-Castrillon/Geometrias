const scene = new THREE.Scene();
scene.background = new THREE.Color(0xac16f0);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

scene.fog = new THREE.Fog(0xFFFFFF, 30, 40);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshBasicMaterial({ color: 0x28E176 });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

camera.position.z = 35;

function animate() {
    requestAnimationFrame(animate);
    torusKnot.rotation.x += 0.05;
    renderer.render(scene, camera);
}
animate();