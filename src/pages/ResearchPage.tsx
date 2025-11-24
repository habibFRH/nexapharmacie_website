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
import { useNavigate } from "react-router-dom";
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
import productRange1 from "../assets/Nos gammes de Medcs 01.png";
import productRange2 from "../assets/Nos gammes de Medcs 02.png";

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
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            medicine.category === "Cardiologie"
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

      <div className="pt-3 border-t border-gray-100">
        <div className="flex items-center text-center justify-center">
          <button className="!bg-blue-600 hover:!bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Lire la notice
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Simple Carousel Component (Image left, Info right)
const SimpleCarousel = ({
  medicines,
  title
}: {
  medicines: any[];
  title: string;
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

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full !bg-gray-100 hover:!bg-gray-200 transition-colors"
            disabled={totalSlides <= 1}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full !bg-gray-100 hover:!bg-gray-200 transition-colors"
            disabled={totalSlides <= 1}
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Simple layout: Image left, Info right */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image section */}
          <div className="relative">
            <img
              src={currentMedicine.image}
              alt={currentMedicine.name}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
            <div className="absolute top-3 right-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  currentMedicine.category === "Cardiologie"
                    ? "bg-red-100 text-red-800"
                    : currentMedicine.category === "Neurologie"
                    ? "bg-purple-100 text-purple-800"
                    : currentMedicine.category === "Analgésique"
                    ? "bg-blue-100 text-blue-800"
                    : currentMedicine.category === "Antibiotique"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {currentMedicine.category}
              </span>
            </div>
          </div>

          {/* Information section */}
          <div className="flex flex-col justify-center space-y-4">
            <div>
              <h4 className="text-2xl font-bold text-gray-800">
                {currentMedicine.name}
              </h4>
              <p className="text-gray-600">{currentMedicine.scientificName}</p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {currentMedicine.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Pill className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Dosage</p>
                  <p className="font-semibold text-gray-700">
                    {currentMedicine.dosage}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-sm text-gray-500">Durée</p>
                  <p className="font-semibold text-gray-700">
                    {currentMedicine.duration}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">
                  
                </span>
                <button className="!bg-blue-600 hover:!bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Lire la notice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {totalSlides > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "!bg-blue-600" : "!bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const MedicinesPage: React.FC = () => {
  // NADOL variants for carousel
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

  // Antibiotics for carousel
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

  // Individual medicines for cards
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
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow">
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
            />

            {/* Product Range Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="relative">
                  <img
                    src={productRange1}
                    alt="Nos gammes de médicaments 1"
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=${encodeURIComponent(
                        "Nos gammes de médicaments 1"
                      )}`;
                    }}
                  />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="relative">
                  <img
                    src={productRange2}
                    alt="Nos gammes de médicaments 2"
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=${encodeURIComponent(
                        "Nos gammes de médicaments 2"
                      )}`;
                    }}
                  />
                </div>
              </div>
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
                      <li>
                        • Conservez les médicaments hors de portée des enfants
                      </li>
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

      {/* Navigation de retour */}
      <section className="py-8 px-4 lg:px-48 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <button
            className="!bg-white inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300 group"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MedicinesPage;
