import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeHeroCoreProps {
  className?: string;
}

export default function ThreeHeroCore({ className = '' }: ThreeHeroCoreProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // --- 1. SCENE, CAMERA, RENDERER ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    // Adjusted camera elevation and distance for dead-center chip framing
    camera.position.set(0, 2.8, 5.4);
    camera.lookAt(0, 0.5, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.6;

    container.appendChild(renderer.domElement);

    // Root Group for Mouse Parallax & Scroll Manipulation
    const systemGroup = new THREE.Group();
    // Default crisp isometric presentation angle
    systemGroup.rotation.x = 0.52;
    systemGroup.rotation.y = -0.32;
    scene.add(systemGroup);

    // --- 2. HIGH-RES PROCEDURAL AI CHIP TEXTURE (SELF-ILLUMINATING) ---
    const makeChipTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      // Deep dark navy silicon wafer
      ctx.fillStyle = '#060D24';
      ctx.fillRect(0, 0, 1024, 1024);

      // Outer glowing cyan border
      ctx.strokeStyle = '#00C8FF';
      ctx.lineWidth = 18;
      ctx.strokeRect(30, 30, 964, 964);

      // Gold secondary perimeter trace
      ctx.strokeStyle = '#FFC229';
      ctx.lineWidth = 6;
      ctx.strokeRect(55, 55, 914, 914);

      // Dense circuit bus lines
      ctx.strokeStyle = '#087BFF';
      ctx.lineWidth = 3;
      for (let i = 90; i < 940; i += 32) {
        // Horizontal circuit paths
        ctx.beginPath();
        ctx.moveTo(70, i);
        ctx.lineTo(340, i);
        ctx.lineTo(410, i > 512 ? i - 50 : i + 50);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(954, i);
        ctx.lineTo(684, i);
        ctx.lineTo(614, i > 512 ? i - 50 : i + 50);
        ctx.stroke();

        // Vertical circuit paths
        ctx.beginPath();
        ctx.moveTo(i, 70);
        ctx.lineTo(i, 340);
        ctx.lineTo(i > 512 ? i - 50 : i + 50, 410);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(i, 954);
        ctx.lineTo(i, 684);
        ctx.lineTo(i > 512 ? i - 50 : i + 50, 614);
        ctx.stroke();
      }

      // Central Neural Die Area (High Contrast)
      ctx.fillStyle = '#0A173B';
      ctx.fillRect(290, 290, 444, 444);

      ctx.strokeStyle = '#00C8FF';
      ctx.lineWidth = 10;
      ctx.strokeRect(290, 290, 444, 444);

      // Inner Gold Circuit Core
      ctx.strokeStyle = '#FFC229';
      ctx.lineWidth = 5;
      ctx.strokeRect(360, 360, 304, 304);

      // Prominent Gold Corner Solder Pads
      ctx.fillStyle = '#FFC229';
      const corners = [
        [310, 310], [714, 310], [310, 714], [714, 714],
        [120, 120], [904, 120], [120, 904], [904, 904],
        [512, 120], [512, 904], [120, 512], [904, 512],
      ];
      corners.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.fill();
      });

      // Neon Cyan Laser Etching Typography
      ctx.fillStyle = '#00C8FF';
      ctx.font = 'bold 44px "Space Grotesk", monospace, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('GEN TECH KA', 512, 470);

      ctx.fillStyle = '#FFC229';
      ctx.font = 'bold 26px "Space Grotesk", monospace, sans-serif';
      ctx.fillText('NEURAL AI PROCESSOR', 512, 520);

      ctx.fillStyle = '#F5F7FF';
      ctx.font = 'bold 18px monospace';
      ctx.fillText('ARCH // GTK-900 QUANTUM CORE', 512, 565);

      return new THREE.CanvasTexture(canvas);
    };

    const chipTexture = makeChipTexture();

    // --- 3. HARDWARE MESH COMPONENTS ---
    const chipGroup = new THREE.Group();
    chipGroup.position.set(0, 0.45, 0);
    chipGroup.scale.set(1.18, 1.18, 1.18);
    systemGroup.add(chipGroup);

    // 1. Motherboard PCB Carrier Base (Obsidian with Neon Edges)
    const pcbGeom = new THREE.BoxGeometry(3.8, 0.18, 3.8);
    const pcbMat = new THREE.MeshStandardMaterial({
      color: 0x081026,
      roughness: 0.25,
      metalness: 0.85,
    });
    const pcbMesh = new THREE.Mesh(pcbGeom, pcbMat);
    pcbMesh.position.y = -0.15;
    chipGroup.add(pcbMesh);

    // Outer Glowing Electric Blue Frame
    const pcbFrameGeom = new THREE.BoxGeometry(3.88, 0.22, 3.88);
    const pcbFrameMat = new THREE.MeshBasicMaterial({
      color: 0x087BFF,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    const pcbFrame = new THREE.Mesh(pcbFrameGeom, pcbFrameMat);
    pcbFrame.position.y = -0.15;
    chipGroup.add(pcbFrame);

    // 2. High-Specularity Gold Perimeter Contact Pins (28 total pins!)
    const pinGeom = new THREE.BoxGeometry(0.12, 0.12, 0.35);
    const pinMat = new THREE.MeshStandardMaterial({
      color: 0xFFC229,
      roughness: 0.05,
      metalness: 0.98,
      emissive: 0xFFC229,
      emissiveIntensity: 0.45,
    });

    const pinPositions = [-1.5, -1.05, -0.6, -0.15, 0.3, 0.75, 1.2, 1.5];
    pinPositions.forEach((pos) => {
      // North & South
      const pN = new THREE.Mesh(pinGeom, pinMat);
      pN.position.set(pos, -0.15, 1.95);
      chipGroup.add(pN);

      const pS = new THREE.Mesh(pinGeom, pinMat);
      pS.position.set(pos, -0.15, -1.95);
      chipGroup.add(pS);

      // East & West
      const pE = new THREE.Mesh(pinGeom, pinMat);
      pE.rotation.y = Math.PI / 2;
      pE.position.set(1.95, -0.15, pos);
      chipGroup.add(pE);

      const pW = new THREE.Mesh(pinGeom, pinMat);
      pW.rotation.y = Math.PI / 2;
      pW.position.set(-1.95, -0.15, pos);
      chipGroup.add(pW);
    });

    // 3. Central Titanium Silicon Processor Die with Active Texture
    const dieGeom = new THREE.BoxGeometry(2.7, 0.28, 2.7);
    const dieMat = new THREE.MeshStandardMaterial({
      color: 0x0D1B42,
      roughness: 0.15,
      metalness: 0.9,
      map: chipTexture || null,
      emissive: 0x00C8FF,
      emissiveIntensity: 0.45,
    });
    const dieMesh = new THREE.Mesh(dieGeom, dieMat);
    dieMesh.position.y = 0.08;
    chipGroup.add(dieMesh);

    // 4. Glowing Cyan Holographic Heat Spreader Glass Plate
    const glassGeom = new THREE.BoxGeometry(2.82, 0.06, 2.82);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x00C8FF,
      emissive: 0x00C8FF,
      emissiveIntensity: 0.3,
      transparent: true,
      opacity: 0.65,
      roughness: 0.05,
      metalness: 0.2,
      transmission: 0.8,
    });
    const glassMesh = new THREE.Mesh(glassGeom, glassMat);
    glassMesh.position.y = 0.26;
    chipGroup.add(glassMesh);

    // 5. Floating Quantum Octahedron Crystal (Illuminates the Chip Core)
    const crystalGeom = new THREE.OctahedronGeometry(0.5, 0);
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0x00C8FF,
      emissive: 0x00C8FF,
      emissiveIntensity: 1.5,
      wireframe: true,
    });
    const crystalMesh = new THREE.Mesh(crystalGeom, crystalMat);
    crystalMesh.position.y = 0.8;
    chipGroup.add(crystalMesh);

    // High-Intensity Point Lights directly on top of the chip
    const directCoreLight = new THREE.PointLight(0x00C8FF, 5.0, 10);
    directCoreLight.position.set(0, 1.2, 0);
    chipGroup.add(directCoreLight);

    const goldAccentLight = new THREE.PointLight(0xFFC229, 3.5, 7);
    goldAccentLight.position.set(0.6, 0.5, 0.6);
    chipGroup.add(goldAccentLight);

    // --- 4. 3D CIRCUIT CONDUITS & GLOWING DATA PACKET NETWORK ---
    // 12 Curved 3D spline conduits feeding into the chip
    const busCurves: THREE.CatmullRomCurve3[] = [];
    const busMaterials: THREE.LineBasicMaterial[] = [];

    const feedOrigins = [
      new THREE.Vector3(-5.2, 3.0, -3.5),
      new THREE.Vector3(-4.8, 1.2, -2.8),
      new THREE.Vector3(-5.0, -1.2, -3.0),
      new THREE.Vector3(5.2, 3.2, -3.5),
      new THREE.Vector3(4.8, 0.8, -2.6),
      new THREE.Vector3(5.0, -1.5, -3.0),
      new THREE.Vector3(-4.8, 1.8, 3.2),
      new THREE.Vector3(-4.2, -1.0, 2.8),
      new THREE.Vector3(4.8, 2.0, 3.2),
      new THREE.Vector3(4.2, -1.2, 3.0),
      new THREE.Vector3(0, 4.2, -3.8),
      new THREE.Vector3(0, -3.0, 3.8),
    ];

    const chipPorts = [
      new THREE.Vector3(-1.3, 0.1, -1.3),
      new THREE.Vector3(-1.3, 0.1, 0),
      new THREE.Vector3(-1.3, 0.1, 1.3),
      new THREE.Vector3(1.3, 0.1, -1.3),
      new THREE.Vector3(1.3, 0.1, 0),
      new THREE.Vector3(1.3, 0.1, 1.3),
      new THREE.Vector3(-0.8, 0.1, 1.3),
      new THREE.Vector3(0, 0.1, 1.3),
      new THREE.Vector3(0.8, 0.1, 1.3),
      new THREE.Vector3(1.3, 0.1, 0.4),
      new THREE.Vector3(0, 0.1, -1.3),
      new THREE.Vector3(0, 0.1, 1.3),
    ];

    feedOrigins.forEach((origin, idx) => {
      const port = chipPorts[idx % chipPorts.length];
      const mid1 = new THREE.Vector3(origin.x * 0.55, origin.y * 0.5 + 0.4, origin.z * 0.55);
      const mid2 = new THREE.Vector3(port.x * 1.6, port.y + 0.2, port.z * 1.6);

      const curve = new THREE.CatmullRomCurve3([origin, mid1, mid2, port]);
      busCurves.push(curve);

      // Render glowing conduits
      const railGeom = new THREE.BufferGeometry().setFromPoints(curve.getPoints(40));
      const railMat = new THREE.LineBasicMaterial({
        color: idx % 2 === 0 ? 0x00C8FF : 0x087BFF,
        transparent: true,
        opacity: 0.55,
      });
      busMaterials.push(railMat);
      const rail = new THREE.Line(railGeom, railMat);
      systemGroup.add(rail);

      // Outer transmitter node
      const nodeGeom = new THREE.BoxGeometry(0.24, 0.24, 0.24);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: 0x0A153A,
        emissive: idx % 3 === 0 ? 0xFFC229 : 0x00C8FF,
        emissiveIntensity: 1.0,
      });
      const node = new THREE.Mesh(nodeGeom, nodeMat);
      node.position.copy(origin);
      systemGroup.add(node);
    });

    // 160 Glowing Data Packets
    const packetCount = 160;
    const packetGeom = new THREE.SphereGeometry(0.08, 8, 8);
    const pMatCyan = new THREE.MeshBasicMaterial({ color: 0x00C8FF });
    const pMatGold = new THREE.MeshBasicMaterial({ color: 0xFFC229 });
    const pMatPurple = new THREE.MeshBasicMaterial({ color: 0x8B2CFF });

    interface Packet {
      mesh: THREE.Mesh;
      curveIdx: number;
      progress: number;
      speed: number;
    }

    const packets: Packet[] = [];
    for (let i = 0; i < packetCount; i++) {
      const curveIdx = i % busCurves.length;
      const mat = i % 4 === 0 ? pMatGold : i % 3 === 0 ? pMatPurple : pMatCyan;
      const mesh = new THREE.Mesh(packetGeom, mat);
      mesh.scale.set(1.5, 1.5, 1.5);
      systemGroup.add(mesh);

      packets.push({
        mesh,
        curveIdx,
        progress: Math.random(),
        speed: 0.0035 + Math.random() * 0.006,
      });
    }

    // --- 5. LIGHTING RIG ---
    const ambLight = new THREE.AmbientLight(0x0A122E, 2.2);
    scene.add(ambLight);

    const directKeyLight = new THREE.DirectionalLight(0x00C8FF, 4.0);
    directKeyLight.position.set(5, 8, 6);
    scene.add(directKeyLight);

    const goldRimLight = new THREE.DirectionalLight(0xFFC229, 3.0);
    goldRimLight.position.set(-5, 6, -4);
    scene.add(goldRimLight);

    // --- 6. MOUSE PARALLAX & 3D SCROLL EFFECTS ---
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollY = 0;
    let targetScrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // --- 7. ANIMATION LOOP ---
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Mouse Parallax Lerp
      targetMouseX += (mouseX - targetMouseX) * 0.05;
      targetMouseY += (mouseY - targetMouseY) * 0.05;

      // Scroll Lerp
      targetScrollY += (scrollY - targetScrollY) * 0.08;
      const scrollFactor = Math.min(targetScrollY / (window.innerHeight || 800), 2.5);

      // --- 3D SCROLL MOTION ---
      // Smooth dynamic tilt and camera zoom based on scroll position
      systemGroup.rotation.x = 0.52 + targetMouseY * -0.22 + scrollFactor * 0.35;
      systemGroup.rotation.y = -0.32 + targetMouseX * 0.3 + scrollFactor * 0.6;
      systemGroup.position.z = scrollFactor * 1.4; // Zooms closer as user scrolls

      // Crystal rotation
      crystalMesh.rotation.x = elapsed * 1.6;
      crystalMesh.rotation.y = elapsed * 2.2;
      crystalMesh.position.y = 0.8 + Math.sin(elapsed * 3.5) * 0.06;

      // Pulse Core Lighting
      const pulse = 1.0 + Math.sin(elapsed * 6) * 0.25 + scrollFactor * 0.6;
      directCoreLight.intensity = 5.0 * pulse;
      goldAccentLight.intensity = 3.5 * pulse;

      // Stream data packets into the chip
      const scrollSpeedBoost = 1.0 + scrollFactor * 2.2;

      packets.forEach((pkt) => {
        pkt.progress += pkt.speed * scrollSpeedBoost;
        if (pkt.progress >= 1.0) {
          pkt.progress = 0.0;
        }

        const curve = busCurves[pkt.curveIdx];
        if (curve) {
          const pt = curve.getPoint(pkt.progress);
          pkt.mesh.position.copy(pt);

          // Entering the chip die
          if (pkt.progress > 0.82) {
            const scale = (1.0 - pkt.progress) / 0.18 * 1.8;
            pkt.mesh.scale.set(scale, scale, scale);
          } else {
            pkt.mesh.scale.set(1.5, 1.5, 1.5);
          }
        }
      });

      camera.lookAt(0, 0.45, 0);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      pcbGeom.dispose();
      pcbMat.dispose();
      pcbFrameGeom.dispose();
      pcbFrameMat.dispose();
      pinGeom.dispose();
      pinMat.dispose();
      dieGeom.dispose();
      dieMat.dispose();
      glassGeom.dispose();
      glassMat.dispose();
      crystalGeom.dispose();
      crystalMat.dispose();
      packetGeom.dispose();
      pMatCyan.dispose();
      pMatGold.dispose();
      pMatPurple.dispose();
      busMaterials.forEach((m) => m.dispose());

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
}
