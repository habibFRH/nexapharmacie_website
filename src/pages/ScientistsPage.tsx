import React, { useState } from "react";
import {
  ArrowLeft,
  Award,
  MapPin,
  Mail,
  Linkedin,
  Star,
  Microscope,
  Stethoscope,
  Brain,
  Zap,
  Database,
  Shield
} from "lucide-react";



const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 px-4 lg:px-48 md:px-8">
    <div className="text-center">
      <p>&copy; 2024 MedTech Solutions. Tous droits réservés.</p>
    </div>
  </footer>
);

const ScientistCard = ({ scientist, onClick }) => (
  <div
    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 cursor-pointer transform hover:-translate-y-1"
    onClick={() => onClick(scientist)}
  >
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
        {scientist.name
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-800">
          {scientist.name}
        </h3>
        <p className="text-blue-600 font-medium">{scientist.title}</p>
        <div className="flex items-center text-gray-600 text-sm mt-1">
          <MapPin className="w-4 h-4 mr-1" />
          {scientist.location}
        </div>
      </div>
    </div>

    <p className="text-gray-600 mb-4 text-sm">{scientist.shortBio}</p>

    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-yellow-500">
          <Star className="w-4 h-4 mr-1 fill-current" />
          <span className="text-sm font-medium">{scientist.rating}</span>
        </div>
        <span className="text-sm text-gray-500">
          {scientist.publications} publications
        </span>
      </div>
      <div className="flex space-x-2">
        <Mail className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
        <Linkedin className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
      </div>
    </div>
  </div>
);

const EquipmentCard = ({ equipment }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
    <div className="flex items-start space-x-4">
      <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-lg">
        <equipment.icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {equipment.name}
        </h3>
        <p className="text-gray-600 mb-4">{equipment.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              {equipment.status}
            </span>
            <span className="text-sm text-gray-500">{equipment.year}</span>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Précision</div>
            <div className="text-lg font-semibold text-gray-800">
              {equipment.precision}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ScientistModal = ({ scientist, isOpen, onClose }) => {
  if (!isOpen || !scientist) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                {scientist.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {scientist.name}
                </h2>
                <p className="text-blue-600 font-medium text-lg">
                  {scientist.title}
                </p>
                <div className="flex items-center text-gray-600 mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  {scientist.location}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {scientist.experience}
              </div>
              <div className="text-gray-600">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {scientist.publications}
              </div>
              <div className="text-gray-600">Publications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {scientist.awards}
              </div>
              <div className="text-gray-600">Récompenses</div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Biographie
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {scientist.fullBio}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Spécialisations
              </h3>
              <div className="flex flex-wrap gap-2">
                {scientist.specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Réalisations Récentes
              </h3>
              <ul className="space-y-2">
                {scientist.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Award className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScientistsPage = () => {
  const [selectedScientist, setSelectedScientist] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("scientists");

  const scientists = [
    {
      name: "Dr. Marie Dubois",
      title: "Directrice de Recherche en Oncologie",
      location: "Paris, France",
      shortBio:
        "Spécialiste en thérapies géniques pour le traitement des cancers rares avec plus de 15 ans d'expérience.",
      fullBio:
        "Dr. Marie Dubois est une oncologue de renommée mondiale, diplômée de l'École Normale Supérieure et titulaire d'un doctorat en biologie moléculaire. Elle dirige l'équipe de recherche en oncologie et s'est spécialisée dans le développement de thérapies géniques révolutionnaires pour traiter les cancers les plus agressifs.",
      rating: 4.9,
      publications: 127,
      experience: 15,
      awards: 8,
      specializations: [
        "Oncologie Moléculaire",
        "Thérapies Géniques",
        "Cancers Rares"
      ],
      achievements: [
        "Développement d'un traitement révolutionnaire pour le mélanome métastatique",
        "Prix Nobel en médecine 2023 pour ses recherches sur l'immunothérapie",
        "Publication de plus de 100 articles dans Nature et Science"
      ]
    },
    {
      name: "Prof. Jean-Pierre Martin",
      title: "Chef du Département Cardiologie",
      location: "Lyon, France",
      shortBio:
        "Pionnier de la chirurgie cardiaque robotique et expert en cardiologie interventionnelle.",
      fullBio:
        "Prof. Jean-Pierre Martin est un cardiologue interventionnel de premier plan, reconnu mondialement pour ses innovations en chirurgie cardiaque robotique. Il a formé plus de 200 chirurgiens et a réalisé plus de 3000 interventions complexes.",
      rating: 4.8,
      publications: 89,
      experience: 22,
      awards: 12,
      specializations: [
        "Chirurgie Robotique",
        "Cardiologie Interventionnelle",
        "Valvulopathies"
      ],
      achievements: [
        "Premier au monde à réaliser une transplantation cardiaque entièrement robotisée",
        "Développement du système CardioRobot© utilisé dans 50 pays",
        "Formation de plus de 200 chirurgiens cardiaques"
      ]
    },
    {
      name: "Dr. Sarah Chen",
      title: "Spécialiste en Intelligence Artificielle Médicale",
      location: "Toulouse, France",
      shortBio:
        "Experte en IA appliquée au diagnostic médical et développement d'algorithmes prédictifs.",
      fullBio:
        "Dr. Sarah Chen combine expertise médicale et compétences en intelligence artificielle. Diplômée à la fois en médecine et en informatique, elle développe des algorithmes d'IA qui révolutionnent le diagnostic précoce de nombreuses pathologies.",
      rating: 4.7,
      publications: 76,
      experience: 12,
      awards: 6,
      specializations: [
        "Intelligence Artificielle",
        "Diagnostic Prédictif",
        "Machine Learning Médical"
      ],
      achievements: [
        "Algorithme de détection précoce d'Alzheimer avec 95% de précision",
        "Système d'IA pour diagnostic de rétinopathie diabétique adopté par l'OMS",
        "Startup MedAI valorisée à 500M€"
      ]
    },
    {
      name: "Dr. Ahmed Benali",
      title: "Directeur Innovation Nanotechnologies",
      location: "Marseille, France",
      shortBio:
        "Expert en nanotechnologies médicales et développement de systèmes de délivrance de médicaments.",
      fullBio:
        "Dr. Ahmed Benali est un pionnier des nanotechnologies médicales. Ses recherches portent sur le développement de nanorobots capables de délivrer des médicaments directement aux cellules malades, révolutionnant ainsi les traitements oncologiques.",
      rating: 4.8,
      publications: 94,
      experience: 18,
      awards: 10,
      specializations: ["Nanotechnologies", "Drug Delivery", "Nanorobotique"],
      achievements: [
        "Développement de nanorobots pour traitement ciblé du cancer",
        "Brevet international pour système de délivrance nanométrique",
        "Collaboration avec la NASA pour médecine spatiale"
      ]
    }
  ];

  const equipment = [
    {
      name: "IRM 7 Tesla Ultra-Haute Résolution",
      description:
        "Scanner IRM de dernière génération offrant une résolution exceptionnelle pour l'imagerie cérébrale et cardiaque.",
      icon: Brain,
      status: "Opérationnel",
      year: "2024",
      precision: "0.1mm"
    },
    {
      name: "Microscope Électronique Cryogénique",
      description:
        "Technologie révolutionnaire permettant l'observation de structures biologiques à l'échelle atomique.",
      icon: Microscope,
      status: "Opérationnel",
      year: "2023",
      precision: "0.05nm"
    },
    {
      name: "Système de Chirurgie Robotique da Vinci Xi",
      description:
        "Robot chirurgical de pointe pour interventions minimalement invasives avec précision millimétrique.",
      icon: Zap,
      status: "En service",
      year: "2024",
      precision: "±0.5mm"
    },
    {
      name: "Séquenceur ADN Nouvelle Génération",
      description:
        "Équipement de séquençage ultra-rapide pour analyse génomique complète en moins de 24h.",
      icon: Database,
      status: "Opérationnel",
      year: "2023",
      precision: "99.9%"
    },
    {
      name: "Scanner TEP-TDM Hybride",
      description:
        "Imagerie métabolique et anatomique combinée pour diagnostic oncologique de haute précision.",
      icon: Shield,
      status: "En service",
      year: "2024",
      precision: "2mm"
    },
    {
      name: "Échographe Doppler 4D",
      description:
        "Système d'échographie avancé avec imagerie 4D temps réel pour cardiologie et obstétrique.",
      icon: Stethoscope,
      status: "Opérationnel",
      year: "2023",
      precision: "0.3mm"
    }
  ];

  const handleScientistClick = (scientist) => {
    setSelectedScientist(scientist);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedScientist(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-48 md:px-8">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-6">
                Équipes d'<span className="text-yellow-300">EXCELLENCE</span> &
                Équipements de Pointe
              </h1>
              <p className="text-xl leading-relaxed mb-8">
                Rencontrez notre équipe de scientifiques de classe mondiale et
                découvrez nos équipements médicaux de pointe conçus pour
                repousser les limites de l'innovation médicale.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setActiveTab("scientists")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    activeTab === "scientists"
                      ? "bg-white text-purple-600"
                      : "border-2 border-white text-white hover:bg-white hover:text-purple-600"
                  }`}
                >
                  Nos Scientifiques
                </button>
                <button
                  onClick={() => setActiveTab("equipment")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    activeTab === "equipment"
                      ? "bg-white text-purple-600"
                      : "border-2 border-white text-white hover:bg-white hover:text-purple-600"
                  }`}
                >
                  Nos Équipements
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Statistiques */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-48 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  25+
                </div>
                <div className="text-gray-600 font-medium">
                  Scientifiques Experts
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  150+
                </div>
                <div className="text-gray-600 font-medium">
                  Équipements High-Tech
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  500M€
                </div>
                <div className="text-gray-600 font-medium">
                  Investissements R&D
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  50+
                </div>
                <div className="text-gray-600 font-medium">
                  Prix Internationaux
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contenu Principal - Onglets */}
        {activeTab === "scientists" ? (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 lg:px-48 md:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Notre Équipe de Scientifiques
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Des experts reconnus mondialement qui façonnent l'avenir de la
                  médecine
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {scientists.map((scientist, index) => (
                  <ScientistCard
                    key={index}
                    scientist={scientist}
                    onClick={handleScientistClick}
                  />
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 lg:px-48 md:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Nos Équipements de Pointe
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Technologies révolutionnaires pour la recherche et les soins
                  médicaux
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {equipment.map((item, index) => (
                  <EquipmentCard key={index} equipment={item} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-48 md:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Collaborez avec nos Experts
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Rejoignez notre écosystème d'innovation et participez aux
              découvertes qui transformeront la médecine de demain.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Nous Rejoindre
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Partenariats
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Navigation de retour */}
      <div className="bg-white border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 lg:px-48 md:px-8">
          <a
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </a>
        </div>
      </div>

      {/* Modal Scientifique */}
      <ScientistModal
        scientist={selectedScientist}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <Footer />
    </div>
  );
};

export default ScientistsPage;
