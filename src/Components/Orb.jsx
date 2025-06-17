import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

const Orb = () => {
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
    camera.position.z = 2.9;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // Central sphere
    const sphereGeometry = new THREE.SphereGeometry(1, 64, 64);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x19181a,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Rings group
    const ringsGroup = new THREE.Group();
    scene.add(ringsGroup);

    const ringCount = 25;
    const bigRadius = 2.5;
    const smallRingGeometry = new THREE.TorusGeometry(0.3, 0.02, 16, 100);
    const smallRingMaterial = new THREE.MeshBasicMaterial({
      color: 0x19181a,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });

    for (let i = 0; i < ringCount; i++) {
      const ring = new THREE.Mesh(smallRingGeometry, smallRingMaterial);
      const angle = (i / ringCount) * Math.PI * 2;

      ring.position.set(Math.cos(angle) * bigRadius, 0, Math.sin(angle) * bigRadius);

      // Rotate ring so +Z axis aligns with tangent
      const tangent = new THREE.Vector3(-Math.sin(angle), 0, Math.cos(angle));
      const defaultAxis = new THREE.Vector3(0, 0, 1);
      const quat = new THREE.Quaternion().setFromUnitVectors(defaultAxis, tangent);
      ring.quaternion.copy(quat);

      ringsGroup.add(ring);
    }

    // Tilt rings group like Saturn's rings
    const tiltEuler = new THREE.Euler(
      THREE.MathUtils.degToRad(10),
      0,
      THREE.MathUtils.degToRad(-25)
    );
    const tiltQuat = new THREE.Quaternion().setFromEuler(tiltEuler);
    ringsGroup.quaternion.copy(tiltQuat);

    const tiltAxis = new THREE.Vector3(0, 1, 0).applyQuaternion(tiltQuat).normalize();

    let scrollYPrev = window.scrollY || window.pageYOffset;

    const animate = () => {
      requestAnimationFrame(animate);

      const scrollY = window.scrollY || window.pageYOffset;
      const deltaY = scrollY - scrollYPrev;

      if (deltaY !== 0) {
        const rotationSpeed = 0.001;
        sphere.rotation.y += deltaY * rotationSpeed;
        ringsGroup.rotateOnWorldAxis(tiltAxis, deltaY * rotationSpeed);
      }

      scrollYPrev = scrollY;

      renderer.render(scene, camera);
    };

    // Sphere initial animation
    gsap.fromTo(
      [sphere.scale, ringsGroup.scale],
      { x: 0.8, y: 0.8, z: 0.8 },
      {
        x: 1,
        y: 1,
        z: 1,
        duration: 2,
        ease: 'power2.out',
        stagger: 0.2,
      }
    );

    // Rings initial animation
    gsap.fromTo(
      [sphereMaterial, smallRingMaterial],
      { opacity: 0 },
      {
        opacity: 0.2,
        duration: 2,
        ease: 'power2.out',
        stagger: 0.2,
      }
    );

    animate();

    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
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

export default Orb;
