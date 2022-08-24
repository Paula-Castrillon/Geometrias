//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xFA5543)

var fogColor = new THREE.Color(0x27ff9a);
	scene.background = fogColor; // Setting fogColor as the background color also
	scene.fog = new THREE.Fog(fogColor, 0.25, 5);

var loader = new THREE.TextureLoader()
loader.load('../imagenes/fondo.jpg', function(textura){
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
const material = new THREE.MeshBasicMaterial( {color: 0xac160} );
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

camera.position.z=40;

//animacion
function animate() {
	requestAnimationFrame( animate );
	cylinder.rotation.x += 0.1;
	renderer.render( scene, camera );
}
animate();