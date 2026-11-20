import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeFullBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // --- SCENE & FOG ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050817);
    scene.fog = new THREE.FogExp2(0x050817, 0.04);

    // --- CAMERA ---
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(2.8, 6.2, 7.8);
    camera.lookAt(0, 0, 0);

    // --- RENDERER ---
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // --- 1. PERSPECTIVE FLOOR GRID ---
    const gridHelper = new THREE.GridHelper(40, 50, 0x00C8FF, 0x0A1838);
    gridHelper.position.y = -0.55;
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.22;
    scene.add(gridHelper);

    // Ground reflector / dark base plane
    const groundGeom = new THREE.PlaneGeometry(60, 60);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x050817,
      roughness: 0.8,
      metalness: 0.2,
    });
    const groundMesh = new THREE.Mesh(groundGeom, groundMat);
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.position.y = -0.56;
    scene.add(groundMesh);

    // --- 2. THE MONUMENTAL AXION-STYLE PROCESSOR CHIP ---
    const chipGroup = new THREE.Group();
    scene.add(chipGroup);

    // Procedural Brushed Titanium Texture with Embossed "GEN TECH KA"
    const makeLidTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      // Brushed titanium gradient
      const grad = ctx.createLinearGradient(0, 0, 1024, 1024);
      grad.addColorStop(0, '#CBD5E1');
      grad.addColorStop(0.5, '#E2E8F0');
      grad.addColorStop(1, '#94A3B8');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 1024);

      // Brushed fine noise lines
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      for (let i = 0; i < 1024; i += 3) {
        ctx.fillRect(0, i, 1024, 1);
      }

      // Perimeter chamfer edge line
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 12;
      ctx.strokeRect(40, 40, 944, 944);

      ctx.strokeStyle = 'rgba(0, 0, 0, 0.25)';
      ctx.lineWidth = 6;
      ctx.strokeRect(52, 52, 920, 920);

      // Embossed "GEN TECH KA" (Clean, high-end editorial)
      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
      ctx.shadowOffsetX = 4;
      ctx.shadowOffsetY = 6;
      ctx.shadowBlur = 8;
      ctx.font = 'bold 92px "Space Grotesk", sans-serif';
      ctx.fillStyle = '#CBD5E1';
      ctx.textAlign = 'center';
      ctx.fillText('GEN TECH KA', 512, 530);
      ctx.restore();

      // Top specular highlight on letters
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 92px "Space Grotesk", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('GEN TECH KA', 510, 526);

      // Model spec code in corner
      ctx.fillStyle = 'rgba(71, 85, 105, 0.7)';
      ctx.font = 'bold 22px monospace';
      ctx.textAlign = 'right';
      ctx.fillText('GTK-AXION // 2026', 920, 120);

      ctx.textAlign = 'left';
      ctx.fillText('NEURAL FABRIC', 100, 120);

      return new THREE.CanvasTexture(canvas);
    };

    const lidTexture = makeLidTexture();

    // Metallic Lid (Brushed Silver Titanium Heat Spreader)
    const lidGeom = new THREE.BoxGeometry(3.6, 0.45, 3.6);
    const lidMat = new THREE.MeshStandardMaterial({
      color: 0xCCD6E0,
      roughness: 0.22,
      metalness: 0.92,
      map: lidTexture || null,
    });
    const lidMesh = new THREE.Mesh(lidGeom, lidMat);
    lidMesh.position.y = 0.22;
    chipGroup.add(lidMesh);

    // Substrate Base (Dark green/obsidian carrier with gold rim)
    const subGeom = new THREE.BoxGeometry(4.1, 0.2, 4.1);
    const subMat = new THREE.MeshStandardMaterial({
      color: 0x081024,
      roughness: 0.3,
      metalness: 0.8,
    });
    const subMesh = new THREE.Mesh(subGeom, subMat);
    subMesh.position.y = -0.05;
    chipGroup.add(subMesh);

    // Gold Pin Contacts along the four edges
    const pinGeom = new THREE.BoxGeometry(0.08, 0.12, 0.22);
    const pinMat = new THREE.MeshStandardMaterial({
      color: 0xFFC229,
      roughness: 0.1,
      metalness: 0.95,
      emissive: 0xFFC229,
      emissiveIntensity: 0.3,
    });

    const pinOffsets = [-1.5, -1.2, -0.9, -0.6, -0.3, 0, 0.3, 0.6, 0.9, 1.2, 1.5];
    pinOffsets.forEach((pos) => {
      // East & West pins
      const pinW = new THREE.Mesh(pinGeom, pinMat);
      pinW.rotation.y = Math.PI / 2;
      pinW.position.set(-2.05, -0.05, pos);
      chipGroup.add(pinW);

      const pinE = new THREE.Mesh(pinGeom, pinMat);
      pinE.rotation.y = Math.PI / 2;
      pinE.position.set(2.05, -0.05, pos);
      chipGroup.add(pinE);

      // North & South pins
      const pinN = new THREE.Mesh(pinGeom, pinMat);
      pinN.position.set(pos, -0.05, -2.05);
      chipGroup.add(pinN);

      const pinS = new THREE.Mesh(pinGeom, pinMat);
      pinS.position.set(pos, -0.05, 2.05);
      chipGroup.add(pinS);
    });

    // --- 3. WAVY PARALLEL GLOWING BUS WIRES (EXACT MATCH TO REFERENCE) ---
    // Bundles of wavy glowing optical fiber traces streaming into the chip pins!
    const wireCurves: THREE.CatmullRomCurve3[] = [];
    const wireLines: THREE.Line[] = [];

    // Left bundle: 11 parallel wavy lines streaming from left into chip west pins
    pinOffsets.forEach((zOffset, idx) => {
      const points: THREE.Vector3[] = [];
      const startX = -12.0;
      const endX = -2.05;
      const steps = 30;

      for (let s = 0; s <= steps; s++) {
        const t = s / steps;
        const x = startX + t * (endX - startX);
        // Subtle wavy sine oscillation like in the reference image
        const wave = Math.sin(t * Math.PI * 3 + idx * 0.4) * 0.12 * (1 - t * 0.8);
        const y = -0.05 + wave * 0.5;
        const z = zOffset + wave;
        points.push(new THREE.Vector3(x, y, z));
      }

      const curve = new THREE.CatmullRomCurve3(points);
      wireCurves.push(curve);

      const lineGeom = new THREE.BufferGeometry().setFromPoints(curve.getPoints(50));
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x00C8FF,
        transparent: true,
        opacity: 0.75,
        linewidth: 2,
      });
      const line = new THREE.Line(lineGeom, lineMat);
      scene.add(line);
      wireLines.push(line);
    });

    // Right bundle: 11 parallel wavy lines streaming from right into chip east pins
    pinOffsets.forEach((zOffset, idx) => {
      const points: THREE.Vector3[] = [];
      const startX = 12.0;
      const endX = 2.05;
      const steps = 30;

      for (let s = 0; s <= steps; s++) {
        const t = s / steps;
        const x = startX + t * (endX - startX);
        const wave = Math.sin(t * Math.PI * 3 + idx * 0.4) * 0.12 * (1 - t * 0.8);
        const y = -0.05 + wave * 0.5;
        const z = zOffset + wave;
        points.push(new THREE.Vector3(x, y, z));
      }

      const curve = new THREE.CatmullRomCurve3(points);
      wireCurves.push(curve);

      const lineGeom = new THREE.BufferGeometry().setFromPoints(curve.getPoints(50));
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x00C8FF,
        transparent: true,
        opacity: 0.75,
        linewidth: 2,
      });
      const line = new THREE.Line(lineGeom, lineMat);
      scene.add(line);
      wireLines.push(line);
    });

    // Top bundle: 9 parallel wavy lines streaming from top into chip north pins
    const topOffsets = [-1.2, -0.9, -0.6, -0.3, 0, 0.3, 0.6, 0.9, 1.2];
    topOffsets.forEach((xOffset, idx) => {
      const points: THREE.Vector3[] = [];
      const startZ = -10.0;
      const endZ = -2.05;
      const steps = 25;

      for (let s = 0; s <= steps; s++) {
        const t = s / steps;
        const z = startZ + t * (endZ - startZ);
        const wave = Math.sin(t * Math.PI * 2.5 + idx * 0.5) * 0.14 * (1 - t * 0.8);
        const y = -0.05 + wave * 0.5;
        const x = xOffset + wave;
        points.push(new THREE.Vector3(x, y, z));
      }

      const curve = new THREE.CatmullRomCurve3(points);
      wireCurves.push(curve);

      const lineGeom = new THREE.BufferGeometry().setFromPoints(curve.getPoints(40));
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xFFC229,
        transparent: true,
        opacity: 0.7,
      });
      const line = new THREE.Line(lineGeom, lineMat);
      scene.add(line);
      wireLines.push(line);
    });

    // Bottom bundle: 9 parallel wavy lines streaming from bottom into chip south pins
    topOffsets.forEach((xOffset, idx) => {
      const points: THREE.Vector3[] = [];
      const startZ = 10.0;
      const endZ = 2.05;
      const steps = 25;

      for (let s = 0; s <= steps; s++) {
        const t = s / steps;
        const z = startZ + t * (endZ - startZ);
        const wave = Math.sin(t * Math.PI * 2.5 + idx * 0.5) * 0.14 * (1 - t * 0.8);
        const y = -0.05 + wave * 0.5;
        const x = xOffset + wave;
        points.push(new THREE.Vector3(x, y, z));
      }

      const curve = new THREE.CatmullRomCurve3(points);
      wireCurves.push(curve);

      const lineGeom = new THREE.BufferGeometry().setFromPoints(curve.getPoints(40));
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x087BFF,
        transparent: true,
        opacity: 0.7,
      });
      const line = new THREE.Line(lineGeom, lineMat);
      scene.add(line);
      wireLines.push(line);
    });

    // --- 4. STREAMING HIGH-SPEED DATA PACKETS & WAVEFRONT RING ---
    // Packets moving along the wires into the chip
    const packetCount = 140;
    const packetGeom = new THREE.SphereGeometry(0.07, 8, 8);
    const pMatCyan = new THREE.MeshBasicMaterial({ color: 0x00C8FF });
    const pMatGold = new THREE.MeshBasicMaterial({ color: 0xFFC229 });

    interface Packet {
      mesh: THREE.Mesh;
      curveIdx: number;
      progress: number;
      speed: number;
    }

    const packets: Packet[] = [];
    for (let i = 0; i < packetCount; i++) {
      const curveIdx = i % wireCurves.length;
      const mat = i % 3 === 0 ? pMatGold : pMatCyan;
      const mesh = new THREE.Mesh(packetGeom, mat);
      scene.add(mesh);
      packets.push({
        mesh,
        curveIdx,
        progress: Math.random(),
        speed: 0.004 + Math.random() * 0.005,
      });
    }

    // Glowing Concentric Wavefront Energy Ring (Exact Match to Axion Image!)
    const waveRingGeom = new THREE.RingGeometry(3.6, 3.75, 64);
    const waveRingMat = new THREE.MeshBasicMaterial({
      color: 0x00C8FF,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5,
    });
    const waveRing = new THREE.Mesh(waveRingGeom, waveRingMat);
    waveRing.rotation.x = -Math.PI / 2;
    waveRing.position.y = -0.02;
    scene.add(waveRing);

    // --- 5. LIGHTING (STUDIO SPECULAR HIGHLIGHTS ON TITANIUM) ---
    const ambLight = new THREE.AmbientLight(0x0A122E, 2.0);
    scene.add(ambLight);

    // Key overhead spot shining directly on the titanium lid
    const keySpot = new THREE.DirectionalLight(0xFFFFFF, 3.5);
    keySpot.position.set(4, 9, 5);
    scene.add(keySpot);

    const cyanRim = new THREE.DirectionalLight(0x00C8FF, 3.0);
    cyanRim.position.set(-8, 5, -5);
    scene.add(cyanRim);

    const goldAccent = new THREE.DirectionalLight(0xFFC229, 2.2);
    goldAccent.position.set(6, 4, -6);
    scene.add(goldAccent);

    // --- 6. SCROLL STORYTELLING CHOREOGRAPHY ---
    let scrollY = window.scrollY;
    let targetScrollY = scrollY;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / width - 0.5) * 2;
      mouseY = (e.clientY / height - 0.5) * 2;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // --- 7. ANIMATION LOOP ---
    let frameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Lerp interactions
      targetScrollY += (scrollY - targetScrollY) * 0.06;
      targetMouseX += (mouseX - targetMouseX) * 0.05;
      targetMouseY += (mouseY - targetMouseY) * 0.05;

      const heroScroll = Math.min(targetScrollY / (window.innerHeight || 900), 3.0);

      // --- DYNAMIC CAMERA FLY-THROUGH CHOREOGRAPHY ---
      // Base isometric position -> tilts down & zooms across scroll
      const camX = 2.8 + targetMouseX * 0.4 - heroScroll * 0.8;
      const camY = 6.2 + targetMouseY * -0.3 - heroScroll * 1.1;
      const camZ = 7.8 - heroScroll * 1.5;

      camera.position.set(camX, camY, Math.max(camZ, 3.8));
      camera.lookAt(0, heroScroll * 0.1, 0);

      // Subtle chip tilt responding to mouse
      chipGroup.rotation.y = targetMouseX * 0.06 + Math.sin(elapsed * 0.5) * 0.02;
      chipGroup.rotation.x = targetMouseY * -0.04;

      // Expand Wavefront Energy Ring outward from chip
      const waveScale = 1.0 + (elapsed * 0.8) % 2.5;
      waveRing.scale.set(waveScale, waveScale, 1);
      waveRingMat.opacity = Math.max(0, 0.65 * (1 - (waveScale - 1) / 2.5));

      // Stream data packets into the chip along curves
      const speedMult = 1.0 + heroScroll * 2.5;
      packets.forEach((p) => {
        p.progress += p.speed * speedMult;
        if (p.progress >= 1.0) {
          p.progress = 0.0;
        }
        const curve = wireCurves[p.curveIdx];
        if (curve) {
          const pt = curve.getPoint(p.progress);
          p.mesh.position.copy(pt);

          // Pulse scale
          if (p.progress > 0.85) {
            const sc = (1.0 - p.progress) / 0.15 * 1.6;
            p.mesh.scale.set(sc, sc, sc);
          } else {
            p.mesh.scale.set(1.2, 1.2, 1.2);
          }
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);

      renderer.dispose();
      gridHelper.dispose();
      groundGeom.dispose();
      groundMat.dispose();
      lidGeom.dispose();
      lidMat.dispose();
      subGeom.dispose();
      subMat.dispose();
      pinGeom.dispose();
      pinMat.dispose();
      wireLines.forEach((l) => {
        l.geometry.dispose();
        (l.material as THREE.Material).dispose();
      });
      packetGeom.dispose();
      pMatCyan.dispose();
      pMatGold.dispose();
      waveRingGeom.dispose();
      waveRingMat.dispose();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none select-none z-0"
      aria-hidden="true"
    />
  );
}
