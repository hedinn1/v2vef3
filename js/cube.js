export function createCube() {
    const geometry = new THREE.BoxGeometry();
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('texture.jpg');

    const material = new THREE.MeshStandardMaterial({
        map: texture,
    });

    return new THREE.Mesh(geometry, material);
}

export function createPyramid() {
    const geometry = new THREE.ConeGeometry(1, 2, 4); // Create a pyramid geometry
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('texture.jpg');

    const material = new THREE.MeshStandardMaterial({
        map: texture,
    });

    return new THREE.Mesh(geometry, material);
}

export function createSphere() {
    const geometry = new THREE.SphereGeometry(1, 32, 32); // Create a sphere geometry
    const material = new THREE.MeshStandardMaterial({ color: 0x0000ff }); // Adjust color as needed
    return new THREE.Mesh(geometry, material);
}