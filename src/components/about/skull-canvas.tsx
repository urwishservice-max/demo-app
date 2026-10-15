"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader.js"
import { MotionValue } from "framer-motion"

interface SkullCanvasProps {
  progress: MotionValue<number>
}

export function SkullCanvas({ progress }: SkullCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    let animationFrameId: number
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    )
    camera.position.set(0, 0, 4.8)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)

    let pointsObject: THREE.Points | null = null
    let material: THREE.PointsMaterial | null = null

    // Track mouse coordinates for raycasting and parallax
    let mouseNormX = 0
    let mouseNormY = 0

    const raycaster = new THREE.Raycaster()
    const mouseVec = new THREE.Vector2(-999, -999)
    const worldPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
    const targetMouseWorld = new THREE.Vector3(999, 999, 999)
    const currentMouseWorld = new THREE.Vector3(999, 999, 999)

    let currentHoverStrength = 0
    let targetHoverStrength = 0

    // Shared uniforms for mouse bulge effect (computed in local space)
    const bulgeUniforms = {
      uMouseLocal: { value: new THREE.Vector3(999, 999, 999) },
      uHoverStrength: { value: 0.0 },
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseNormX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      mouseNormY = ((e.clientY - rect.top) / rect.height - 0.5) * 2

      mouseVec.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouseVec.y = -((e.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouseVec, camera)
      const hit = new THREE.Vector3()
      if (raycaster.ray.intersectPlane(worldPlane, hit)) {
        targetMouseWorld.copy(hit)
      }
    }

    const handleMouseLeave = () => {
      targetHoverStrength = 0
      targetMouseWorld.set(999, 999, 999)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true })

    // Load skull.ply
    const loader = new PLYLoader()
    loader.load(
      "/skull.ply",
      (geometry) => {
        // Anatomical alignment
        geometry.center()
        geometry.rotateX(-Math.PI / 2)
        geometry.rotateY(Math.PI)
        geometry.computeVertexNormals()

        // Normalize geometry to standard scale
        geometry.computeBoundingBox()
        const bbox = geometry.boundingBox
        if (bbox) {
          const maxDim = Math.max(
            bbox.max.x - bbox.min.x,
            bbox.max.y - bbox.min.y,
            bbox.max.z - bbox.min.z
          )
          const scaleFactor = 2.4 / maxDim
          geometry.scale(scaleFactor, scaleFactor, scaleFactor)
        }

        // Exact original rich Asheron gold particle material with normal alpha blending
        material = new THREE.PointsMaterial({
          size: 0.013,
          color: new THREE.Color("#FFC400"),
          transparent: true,
          opacity: 0,
          depthWrite: false,
        })

        // Inject smooth Gaussian bulge displacement into the native PointsMaterial shader
        material.onBeforeCompile = (shader) => {
          shader.uniforms.uMouseLocal = bulgeUniforms.uMouseLocal
          shader.uniforms.uHoverStrength = bulgeUniforms.uHoverStrength

          shader.vertexShader = `
            uniform vec3 uMouseLocal;
            uniform float uHoverStrength;
          ` + shader.vertexShader

          shader.vertexShader = shader.vertexShader.replace(
            "#include <begin_vertex>",
            `
            #include <begin_vertex>
            float d = distance(transformed, uMouseLocal);
            float radius = 0.65;
            float force = exp(- (d * d) / (radius * radius * 0.45));
            vec3 pushDir = normalize(transformed - uMouseLocal + vec3(0.0, 0.0, 0.15));
            transformed += pushDir * (force * 0.28 * uHoverStrength);
            `
          )
        }

        pointsObject = new THREE.Points(geometry, material)
        scene.add(pointsObject)
      },
      undefined,
      (err) => {
        console.error("Error loading skull.ply:", err)
      }
    )

    // Current smooth interpolated positions
    let currentX = 2.0
    let currentY = 0
    let currentScale = 0.001
    let currentRotY = -Math.PI / 2
    let currentRotX = 0
    let currentOpacity = 0

    const invMatrix = new THREE.Matrix4()

    // Render loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      const p = progress.get()

      const isMobile = window.innerWidth < 1024
      const xOffset = isMobile ? 0 : 1.75

      let targetX = 0
      let targetY = isMobile ? 0.9 : 0
      let targetScale = 0.001
      let targetRotY = -Math.PI / 2
      let targetRotX = 0
      let targetOpacity = 0

      if (p < 0.16) {
        // Slide 0: Hidden
        targetX = xOffset
        targetScale = 0.001
        targetOpacity = 0
      } else if (p < 0.38) {
        // Slide 1: Skull on RIGHT (Side view facing left toward text)
        targetX = xOffset
        targetScale = isMobile ? 0.75 : 1.05
        targetOpacity = 0.85
        targetRotY = -Math.PI / 2
        targetRotX = 0.0
      } else if (p < 0.60) {
        // Slide 2: Skull on LEFT (Side view facing right toward text)
        targetX = -xOffset
        targetScale = isMobile ? 0.75 : 1.05
        targetOpacity = 0.85
        targetRotY = Math.PI / 2
        targetRotX = 0.0
      } else if (p < 0.82) {
        // Slide 3: Skull on RIGHT (Side view facing left toward text)
        targetX = xOffset
        targetScale = isMobile ? 0.75 : 1.05
        targetOpacity = 0.85
        targetRotY = -Math.PI / 2
        targetRotX = 0.0
      } else if (p <= 0.98) {
        // Slide 4: Skull on LEFT (Side view facing right toward text)
        targetX = -xOffset
        targetScale = isMobile ? 0.75 : 1.05
        targetOpacity = 0.85
        targetRotY = Math.PI / 2
        targetRotX = 0.0
      } else {
        // Past section: Fade out
        targetX = -xOffset
        targetScale = 0.001
        targetOpacity = 0
      }

      // Smooth position & rotation dampening
      currentX = THREE.MathUtils.lerp(currentX, targetX, 0.07)
      currentY = THREE.MathUtils.lerp(currentY, targetY, 0.07)
      currentScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.08)
      currentRotY = THREE.MathUtils.lerp(currentRotY, targetRotY, 0.07)
      currentRotX = THREE.MathUtils.lerp(currentRotX, targetRotX, 0.07)
      currentOpacity = THREE.MathUtils.lerp(currentOpacity, targetOpacity, 0.08)

      // Smoothly track mouse in world space for bulge interaction
      currentMouseWorld.lerp(targetMouseWorld, 0.09)

      // Determine if cursor is hovering near the 3D model
      if (pointsObject && currentOpacity > 0.1) {
        const distToModel = currentMouseWorld.distanceTo(pointsObject.position)
        targetHoverStrength = distToModel < 1.75 ? 1.0 : 0.0
      } else {
        targetHoverStrength = 0.0
      }

      // Silky ease-in / ease-out for bulge response
      currentHoverStrength = THREE.MathUtils.lerp(
        currentHoverStrength,
        targetHoverStrength,
        0.05
      )

      // Apply to Three.js points & uniforms
      if (pointsObject && material) {
        pointsObject.position.x = currentX
        pointsObject.position.y = currentY
        pointsObject.scale.setScalar(currentScale)

        // Subtle parallax cursor rotation
        pointsObject.rotation.y = currentRotY + mouseNormX * 0.12
        pointsObject.rotation.x = currentRotX - mouseNormY * 0.08

        // Opacity
        material.opacity = currentOpacity

        // Transform mouse to model local space for bulletproof shader math
        pointsObject.updateMatrixWorld()
        invMatrix.copy(pointsObject.matrixWorld).invert()
        const localMouse = currentMouseWorld.clone().applyMatrix4(invMatrix)

        bulgeUniforms.uMouseLocal.value.copy(localMouse)
        bulgeUniforms.uHoverStrength.value = currentHoverStrength
      }

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      if (!container) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)

      if (pointsObject) {
        scene.remove(pointsObject)
        pointsObject.geometry.dispose()
      }
      if (material) {
        material.dispose()
      }
      renderer.dispose()
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement)
      }
    }
  }, [progress])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-15"
      style={{ overflow: "hidden" }}
    />
  )
}
