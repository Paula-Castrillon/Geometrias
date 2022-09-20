//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x27ff9a)

var loader = new THREE.TextureLoader()
loader.load('../imagenes/fondos/nube.jpg', function(textura){
	scene.background = textura;
}); 
//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.ConeGeometry( 5, 20, 32 );
//const material = new THREE.MeshBasicMaterial( {color: 0xac16f0} );

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('./imagenes/madera.jpg');
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading;

const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line );

camera.position.z=30;

//animacion
function animate() {
	requestAnimationFrame( animate );
	cone.rotation.y += 0.02;
	cone.rotation.x += 0.02;

	line.rotation.y += 0.02;
	line.rotation.x += 0.02;
	renderer.render( scene, camera );
}
animate();

