// Criação da cena, câmera e renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg-canvas'),
    antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Adicionando uma luz ambiente
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Adicionando uma luz direcional para iluminar o modelo
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Carregando o modelo GLB
const loader = new THREE.GLTFLoader();
loader.load(
    '../assets/obj1.glb',  // Certifique-se de que o caminho esteja correto em relação ao seu arquivo .html
    (gltf) => {
        console.log('Modelo carregado', gltf);
        const model = gltf.scene;
        model.scale.set(1, 1, 1);  // Ajuste de escala do modelo
        scene.add(model);
        animate();
    },
    undefined,
    (error) => console.error('Erro ao carregar o modelo:', error)
);

// Definindo a posição da câmera
camera.position.set(0, 1, 3);  // A câmera está mais próxima do modelo

// Ajustar o tamanho da tela ao redimensionar
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Função de animação
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
