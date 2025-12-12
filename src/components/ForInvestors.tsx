import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Clock, Award, Users, TrendingUp } from "lucide-react";

const ForInvestors: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Replace this with your actual video URL or YouTube/Vimeo embed ID
  const videoUrl = "https://www.youtube.com/embed/YOUR_VIDEO_ID"; // Replace YOUR_VIDEO_ID with actual video ID
  // Or use a direct video file:
  // const videoUrl = "/videos/historical-video.mp4";

  const milestones = [
    {
      year: "2020",
      title: "Fondation",
      description: "Création de NADPHARMADIC avec une vision claire de l'innovation pharmaceutique",
      icon: <Award className="w-6 h-6" />
    },
    {
      year: "2021",
      title: "Premiers Produits",
      description: "Lancement de notre première gamme de médicaments sur le marché",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      year: "2023",
      title: "Expansion",
      description: "Élargissement de notre portefeuille et développement de nouvelles spécialités",
      icon: <Users className="w-6 h-6" />
    },
    {
      year: "2025",
      title: "Innovation Continue",
      description: "Poursuite de notre mission d'excellence et d'innovation en santé",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <section
      id="historique"
      className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-200/20 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-48 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
            Notre Histoire
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-cyan-800 to-blue-800 bg-clip-text text-transparent mb-6">
            Historique
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Découvrez l'histoire de NADPHARMADIC, notre parcours d'innovation et
            notre engagement envers l'excellence pharmaceutique depuis nos débuts.
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Video Container */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-700">
              {!isPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="group relative w-24 h-24 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl mb-4"
                    >
                      <Play className="w-10 h-10 text-cyan-600 ml-1" fill="currentColor" />
                      <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                    </button>
                    {/* <p className="text-white text-lg font-medium">Découvrir notre histoire</p> */}
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src={videoUrl}
                  title="Historique NADPHARMADIC"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            {/* Video Info */}
            <div className="p-8 bg-gradient-to-r from-cyan-50 to-blue-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                L'Histoire de NADPHARMADIC
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Plongez dans notre parcours, de nos humbles débuts à notre position
                actuelle de leader en innovation pharmaceutique. Découvrez les moments
                clés qui ont façonné notre entreprise et notre vision pour l'avenir.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Milestones Timeline */}
        <div className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Jalons Importants
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={i}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Content card */}
                  <div
                    className={`flex-1 ${
                      i % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-3">
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <motion.div
          className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12 text-white text-center shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">Notre Mission</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-95">
            Depuis notre création, nous nous engageons à améliorer la santé et le
            bien-être de nos communautés grâce à l'innovation pharmaceutique, la
            qualité exceptionnelle et l'excellence dans tout ce que nous faisons.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ForInvestors;
