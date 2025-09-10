import React from "react";
import { motion } from "framer-motion";
import contentImage from "../assets/content.png";

const ContentSection: React.FC = () => {
  return (
    <section id="content" className="w-full min-h-screen bg-white text-left">
      <div className="flex flex-col lg:flex-row h-full w-full max-w-none min-h-screen">
        {/* Left section with content */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center items-start p-6 sm:p-8 md:p-10 lg:p-12"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl max-w-full lg:max-w-[400px] text-gray-800 mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A brighter future in molecular science
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-full lg:max-w-lg"
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
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="!bg-blue-600 hover:!bg-blue-700 !text-white font-semibold py-3 px-6 sm:px-8 !rounded-3xl transition-colors duration-300 w-full sm:w-auto text-center">
              Schedule a demo
            </button>
            <button className="!bg-transparent !border-2 !border-blue-600 !text-blue-600 hover:!bg-blue-50 font-semibold py-3 px-6 sm:px-8 !rounded-3xl transition-colors duration-300 w-full sm:w-auto text-center">
              Find out more
            </button>
          </motion.div>
        </motion.div>

        {/* Right section with image */}
        <motion.div
          className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto"
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