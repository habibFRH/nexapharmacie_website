import React from "react";
import { motion } from "framer-motion";
import contentImage from "../assets/content.png";

const ContentSection: React.FC = () => {
  return (
    <section id="content" className="w-full h-screen bg-white text-left">
      <div className="flex h-full w-full max-w-none">
        {/* Left section with content */}
        <motion.div
          className="w-1/2 flex flex-col justify-center items-start p-12"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <motion.h1
            className="text-5xl max-w-[400px] text-gray-800 mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A brighter future in molecular science
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            At Beam Labs we're pushing the boundaries of molecular understanding,
            researchers are unlocking possibilities for sustainable technologies
            and personalized therapies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="!bg-blue-600 hover:!bg-blue-700 !text-white font-semibold py-3 px-8 !rounded-3xl transition-colors duration-300">
              Schedule a demo
            </button>
            <button className="!bg-transparent !border-2 !border-blue-600 !text-blue-600 font-semibold py-3 px-8 !rounded-3xl transition-colors duration-300">
              Find out more
            </button>
          </motion.div>
        </motion.div>

        {/* Right section with image */}
        <motion.div
          className="w-1/2"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src={contentImage}
            alt="Scientist in laboratory"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContentSection;
