import React from "react";
import { motion } from "framer-motion";

const VideoIntroSection: React.FC = () => {
    return (
        <section className="w-full min-h-screen bg-black text-white">
            <div className="flex flex-col lg:flex-row w-full min-h-screen">

                {/* Left – 3D Model Embed */}
                <motion.div
                    className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="sketchfab-embed-wrapper w-full h-full relative overflow-hidden">
                        <iframe
                            title="All Nad Habib"
                            className="absolute top-[-20%] left-0 w-full h-[140%]"
                            frameBorder="0"
                            allowFullScreen
                            // @ts-ignore
                            mozallowfullscreen="true"
                            // @ts-ignore
                            webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking"
                            src="https://sketchfab.com/models/3903356487a84d6eab7b8666f84a2c1d/embed?ui_infos=0&ui_controls=0&ui_watermark=0&autostart=1"
                        >
                        </iframe>
                    </div>
                </motion.div>

                {/* Right – Text */}
                <motion.div
                    className="w-full bg-white lg:w-1/2 flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12"
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-black">
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
