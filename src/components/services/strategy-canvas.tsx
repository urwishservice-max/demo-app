"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface StrategyArchitecturalCanvasProps {
  className?: string;
}

export function StrategyArchitecturalCanvas({
  className = "w-full h-full",
}: StrategyArchitecturalCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(2.8, 1.8, 4.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Group containing the structural strategy planes & execution grid
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Structural architectural planes (representing Strategy, Operating Model, Governance)
    const planes: THREE.LineSegments[] = [];
    const planeMaterials: THREE.LineBasicMaterial[] = [];

    const planeConfigs = [
      { y: -0.65, size: 2.6, rotY: 0.15, color: 0x080808, opacity: 0.22 },
      { y: 0.05, size: 2.1, rotY: -0.1, color: 0x351779, opacity: 0.35 },
      { y: 0.75, size: 1.6, rotY: 0.25, color: 0xFFC400, opacity: 0.85 },
    ];

    planeConfigs.forEach((cfg) => {
      const gridHelper = new THREE.GridHelper(cfg.size, 8, cfg.color, 0xE2E0DD);
      gridHelper.position.y = cfg.y;
      gridHelper.rotation.y = cfg.rotY;
      (gridHelper.material as THREE.Material).transparent = true;
      (gridHelper.material as THREE.Material).opacity = cfg.opacity;
      rootGroup.add(gridHelper);
    });

    // 2. Translucent target operating surface plane
    const planeGeo = new THREE.PlaneGeometry(1.8, 1.8);
    const planeMat = new THREE.MeshBasicMaterial({
      color: 0xFFC400,
      transparent: true,
      opacity: 0.05,
      side: THREE.DoubleSide,
    });
    const transMesh = new THREE.Mesh(planeGeo, planeMat);
    transMesh.rotation.x = Math.PI / 2;
    transMesh.position.y = 0.05;
    rootGroup.add(transMesh);

    // 3. Vertical alignment vectors (Connecting Strategy to Execution)
    const lineMat = new THREE.LineDashedMaterial({
      color: 0x351779,
      dashSize: 0.08,
      gapSize: 0.04,
      transparent: true,
      opacity: 0.45,
    });

    const pillarCoords = [
      [-0.8, -0.8],
      [0.8, -0.8],
      [0.8, 0.8],
      [-0.8, 0.8],
      [0, 0],
    ];

    pillarCoords.forEach(([x, z]) => {
      const points = [
        new THREE.Vector3(x, -0.65, z),
        new THREE.Vector3(x, 0.75, z),
      ];
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geo, lineMat);
      line.computeLineDistances();
      rootGroup.add(line);
    });

    // 4. Gold Intersection nodes (Milestones / Governance decision rights)
    const nodeGeo = new THREE.SphereGeometry(0.045, 16, 16);
    const goldMat = new THREE.MeshBasicMaterial({ color: 0xFFC400 });
    const purpleMat = new THREE.MeshBasicMaterial({ color: 0x351779 });

    const nodes: THREE.Mesh[] = [];
    const nodePoints = [
      { pos: [0, 0.75, 0], mat: goldMat },
      { pos: [0.6, 0.75, 0.6], mat: goldMat },
      { pos: [-0.6, 0.75, -0.6], mat: goldMat },
      { pos: [0.8, 0.05, -0.8], mat: purpleMat },
      { pos: [-0.8, 0.05, 0.8], mat: purpleMat },
      { pos: [0, -0.65, 0], mat: purpleMat },
    ];

    nodePoints.forEach(({ pos, mat }) => {
      const mesh = new THREE.Mesh(nodeGeo, mat);
      mesh.position.set(pos[0], pos[1], pos[2]);
      rootGroup.add(mesh);
      nodes.push(mesh);
    });

    // Subtle pointer parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetRotY = 0;
    let targetRotX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX = x * 0.4;
        mouseY = y * 0.3;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Gentle continuous rotation
      targetRotY += 0.0025;

      rootGroup.rotation.y += (targetRotY + mouseX - rootGroup.rotation.y) * 0.05;
      rootGroup.rotation.x += (mouseY * 0.5 - rootGroup.rotation.x) * 0.05;

      // Subtle breathing motion of nodes
      nodes.forEach((n, i) => {
        const scale = 1 + Math.sin(time * 2 + i) * 0.12;
        n.scale.set(scale, scale, scale);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      planeGeo.dispose();
      planeMat.dispose();
      nodeGeo.dispose();
      goldMat.dispose();
      purpleMat.dispose();
      lineMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative select-none pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
