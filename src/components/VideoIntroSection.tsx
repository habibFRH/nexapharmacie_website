import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Center } from "@react-three/drei";
import modelPath from "../assets/model3.glb";

// Preload the model for smoother initial render
useGLTF.preload(modelPath);

function Model() {
    const { scene } = useGLTF(modelPath);
    // Using primitive to render the loaded GLTF scene
    return <primitive object={scene} />;
}

const VideoIntroSection: React.FC = () => {
    return (
        <section className="w-full min-h-screen bg-black text-white">
            <div className="flex flex-col lg:flex-row w-full min-h-screen">

                {/* Left – 3D Model */}
                <motion.div
                    className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative cursor-grab active:cursor-grabbing"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Canvas shadows camera={{ position: [15, 2, 50], fov: 45 }}>
                        <Suspense fallback={null}>
                            <Center>
                                <group rotation={[0, Math.PI, 0]}>
                                    <Model />
                                </group>
                            </Center>
                            <Environment preset="city" />
                        </Suspense>

                        <OrbitControls
                            enableZoom={true}
                            autoRotate
                            autoRotateSpeed={2}
                            enablePan={false}
                        />
                    </Canvas>
                </motion.div>

                {/* Right – Text */}
                <motion.div
                    className="w-full lg:w-1/2 flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12"
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
                        L’innovation au cœur de la science
                    </h2>

                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg">
                        Nous combinons recherche avancée et technologies de pointe pour
                        transformer la science moléculaire en solutions concrètes
                        pour l’avenir de la santé.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default VideoIntroSection;
