const scene = new THREE.Scene();

var loader = new THREE.TextureLoader()
loader.load('../imagenes/fondos/trueno.jpg', function(textura){
	scene.background = textura;
}); 

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//geometria
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshNormalMaterial({ color: 0x28E176 });
material.flatShading = true;
const torusKnot = new THREE.Mesh(geometry, material);

const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

//borde
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

camera.position.z = 35;

//animacion
function animate() {
    requestAnimationFrame(animate);
    torus.rotation.y += 0.01;
    line.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

/* const material = new THREE.MeshNormalMaterial( {color: 0xffff00});
material.flatShading = true; */