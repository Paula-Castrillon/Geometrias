//escena
const scene = new THREE.Scene();

//fondo
var loader = new THREE.TextureLoader()
loader.load('../imagenes/Fondos/destellos.jpg', function(textura){
	scene.background = textura;
}); 

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.BoxGeometry( 1, 1, 1 );

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('./imagenes/ladrillos.jpg');
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading;

const cube = new THREE.Mesh( geometry, material );
scene.add( cube ); 

const cube1 = new THREE.Mesh( geometry, material );
scene.add( cube1 ); 
cube1.position.set(-3,0,0);

const cube2 = new THREE.Mesh( geometry, material );
scene.add( cube2 );
cube2.position.set(6,0,0);

const cube3 = new THREE.Mesh( geometry, material );
scene.add( cube3 ); 
cube3.position.set(3,0,0);  

//bordes
/* const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x00ff00 } ) );
scene.add( line ); */

//OrbitContol
/* control.minDistance = 2;
var control = new THREE.OrbitControls( camera, renderer.domElement );
control.maxDistance = 8; */
//Flycontronls

const flycontrols = new THREE.FlyControls ( camera, renderer.domElement);
 flycontrols.movementSpeed =30;
 flycontrols.rollSpeed =0.01;
 flycontrols.autoForward =false; 
 flycontrols.dragToLock =false;	

camera.position.y=0.1;
camera.position.x=1;
camera.position.z=5;

//1-dragcontrols - prueba 1
/* let objects = [cube, cube1,cube2, cube3]

const dcontrols = new THREE.DragControls( objects, camera, renderer.domElement );
dcontrols.enabled = true;

dcontrols.deactivate();
dcontrols.activate();

dcontrols.addEventListener("hover", function (event){
	console.log.apply(event.object)
});

2-dragcontrol - prueba 2
const DragControls = new THREE.DragControls( [cube, cube1, cube2, cube3], camera, renderer.domElement );
DragControls.deactivate();
DragControls.activate();

DragControls.addEventListener("hoveron", function (event){
	event.object.material.wireframe = true;
	event.object.scale.y *=4;
});
DragControls.addEventListener("hoveroff",function(event){
	event.object.material.wireframe = false;
	event.object.scale.y /=4;
}); */


//DragControl - prueba 3
/* const DragControls = new THREE.DragControls([cube, cube1, cube2, cube3,], camera,renderer.domElement);
DragControls.addEventListener('dragstar', function(event){
	Orbitcontrol.enable = false;
});

DragControls.addEventListener( 'dragend', function (event) {
	Orbitcontrol.enable = true;
})

const PointerLockControls = new THREE.PointerLockControls( camera, renderer.domElement );
document.getElementById('btnplay').onclick = ( ) =>	 {
	PointerLockControls.lock();
} */

//animacion
function animate() {
	requestAnimationFrame( animate );
	cube.rotation.y += 0.01;
	cube1.rotation.y += 0.01;
	cube2.rotation.y += 0.01;
	cube3.rotation.y += 0.01; 

	flycontrols.update(0.5);
	renderer.render( scene, camera );
}
animate();