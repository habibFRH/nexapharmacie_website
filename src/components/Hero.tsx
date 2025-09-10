import React from "react";
import { motion } from "framer-motion";

import healthImage from "../assets/health.png";
import phone from "../assets/phone.png";
import scientists from "../assets/scientist.png";
import bacterie from "../assets/bacterie.png";
import nanodev from "../assets/nanodev.png";

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="w-full lg:h-screen md:h-screen min-h-screen bg-white pt-20 p-4 lg:px-48 md:px-8 px-4 py-20 mt-6">
      {/* Desktop Layout (lg and above) */}
      <div className="hidden lg:flex lg:h-full w-full gap-4 max-w-none">
        {/* Left div with background image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex-1 rounded-lg flex items-end justify-start p-6 overflow-hidden group"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${healthImage})` }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 rounded-lg"></div>

          {/* Text */}
          <h1 className="relative text-white text-2xl font-bold drop-shadow-lg max-w-[150px]">
            Health Revived
          </h1>
        </motion.div>

        {/* Right container */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Top div - 30% height */}
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[30%] flex items-end justify-start p-3 rounded-lg overflow-hidden group"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${scientists})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 rounded-lg"></div>

            {/* Text */}
            <h2 className="relative text-white text-xl font-bold text-left max-w-[250px]">
              Top-notch healthcare equipments & Scientists
            </h2>
          </motion.div>

          {/* Bottom div - 70% height */}
          <div className="h-[70%] flex gap-4">
            {/* Left sub-div */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative flex-[10%] flex items-start justify-start p-6 rounded-lg overflow-hidden group"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${phone})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 rounded-lg"></div>

              {/* Text */}
              <h2 className="relative text-white text-xl font-bold text-left max-w-[190px]">
                Découvrez NOTRE APPLI
              </h2>
            </motion.div>

            {/* Right sub-div container */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Top sub-div */}
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative h-[60%] flex items-end justify-start p-3 text-left rounded-lg overflow-hidden group"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${bacterie})` }}
                ></div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/80 to-transparent rounded-lg"></div>

                {/* Text */}
                <h2 className="relative text-white text-xl font-bold max-w-[150px]">
                  Nos RECHERCHES
                </h2>
              </motion.div>

              {/* Bottom sub-div */}
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="relative h-[40%] flex items-end justify-start p-2 text-left rounded-lg overflow-hidden group"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${nanodev})` }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 rounded-lg"></div>

                {/* Text */}
                <h2 className="relative text-white text-lg font-bold max-w-[150px]">
                  Le Monde du NANO-DEV
                </h2>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Layout (md to lg) */}
      <div className="hidden md:flex lg:hidden flex-col gap-4 md:h-full w-full">
        {/* Top Row */}
        <div className="flex gap-4 h-1/2">
          {/* Health Revived */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex-1 rounded-lg flex items-end justify-start p-4 overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${healthImage})` }}
            ></div>
            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            <h1 className="relative text-white text-xl font-bold drop-shadow-lg">
              Health Revived
            </h1>
          </motion.div>

          {/* Scientists */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex-1 flex items-end justify-start p-4 rounded-lg overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${scientists})` }}
            ></div>
            <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
            <h2 className="relative text-white text-lg font-bold text-left">
              Top-notch healthcare equipments & Scientists
            </h2>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="flex gap-4 h-1/2">
          {/* Phone App */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex-1 flex items-center justify-start p-4 rounded-lg overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${phone})` }}
            ></div>
            <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
            <h2 className="relative text-white text-lg font-bold text-left">
              Découvrez NOTRE APPLI
            </h2>
          </motion.div>

          {/* Research */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex-1 flex items-end justify-start p-4 rounded-lg overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${bacterie})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-green-500/80 to-transparent rounded-lg"></div>
            <h2 className="relative text-white text-lg font-bold">
              Nos RECHERCHES
            </h2>
          </motion.div>

          {/* Nano Dev */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative flex-1 flex items-end justify-start p-4 rounded-lg overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${nanodev})` }}
            ></div>
            <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
            <h2 className="relative text-white text-base font-bold">
              Le Monde du NANO-DEV
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Mobile Layout (sm and below) */}
      <div className="flex md:hidden flex-col gap-4 w-full">
        {/* Health Revived - Main card */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative h-64 rounded-lg flex items-end justify-start p-4 overflow-hidden group"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${healthImage})` }}
          ></div>
          <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
          <h1 className="relative text-white text-2xl font-bold drop-shadow-lg">
            Health Revived
          </h1>
        </motion.div>

        {/* Scientists */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-48 flex items-end justify-start p-4 rounded-lg overflow-hidden group"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${scientists})` }}
          ></div>
          <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
          <h2 className="relative text-white text-lg font-bold text-left">
            Top-notch healthcare equipments & Scientists
          </h2>
        </motion.div>

        {/* Two column layout for remaining cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Phone App */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-40 flex items-center justify-start p-4 rounded-lg overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${phone})` }}
            ></div>
            <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
            <h2 className="relative text-white text-base font-bold text-left">
              Découvrez NOTRE APPLI
            </h2>
          </motion.div>

          {/* Research */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-40 flex items-end justify-start p-4 rounded-lg overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${bacterie})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-green-500/80 to-transparent rounded-lg"></div>
            <h2 className="relative text-white text-base font-bold">
              Nos RECHERCHES
            </h2>
          </motion.div>
        </div>

        {/* Nano Dev - Full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative h-36 flex items-end justify-start p-4 rounded-lg overflow-hidden group"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${nanodev})` }}
          ></div>
          <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
          <h2 className="relative text-white text-base font-bold">
            Le Monde du NANO-DEV
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;