import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeEndingEmblemProps {
  className?: string;
}

export default function ThreeEndingEmblem({ className = '' }: ThreeEndingEmblemProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050817, 0.04);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    container.appendChild(renderer.domElement);

    const emblemGroup = new THREE.Group();
    scene.add(emblemGroup);

    // Massive GTK Geometric Prism / Monolith Core
    const prismGeom = new THREE.DodecahedronGeometry(1.9, 0);
    const prismMat = new THREE.MeshStandardMaterial({
      color: 0x087BFF,
      emissive: 0x00C8FF,
      emissiveIntensity: 0.35,
      roughness: 0.15,
      metalness: 0.95,
      wireframe: false,
    });
    const prismMesh = new THREE.Mesh(prismGeom, prismMat);
    emblemGroup.add(prismMesh);

    // Outer wireframe cage
    const cageGeom = new THREE.IcosahedronGeometry(2.3, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0xFFC229,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const cageMesh = new THREE.Mesh(cageGeom, cageMat);
    emblemGroup.add(cageMesh);

    // Glowing Concentric Rings
    const ringGeom = new THREE.TorusGeometry(3.1, 0.035, 16, 120);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00C8FF,
      transparent: true,
      opacity: 0.85,
    });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.rotation.x = Math.PI / 3;
    emblemGroup.add(ring);

    const ring2Geom = new THREE.TorusGeometry(3.6, 0.02, 16, 120);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xFFC229,
      transparent: true,
      opacity: 0.6,
    });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.y = Math.PI / 3.5;
    ring2.rotation.z = Math.PI / 4;
    emblemGroup.add(ring2);

    // Ambient floating particles
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    const partGeom = new THREE.BufferGeometry();
    partGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const partMat = new THREE.PointsMaterial({
      color: 0x00C8FF,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(partGeom, partMat);
    scene.add(particles);

    // Lighting
    const lightCyan = new THREE.PointLight(0x00C8FF, 3, 15);
    lightCyan.position.set(0, 0, 2);
    scene.add(lightCyan);

    const lightGold = new THREE.PointLight(0xFFC229, 2, 10);
    lightGold.position.set(3, 3, 3);
    scene.add(lightGold);

    const ambLight = new THREE.AmbientLight(0x0A1025, 1);
    scene.add(ambLight);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      emblemGroup.rotation.y = time * 0.35;
      emblemGroup.rotation.x = Math.sin(time * 0.4) * 0.15;

      ring.rotation.z = time * 0.5;
      ring2.rotation.z = -time * 0.35;

      prismMesh.rotation.y = -time * 0.2;
      prismMesh.rotation.z = time * 0.1;

      particles.rotation.y = time * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || 500;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      prismGeom.dispose();
      cageGeom.dispose();
      ringGeom.dispose();
      ring2Geom.dispose();
      partGeom.dispose();
      prismMat.dispose();
      cageMat.dispose();
      ringMat.dispose();
      ring2Mat.dispose();
      partMat.dispose();
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[380px] sm:h-[460px] pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
}
