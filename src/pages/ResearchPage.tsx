/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  ArrowLeft,
  Pill,
  ChevronLeft,
  ChevronRight,
  Clock,
  AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";
// Import all images properly for production builds
import bacterieImg from "../assets/bacterie.png";
import healthImg from "../assets/health.png";
import catafenacImg from "../assets/catafenac.png";
import dipronadImg from "../assets/dipronad.png";
import kenacortylImg from "../assets/kenacortyl.png";
import celestinadImg from "../assets/celestinad.png";
import methylImg from "../assets/methyl.png";
import plandixImg from "../assets/plandix.png";
import levospasmeImg from "../assets/levospasme.png";
import pepsulenImg from "../assets/pepsulen.png";
import prednicortImg from "../assets/prednicort.png";
import ubactiveImg from "../assets/ubactive.png";

// Import images from nadpic
import img15 from "../assets/nadpic/15.png";
import img16 from "../assets/nadpic/16.png";
import img17 from "../assets/nadpic/17.png";
import img18 from "../assets/nadpic/18.png";
import img19 from "../assets/nadpic/19.png";
import img20 from "../assets/nadpic/20.png";
import img21 from "../assets/nadpic/21.png";
import img22 from "../assets/nadpic/22.png";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 px-4 lg:px-48 md:px-8">
    <div className="text-center">
      <p>&copy; 2025 NADPHARMADIC. Tous droits réservés.</p>
    </div>
  </footer>
);

