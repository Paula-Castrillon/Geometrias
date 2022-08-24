//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x27ff9a)

var loader = new THREE.TextureLoader()
loader.load('../imagenes/fondo.jpg', function(textura){
	scene.background = textura;
});
scene.fog = new THREE.Fog(0x000000, 30, 50);

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const x = 0, y = 0;

const heartShape = new THREE.Shape();

heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

const geometry = new THREE.ShapeGeometry( heartShape );
const material = new THREE.MeshBasicMaterial( { color: 0xac16f0} );
const mesh = new THREE.Mesh( geometry, material ) ;
scene.add( mesh );

camera.position.z=40;
camera.position.y=10;
camera.position.x=10;


//animacion
function animate() {
	requestAnimationFrame( animate );
	mesh.rotation.y += 0.02;
	mesh.rotation.x += 0.02;
	mesh.rotation.z += 0.02;
	renderer.render( scene, camera );
}
animate();
