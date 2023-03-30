import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, GradientTexture } from "@react-three/drei";

function Model() {
  return (
    <>
      <Canvas>
        <OrbitControls makeDefault />

        <ambientLight intensity={2} />
        <directionalLight color="red" position={[0, 0, 5]} />

        <mesh>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color={"#E11299"} />
        </mesh>
        <mesh position={[-2.5, 0.5, 0]}>
          <planeGeometry />
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 1]} // As many stops as you want
              colors={["aquamarine", "hotpink"]} // Colors need to match the number of stops
              size={1024} // Size is optional, default = 1024
            />
          </meshBasicMaterial>
        </mesh>
      </Canvas>
    </>
  );
}

export default Model;
