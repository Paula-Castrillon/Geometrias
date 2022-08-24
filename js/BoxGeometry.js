//escena
const scene = new THREE.Scene();

scene.background = new THREE.Color(0x00000)

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const material = new THREE.MeshBasicMaterial( {color: 0x95d1d0} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.y=0.1;
camera.position.x=1;
camera.position.z=5;

//animacion
function animate() {
	requestAnimationFrame( animate );
	cube.rotation.y += 0.1;
	renderer.render( scene, camera );
}
animate();