// Simple Medicine Card Component
const MedicineCard = ({ medicine }: { medicine: any }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
    <div className="relative mb-4">
      <img
        src={medicine.image}
        alt={medicine.name}
        className="w-full h-48 object-cover rounded-lg"
        onError={(e) => {
          e.currentTarget.src = `https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=${encodeURIComponent(
            medicine.name
          )}`;
        }}
      />
      <div className="absolute top-2 right-2">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${medicine.category === "Cardiologie"
            ? "bg-red-100 text-red-800"
            : medicine.category === "Neurologie"
              ? "bg-purple-100 text-purple-800"
              : medicine.category === "Analgésique"
                ? "bg-blue-100 text-blue-800"
                : medicine.category === "Antibiotique"
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-800"
            }`}
        >
          {medicine.category}
        </span>
      </div>
    </div>

    <div className="space-y-3">
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{medicine.name}</h3>
        <p className="text-sm text-gray-600">{medicine.scientificName}</p>
      </div>

      <p className="text-gray-600 text-sm">{medicine.description}</p>
    </div>
  </div>
);

// Simple Carousel Component (Image left, Info right)
const SimpleCarousel = ({
  medicines,
  title,
  variant = "modern"
}: {
  medicines: any[];
  title: string;
  variant?: "modern" | "thin";
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = medicines.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentMedicine = medicines[currentSlide];

  if (variant === "thin") {
    return (
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800 tracking-tight">{title}</h3>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-1.5 rounded-full bg-gray-50 border !border-black text-black hover:text-blue-600 transition-colors"
              disabled={totalSlides <= 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-1.5 rounded-full bg-gray-50 border !border-black text-black hover:text-blue-600 transition-colors"
              disabled={totalSlides <= 1}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex flex-col md:flex-row h-auto md:h-56">
            <div className="w-full md:w-[55%] bg-gray-50/50 flex items-center justify-center p-4 relative">
              <img
                src={currentMedicine.image}
                alt={currentMedicine.name}
                className="max-w-full max-h-full object-contain drop-shadow-md"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
                {currentMedicine.category}
              </span>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-center">
              <h4 className="text-xl font-bold text-gray-900 mb-1">{currentMedicine.name}</h4>
              <p className="text-xs text-blue-600/70 font-medium italic mb-3">{currentMedicine.scientificName}</p>
              <p className="text-sm text-gray-500 line-clamp-2 font-light leading-relaxed">
                {currentMedicine.description}
              </p>

              <div className="flex items-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <Pill className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-xs font-semibold text-gray-700">{currentMedicine.dosage}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-xs font-semibold text-gray-700">{currentMedicine.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {totalSlides > 1 && (
          <div className="flex justify-center mt-4 gap-1.5">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 transition-all duration-300 rounded-full ${index === currentSlide ? "w-6 bg-blue-500" : "w-1.5 bg-gray-200"
                  }`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="mb-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h3>
          <div className="h-1 w-20 bg-blue-600 mt-2 rounded-full"></div>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all text-gray-600"
            disabled={totalSlides <= 1}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-100 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all text-gray-600"
            disabled={totalSlides <= 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Modern layout: Floating card style */}
      <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-50 group">
        <div className="grid md:grid-cols-2">
          {/* Image section */}
          <div className="relative h-80 md:h-[500px] overflow-hidden">
            <img
              src={currentMedicine.image}
              alt={currentMedicine.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6">
              <span
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg ${currentMedicine.category === "Cardiologie"
                  ? "bg-red-500 text-white"
                  : currentMedicine.category === "Neurologie"
                    ? "bg-purple-500 text-white"
                    : currentMedicine.category === "Analgésique"
                      ? "bg-blue-500 text-white"
                      : currentMedicine.category === "Antibiotique"
                        ? "bg-green-500 text-white"
                        : "bg-gray-800 text-white"
                  }`}
              >
                {currentMedicine.category}
              </span>
            </div>
          </div>

          {/* Information section */}
          <div className="flex flex-col justify-center p-8 md:p-16 space-y-8 bg-gradient-to-br from-white to-blue-50/30">
            <div>
              <h4 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
                {currentMedicine.name}
              </h4>
              <p className="text-xl text-blue-600/80 font-medium italic">{currentMedicine.scientificName}</p>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed font-light">
              {currentMedicine.description}
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Pill className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Dosage</p>
                  <p className="font-bold text-gray-800">
                    {currentMedicine.dosage}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Durée</p>
                  <p className="font-bold text-gray-800">
                    {currentMedicine.duration}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {totalSlides > 1 && (
        <div className="flex justify-center mt-10 gap-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 transition-all duration-500 rounded-full ${index === currentSlide ? "w-12 bg-blue-600 shadow-lg shadow-blue-500/30" : "w-4 bg-gray-300"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};


const MedicinesPage: React.FC = () => {
  const nadolVariants = [
    {
      name: "NADOL Plus",
      scientificName: "Paracétamol 500mg + Ibuprofène 200mg",
      description: "Analgésique puissant pour douleurs modérées à sévères",
      category: "Analgésique",
      dosage: "1-2 comprimés",
      duration: "4-6 heures",
      price: "450 DA",
      image: bacterieImg
    },
    {
      name: "NADOL Rapid",
      scientificName: "Paracétamol 1000mg à libération rapide",
      description: "Action rapide contre la fièvre et les douleurs",
      category: "Analgésique",
      dosage: "1 comprimé",
      duration: "6-8 heures",
      price: "320 DA",
      image: healthImg
    },
    {
      name: "NADOL Forte",
      scientificName: "Paracétamol 650mg + Caféine 65mg",
      description: "Formule renforcée pour maux de tête intenses",
      category: "Analgésique",
      dosage: "1 comprimé",
      duration: "6 heures",
      price: "380 DA",
      image: catafenacImg
    },
    {
      name: "NADOL Effervescent",
      scientificName: "Paracétamol 500mg effervescent",
      description: "Dissolution rapide pour une action immédiate",
      category: "Analgésique",
      dosage: "1 comprimé",
      duration: "4-6 heures",
      price: "420 DA",
      image: dipronadImg
    }
  ];

  const antibioticMedicines = [
    {
      name: "NADICILLINE 500",
      scientificName: "Amoxicilline 500mg",
      description: "Antibiotique à large spectre pour infections bactériennes",
      category: "Antibiotique",
      dosage: "1 gélule x3/jour",
      duration: "7-10 jours",
      price: "680 DA",
      image: kenacortylImg
    },
    {
      name: "NADICILLINE Duo",
      scientificName: "Amoxicilline 875mg + Ac. Clavulanique 125mg",
      description: "Association renforcée contre les résistances",
      category: "Antibiotique",
      dosage: "1 comprimé x2/jour",
      duration: "7 jours",
      price: "890 DA",
      image: celestinadImg
    },
    {
      name: "NADICILLINE Suspension",
      scientificName: "Amoxicilline 250mg/5ml",
      description: "Formule pédiatrique au goût fruité",
      category: "Antibiotique",
      dosage: "5-10ml x3/jour",
      duration: "7 jours",
      price: "520 DA",
      image: methylImg
    },
    {
      name: "NADICILLINE Duo",
      scientificName: "Amoxicilline 250mg/5ml",
      description: "Formule pédiatrique au goût fruité",
      category: "Antibiotique",
      dosage: "5-10ml x3/jour",
      duration: "7 jours",
      price: "520 DA",
      image: dipronadImg
    }
  ];

  const individualMedicines = [
    {
      name: "NADICARD 5",
      scientificName: "Amlodipine 5mg",
      description: "Antihypertenseur pour le contrôle de la tension artérielle",
      category: "Cardiologie",
      dosage: "1 comprimé/jour",
      duration: "Traitement continu",
      price: "750 DA",
      image: plandixImg
    },
    {
      name: "NADIMIND",
      scientificName: "Donépézil 10mg",
      description: "Traitement des troubles cognitifs et de la mémoire",
      category: "Neurologie",
      dosage: "1 comprimé/jour",
      duration: "Traitement prolongé",
      price: "1250 DA",
      image: levospasmeImg
    },
    {
      name: "NADIGEST",
      scientificName: "Oméprazole 20mg",
      description: "Protection gastrique et traitement des ulcères",
      category: "Gastro-entérologie",
      dosage: "1 gélule/jour",
      duration: "4-8 semaines",
      price: "580 DA",
      image: pepsulenImg
    },
    {
      name: "NADIreспир",
      scientificName: "Salbutamol 100µg/dose",
      description: "Bronchodilatateur en spray pour l'asthme",
      category: "Pneumologie",
      dosage: "1-2 bouffées",
      duration: "Selon besoin",
      price: "920 DA",
      image: prednicortImg
    },
    {
      name: "NADIVIT D3",
      scientificName: "Cholécalciférol 1000 UI",
      description: "Supplément en vitamine D3 pour la santé osseuse",
      category: "Supplémentation",
      dosage: "1 gélule/jour",
      duration: "3 mois",
      price: "420 DA",
      image: ubactiveImg
    },
    {
      name: "NADICALM",
      scientificName: "Lorazépam 1mg",
      description: "Anxiolytique pour le traitement de l'anxiété",
      category: "Psychiatrie",
      dosage: "1/2 à 1 comprimé",
      duration: "Traitement court",
      price: "680 DA",
      image: catafenacImg
    }
  ];

  const categories = [
    {
      name: "Tous",
      count:
        individualMedicines.length +
        nadolVariants.length +
        antibioticMedicines.length,
      color: "bg-gray-100 text-gray-800"
    },
    { name: "Cardiologie", count: 1, color: "bg-red-100 text-red-800" },
    { name: "Neurologie", count: 1, color: "bg-purple-100 text-purple-800" },
    {
      name: "Analgésique",
      count: nadolVariants.length,
      color: "bg-blue-100 text-blue-800"
    },
    {
      name: "Antibiotique",
      count: antibioticMedicines.length,
      color: "bg-green-100 text-green-800"
    }
  ];
  // const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow relative">
        {/* Floating Back Button */}
        <div className="absolute top-6 left-6 z-50">
          <Link
            to="/"
            className="!bg-white backdrop-blur-md border !border-white/20 text-black px-4 py-2 rounded-full inline-flex items-center gap-2 hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-semibold">Go Back</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-48 md:px-8">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-6">
                Nos <span className="text-yellow-300">MÉDICAMENTS</span>
              </h1>
              <p className="text-xl leading-relaxed mb-8">
                Découvrez notre gamme complète de médicaments pharmaceutiques de
                haute qualité, développés selon les standards internationaux les
                plus exigeants pour votre santé et votre bien-être.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 lg:px-48 md:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 rounded-full ${category.color} text-sm font-medium`}
                >
                  {category.name} ({category.count})
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-48 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Médicaments</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">8</div>
                <div className="text-gray-600 font-medium">Catégories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  100%
                </div>
                <div className="text-gray-600 font-medium">Qualité</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">Disponibilité</div>
              </div>
            </div>
          </div>
        </section>

        {/* Medicine Carousels */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-48 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Nos Gammes de Médicaments
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explorez nos différentes gammes de médicaments développées pour
                répondre à vos besoins de santé spécifiques
              </p>
            </div>
            {/* Antibiotics Carousel */}
            <SimpleCarousel
              medicines={antibioticMedicines}
              title="Gamme Antibiotiques NADICILLINE"
              variant="thin"
            />
          </div>
        </section>

        {/* Research & Innovation Gallery */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 text-center md:text-left">
              <div className="md:w-2/3">
                <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
                  Laboratoires & <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Innovation</span>
                </h2>
                <p className="text-xl text-slate-400 max-w-xl font-light">
                  Exploration scientifique et développement de pointe pour les traitements de demain.
                </p>
              </div>
              <div className="flex gap-3 justify-center md:justify-end">
                <div className="h-2 w-16 bg-blue-600 rounded-full shadow-lg shadow-blue-500/20"></div>
                <div className="h-2 w-32 bg-slate-800 rounded-full"></div>
              </div>
            </div>

            {/* Featured Research Image - Ultra Modern */}
            <div className="relative rounded-[3rem] overflow-hidden mb-16 group h-[600px] border-4 border-slate-800/50 shadow-inner">
              <img src={img15} alt="Research 15" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-12 md:p-20 w-full md:w-2/3 text-left">
                <span className="inline-flex items-center px-4 py-1 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 backdrop-blur-md">Pôle Excellence</span>
                <h3 className="text-5xl md:text-6xl font-black mb-6 leading-none">Recherche Appliquée</h3>
                <p className="text-xl text-slate-300 max-w-xl font-light leading-relaxed italic">
                  "Nos équipes travaillent sans relâche pour garantir la stabilité et l'efficacité de chaque substance active."
                </p>
              </div>
            </div>

            {/* Scrolling Gallery - No scrollbar, sleek cards */}
            <div className="flex gap-8 overflow-x-auto pb-10 scrollbar-hide snap-x -mx-4 px-4">
              {[img16, img17, img18, img19, img20, img21, img22].map((img, idx) => (
                <div key={idx} className="flex-shrink-0 w-[80vw] md:w-[400px] snap-center">
                  <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] group border-2 border-slate-800/50">
                    <img src={img} alt={`Research ${idx + 16}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-blue-600/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center backdrop-blur-sm p-6 text-center">
                      <h5 className="text-white font-black uppercase tracking-[0.2em] text-sm mb-2">Unité de Recherche</h5>
                      <p className="text-blue-100 font-light text-xs">Excellence & Innovation Constante</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Individual Medicines */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 lg:px-48 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Autres Spécialités Pharmaceutiques
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Une sélection de nos médicaments spécialisés pour diverses
                pathologies et besoins thérapeutiques
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {individualMedicines.map((medicine, index) => (
                <MedicineCard key={index} medicine={medicine} />
              ))}
            </div>
          </div>
        </section>

        {/* Safety Information */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-48 md:px-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Informations Importantes
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
                    <ul className="space-y-2">
                      <li>• Consultez toujours votre médecin ou pharmacien</li>
                      <li>• Respectez scrupuleusement les dosages prescrits</li>
                      <li>• Lisez attentivement la notice avant utilisation</li>
                      <li>• Vérifiez les interactions médicamenteuses</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Conservez les médicaments hors de portée des enfants</li>
                      <li>• Respectez les conditions de conservation</li>
                      <li>• Ne dépassez pas la date d'expiration</li>
                      <li>• Signalez tout effet indésirable à votre médecin</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-48 md:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Besoin de Conseils Pharmaceutiques ?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Notre équipe d'experts est à votre disposition pour vous
              conseiller et vous accompagner dans le choix de vos traitements.
            </p>
          </div>
        </section>
      </main>


      <Footer />
    </div>
  );
};

export default MedicinesPage;
