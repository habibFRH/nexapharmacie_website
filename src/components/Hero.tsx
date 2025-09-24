/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import healthImage from "../assets/health.png";
import phone from "../assets/phone.png";
import scientists from "../assets/scientist.png";
import bacterie from "../assets/bacterie.png";
import nanodev from "../assets/nanodev.png";

interface HeroCardProps {
  image: string;
  text: string;
  alt: string;
  to: string;
  className?: string;
  initial?: any;
  animate?: any;
  transition?: any;
  titlePosition?:
    | "bottom-left"
    | "top-left"
    | "center"
    | "bottom-center"
    | "top-center";
  titleSize?: "sm" | "md" | "lg" | "xl";
  titleWidth?: string; // Custom width for title
  boldWords?: string[]; // Array of words to make bold
}

const HeroCard: React.FC<HeroCardProps> = ({
  image,
  text,
  alt,
  to,
  className,
  initial,
  animate,
  transition,
  titlePosition = "bottom-right",
  titleSize = "xl",
  titleWidth,
  boldWords = []
}) => {
  // Define positioning classes based on titlePosition
  const getPositionClasses = () => {
    switch (titlePosition) {
      case "bottom-left":
        return "items-start justify-end";
      case "bottom-right":
        return "items-end justify-end";
      case "top-left":
        return "items-start justify-start";
      case "top-right":
        return "items-end justify-start";
      case "center":
        return "items-center justify-center";
      case "bottom-center":
        return "items-center justify-end";
      case "top-center":
        return "items-center justify-start";
      default:
        return "items-end justify-end";
    }
  };

  // Define text size classes
  const getSizeClasses = () => {
    switch (titleSize) {
      case "sm":
        return "text-sm";
      case "md":
        return "text-base";
      case "lg":
        return "text-xl";
      case "xl":
        return "text-5xl";
      default:
        return "text-xl";
    }
  };

  // Function to render text with bold words
  const renderTextWithBold = () => {
    if (boldWords.length === 0) {
      return text;
    }

    let processedText = text;
    boldWords.forEach((word) => {
      const regex = new RegExp(`\\b${word}\\b`, "gi");
      processedText = processedText.replace(regex, `<strong>${word}</strong>`);
    });

    return <span dangerouslySetInnerHTML={{ __html: processedText }} />;
  };

  return (
    <Link to={to} className="block h-full">
      <motion.div
        initial={initial}
        animate={animate}
        transition={transition}
        tabIndex={0}
        aria-label={alt}
        className={`relative rounded-lg flex flex-col ${getPositionClasses()} p-3 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-blue-600 h-full ${className}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div
          className={`absolute inset-0 rounded-lg ${
            image === bacterie
              ? "bg-gradient-to-t from-green-500/80 to-transparent"
              : "bg-black/20"
          }`}
        ></div>
        <div className="relative">
          <h2
            className={`text-white ${getSizeClasses()} font-bold drop-shadow-lg ${
              titleWidth || ""
            }`}
          >
            {renderTextWithBold()}
          </h2>
        </div>
      </motion.div>
    </Link>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="w-full lg:h-screen md:h-screen min-h-screen bg-white pt-20 p-4 lg:px-48 md:px-8 px-4 py-20 mt-6"
    >
      {/* Unified Responsive Layout using Flex */}
      <div className="flex flex-col lg:flex-row gap-3 md:gap-4 lg:gap-5 h-full">
        {/* Health Revived - Full width on mobile/tablet, left column on desktop */}
        <div className="flex-1 lg:flex-1 h-64 md:h-80 lg:h-full">
          <HeroCard
            image={healthImage}
            text="Health Revived"
            alt="Health Revived Section"
            to="/health-revived"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            titlePosition="bottom-left"
            titleSize="xl"
            titleWidth="w-80 max-w-full" // Custom width for Health Revived
            className="rounded-lg overflow-hidden group"
          />
        </div>

        {/* Right section - Stacked on mobile/tablet, right column on desktop */}
        <div className="flex-1 lg:flex-1 flex flex-col gap-3 md:gap-4 lg:gap-6">
          {/* Scientists - Full width */}
          <div className="h-48 md:h-64 lg:flex-[3]">
            <HeroCard
              image={scientists}
              text="Top-notch healthcare equipments & Scientists"
              alt="Healthcare Equipment and Scientists"
              to="/scientists"
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              titlePosition="bottom-left"
              titleSize="lg"
              titleWidth="w-60 max-w-full" // Custom width for Scientists
              className="w-"
            />
          </div>

          {/* Bottom section - Responsive grid */}
          <div className="flex-1 lg:flex-[7] flex flex-col sm:flex-row lg:flex-row gap-3 md:gap-4 lg:gap-5">
            {/* Mobile App */}
            <div className="flex-1 lg:flex-[51] h-40 md:h-48 lg:h-full">
              <HeroCard
                image={phone}
                text="Découvrez NOTRE APPLI"
                alt="Mobile App Section"
                to="/app"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                titlePosition="top-left"
                titleSize="lg"
                titleWidth="w-48 max-w-full" // Custom width for Mobile App
                className="w-"
              />
            </div>

            {/* Research and Nano-dev column */}
            <div className="flex-1 lg:flex-[49] flex flex-col sm:flex-col gap-2 md:gap-3 lg:gap-2">
              {/* Research */}
              <div className="flex-1 lg:flex-[6] h-40 md:h-48 lg:h-auto">
                <HeroCard
                  image={bacterie}
                  text="Nos RECHERCHES"
                  alt="Research Section"
                  to="/research"
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  titlePosition="bottom-left"
                  titleSize="lg"
                  titleWidth="w-24 max-w-full" // Custom width for Research
                  boldWords={["RECHERCHES"]}
                  className=""
                />
              </div>

              {/* Nano-dev */}
              <div className="flex-1 lg:flex-[4] h-36 md:h-40 lg:h-auto">
                <HeroCard
                  image={nanodev}
                  text="Le Monde du NANO-DEV"
                  alt="Nanotechnology Section"
                  to="/nano-dev"
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  titlePosition="bottom-left"
                  titleSize="md"
                  titleWidth="w-32 max-w-full" // Custom width for Nano-dev
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
