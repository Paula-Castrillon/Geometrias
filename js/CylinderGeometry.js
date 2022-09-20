//escena
const scene = new THREE.Scene();
 scene.background = new THREE.Color(0xFA5543)

	//niebra
/* 	scene.fog = new THREE.Fog(fogColor, 0.25, 5);
 */
 var loader = new THREE.TextureLoader()
loader.load('../imagenes/fondos/montaña-niebla.jpg', function(textura){
	scene.background = textura;
}); 

//camara
const camera = new THREE.PerspectiveCamera(300, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
//const material = new THREE.MeshBasicMaterial( {color: 0xac160} );

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('./imagenes/luna.jpg');
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading;

const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line );

camera.position.z=40;

//animacion
function animate() {
	requestAnimationFrame( animate );
 	cylinder.rotation.x += 0.01;

	line.rotation.x += 0.01;
 	renderer.render( scene, camera );
}
animate();