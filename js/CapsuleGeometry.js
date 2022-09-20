//escena
const scene = new THREE.Scene();

//fondo
var loader = new THREE.TextureLoader()
loader.load('../imagenes/Fondos/abstracto.jpg', function(textura){
	scene.background = textura;
}); 

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('./imagenes/granoscafe.jpg');
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading;

const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

//bordes
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line );

camera.position.y=0.1;
camera.position.x=-0.1;
camera.position.z=5;

//animacion
function animate() {
	requestAnimationFrame( animate );
	capsule.rotation.y += 0.01;
	capsule.rotation.x += 0.01;
	line.rotation.x += 0.01; 
	line.rotation.y += 0.01; 
	renderer.render( scene, camera );
}
animate();