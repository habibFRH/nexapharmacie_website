import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Atom,
  Zap,
  Microscope,
  Target,
  Cpu,
  Beaker,
  Eye,
  Shield,
  Layers,
  Sparkles,
  ChevronRight
} from "lucide-react";
import Footer from "../components/Footer";

const NanoDevPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-slate-800 via-gray-900 to-black text-white py-20 px-4 lg:px-48 md:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/20"></div>

          {/* Animated nano particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              ></div>
            ))}
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Le Monde du <span className="text-cyan-400">NANO-DEV</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
                  Explorez l'infiniment petit pour des solutions infiniment
                  grandes. La nanotechnologie au service de la santé et de
                  l'innovation.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                    <Atom className="w-5 h-5 text-cyan-400" />
                    <span className="font-semibold">1-100 nanomètres</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                    <Microscope className="w-5 h-5 text-purple-400" />
                    <span className="font-semibold">Précision atomique</span>
                  </div>
                </div>
              </div>

              {/* Nano visualization */}
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-4 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full animate-pulse"></div>
                  <div className="absolute inset-8 bg-gradient-to-r from-cyan-400/40 to-purple-400/40 rounded-full animate-spin-reverse-slow"></div>
                  <div className="absolute inset-12 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center">
                    <Atom className="w-24 h-24 text-cyan-400 animate-pulse" />
                  </div>

                  {/* Orbiting particles */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-cyan-400 rounded-full animate-pulse"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `rotate(${
                          i * 45
                        }deg) translateX(120px) translateY(-50%)`,
                        transformOrigin: "left center"
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 px-4 lg:px-48 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              L'Art de Manipuler l'Invisible
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Dans le monde du nano-développement, nous travaillons à l'échelle
              des atomes et des molécules pour créer des technologies
              révolutionnaires. Un nanomètre représente un milliardième de mètre
              - 80 000 fois plus petit que la largeur d'un cheveu humain.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-cyan-600 mb-2">1nm</div>
                <p className="text-gray-700">Taille d'une molécule d'ADN</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  10nm
                </div>
                <p className="text-gray-700">Largeur d'une protéine</p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-gray-600 mb-2">
                  100nm
                </div>
                <p className="text-gray-700">Taille d'un virus</p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 bg-gradient-to-r from-gray-50 to-cyan-50 px-4 lg:px-48 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Applications Révolutionnaires
              </h2>
              <p className="text-xl text-gray-600">
                Nos innovations nanotechnologiques transforment la médecine
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Thérapie Ciblée
                </h3>
                <p className="text-gray-600">
                  Nanoparticules qui délivrent des médicaments directement aux
                  cellules malades, minimisant les effets secondaires.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Diagnostic Précoce
                </h3>
                <p className="text-gray-600">
                  Nanocapteurs ultra-sensibles capables de détecter les maladies
                  au stade le plus précoce.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Beaker className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Régénération Tissulaire
                </h3>
                <p className="text-gray-600">
                  Nano-échafaudages qui guident la croissance de nouveaux tissus
                  et organes.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-r from-red-100 to-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Protection Cellulaire
                </h3>
                <p className="text-gray-600">
                  Nanocoatings biocompatibles qui protègent les cellules contre
                  les agressions extérieures.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Implants Intelligents
                </h3>
                <p className="text-gray-600">
                  Nanodispositifs intégrés qui surveillent et régulent les
                  fonctions corporelles en temps réel.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Layers className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Surfaces Antimicrobiennes
                </h3>
                <p className="text-gray-600">
                  Revêtements nano-structurés qui éliminent naturellement les
                  bactéries et virus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-16 px-4 lg:px-48 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Domaines de Recherche
              </h2>
              <p className="text-xl text-gray-600">
                Nos laboratoires explorent les frontières de la science
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Atom className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">
                      Nanomatériaux Bioactifs
                    </h3>
                    <p className="text-cyan-100 leading-relaxed mb-4">
                      Développement de matériaux à l'échelle nanométrique qui
                      interagissent de manière contrôlée avec les systèmes
                      biologiques pour améliorer la guérison et la régénération.
                    </p>
                    <div className="flex items-center text-cyan-200">
                      <span className="mr-2">Découvrir nos recherches</span>
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Microscope className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">
                      Nanocapteurs Médicaux
                    </h3>
                    <p className="text-purple-100 leading-relaxed mb-4">
                      Conception de capteurs ultra-miniaturisés capables de
                      détecter des biomarqueurs spécifiques au niveau
                      moléculaire pour un diagnostic ultra-précoce.
                    </p>
                    <div className="flex items-center text-purple-200">
                      <span className="mr-2">Explorer les innovations</span>
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">
                      Nanorobots Thérapeutiques
                    </h3>
                    <p className="text-green-100 leading-relaxed mb-4">
                      Développement de robots microscopiques programmables
                      capables de naviguer dans le corps humain pour effectuer
                      des interventions ciblées.
                    </p>
                    <div className="flex items-center text-green-200">
                      <span className="mr-2">Voir nos prototypes</span>
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-16 bg-gradient-to-r from-slate-800 via-gray-900 to-black text-white px-4 lg:px-48 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Sparkles className="w-16 h-16 text-cyan-400 mx-auto mb-6 animate-pulse" />
              <h2 className="text-4xl font-bold mb-6">
                L'Avenir de la Nanotechnologie
              </h2>
            </div>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Demain, les nanotechnologies révolutionneront la médecine
              personnalisée. Imaginez des traitements adaptés à votre ADN, des
              diagnostics instantanés et des thérapies qui réparent votre corps
              au niveau cellulaire.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  2025
                </div>
                <p className="text-gray-300">
                  Premiers nanomédicaments personnalisés
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  2030
                </div>
                <p className="text-gray-300">Nanorobots médicaux commerciaux</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  2035
                </div>
                <p className="text-gray-300">
                  Régénération d'organes par nanotechnologie
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-8 px-4 lg:px-48 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold transition-colors duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Retour à l'accueil
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NanoDevPage;
