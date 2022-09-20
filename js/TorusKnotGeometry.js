const scene = new THREE.Scene();
/* scene.background = new THREE.Color(0xac16f0);
 */
var loader = new THREE.TextureLoader()
loader.load('../imagenes/fondos/galaxia.jpg', function(textura){
	scene.background = textura;
}); 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//geometria
const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshStandardMaterial( { color: 0xac16f0 } );
const torusKnot = new THREE.Mesh( geometry, material);
material.metalness = 0.4;
material.roughness = 0.5;
const directionalLight = new THREE.DirectionalLight( 0xffff00, 5);
scene.add( directionalLight );
scene.add(torusKnot);

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

camera.position.z = 35;

function animate() {
    requestAnimationFrame(animate);
    torusKnot.rotation.x += 0.05;
    line.rotation.x += 0.05;
    renderer.render(scene, camera);
}
animate();