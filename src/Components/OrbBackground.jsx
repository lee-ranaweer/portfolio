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
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Central sphere
    const sphereGeometry = new THREE.SphereGeometry(1, 64, 64);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x19181A,
      flatShading: true,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Group to hold ring of rings
    const ringsGroup = new THREE.Group();
    scene.add(ringsGroup);

    const ringCount = 30; // Number of small rings
    const bigRadius = 2.5; // Radius of the big circle where small rings are placed

    const smallRingGeometry = new THREE.TorusGeometry(0.3, 0.02, 16, 100);
    const smallRingMaterial = new THREE.MeshBasicMaterial({ color: 0x19181A , wireframe: true });

    for (let i = 0; i < ringCount; i++) {
  const ring = new THREE.Mesh(smallRingGeometry, smallRingMaterial);

  // Calculate angle for even spacing around circle
  const angle = (i / ringCount) * Math.PI * 2;

  // Position each ring on the big circle
  ring.position.set(
    Math.cos(angle) * bigRadius,
    0,
    Math.sin(angle) * bigRadius
  );

  // Rotate each small ring so it stands vertically sideways (rings face sideways)
  ring.rotation.y = Math.PI / 2;

  ringsGroup.add(ring);
}

// Tilt the whole ring group like Saturn's rings but tilted sideways (left-down)
// Rotate slightly around X (leaning forward/back) and Z (leaning left/right)
ringsGroup.rotation.x = THREE.MathUtils.degToRad(10); // slight forward lean
ringsGroup.rotation.z = THREE.MathUtils.degToRad(-25); // tilt left downward


    // Tilt the whole ring group like Saturn's rings

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      sphere.rotation.y += 0.002;
      ringsGroup.rotation.y += 0.003; // Rotate horizontally around Y axis

      // Scroll-based movement for sphere rotation
      const scrollY = window.scrollY || window.pageYOffset;
      sphere.rotation.y += scrollY * 0.00005;

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
