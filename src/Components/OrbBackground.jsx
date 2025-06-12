import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const OrbBackground = () => {
  const mountRef = useRef();

  useEffect(() => {

    const mount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Central sphere
    const sphereGeometry = new THREE.SphereGeometry(1, 64, 64);
    const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x19181A,
  wireframe: true,
  flatShading: true,
  transparent: true,
  opacity: 0.2,

    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

        const scrollY = window.scrollY || window.pageYOffset;
sphere.rotation.y += scrollY * 0.00005;


    // Group to hold ring of rings
    const ringsGroup = new THREE.Group();
    scene.add(ringsGroup);

    const ringCount = 25; // Number of small rings
    const bigRadius = 2.5; // Radius of the big circle where small rings are placed

    const smallRingGeometry = new THREE.TorusGeometry(0.3, 0.02, 16, 100);
    const smallRingMaterial = new THREE.MeshBasicMaterial({
  color: 0x19181A,
  wireframe: true,
  transparent: true,
  opacity: 0.2,  // lighter transparency for rings
});


    for (let i = 0; i < ringCount; i++) {
  const ring = new THREE.Mesh(smallRingGeometry, smallRingMaterial);

  // Calculate angle for even spacing around circle
  const angle = (i / ringCount) * Math.PI * 2;

// Position on big circle
ring.position.set(
  Math.cos(angle) * bigRadius,
  0,
  Math.sin(angle) * bigRadius
);

// Tangent vector to big circle at angle
const tangent = new THREE.Vector3(-Math.sin(angle), 0, Math.cos(angle));

// Default ring axis is +Z, rotate ring so +Z aligns with tangent
const defaultAxis = new THREE.Vector3(0, 0, 1);
const quat = new THREE.Quaternion().setFromUnitVectors(defaultAxis, tangent);

ring.quaternion.copy(quat);


  ringsGroup.add(ring);
}

// Tilt the whole ring group like Saturn's rings but tilted sideways (left-down)
// Rotate slightly around X (leaning forward/back) and Z (leaning left/right)

const tiltEuler = new THREE.Euler(
  THREE.MathUtils.degToRad(10),  // forward/back tilt
  0,
  THREE.MathUtils.degToRad(-25)  // left/right tilt
);
const tiltQuat = new THREE.Quaternion().setFromEuler(tiltEuler);

// Apply tilt once to the group
ringsGroup.quaternion.copy(tiltQuat);

// Compute tilt axis in world space
const tiltAxis = new THREE.Vector3(0, 1, 0).applyQuaternion(tiltQuat).normalize();


    // Tilt the whole ring group like Saturn's rings
let scrollYPrev = window.scrollY || window.pageYOffset;

    const animate = () => {
  requestAnimationFrame(animate);

  const scrollY = window.scrollY || window.pageYOffset;
  const deltaY = scrollY - scrollYPrev;

  if (deltaY !== 0) {
    // Rotate based on scroll direction and amount
    const rotationSpeed = 0.001;  // smaller = slower

sphere.rotation.y += deltaY * rotationSpeed;
ringsGroup.rotateOnWorldAxis(tiltAxis, deltaY * rotationSpeed);

  }

  scrollYPrev = scrollY;

  renderer.render(scene, camera);
};



    animate();

    // Resize handling
    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default OrbBackground;
