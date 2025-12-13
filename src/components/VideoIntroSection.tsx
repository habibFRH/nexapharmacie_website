import React from "react";
import { motion } from "framer-motion";
import introVideo from "../assets/intro.mp4";

const VideoIntroSection: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white">
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        
        {/* Left – Video */}
        <motion.div
          className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <video
            className="w-full h-full object-cover"
            src={introVideo}
            autoPlay
            muted
            loop
            playsInline
          />
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
