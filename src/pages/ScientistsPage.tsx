/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useNavigate } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 px-4 lg:px-48 md:px-8">
    <div className="text-center">
      <p>&copy; 2024 NADPHARMADIC. Tous droits réservés.</p>
    </div>
  </footer>
);

const ScientistCard = ({
  scientist,
  onClick
}: {
  scientist: any;
  onClick: any;
}) => (
  <div
    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 cursor-pointer transform hover:-translate-y-1"
    onClick={() => onClick(scientist)}
  >
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-600 rounded-full flex items-center justify-center text-white text-lg font-bold">
        {scientist.name
          .split(" ")
          .map((n: string) => n[0])
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

    <div className="bg-blue-50 p-4 rounded-lg mb-4">
      <p className="text-blue-800 text-sm italic">"{scientist.quote}"</p>
    </div>

    <p className="text-gray-600 mb-4 text-sm">{scientist.shortBio}</p>

    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-yellow-500">
          <Star className="w-4 h-4 mr-1 fill-current" />
          <span className="text-sm font-medium">{scientist.rating}</span>
        </div>
        <span className="text-sm text-gray-500">
          {scientist.experience} ans d'expérience
        </span>
      </div>
      <div className="flex space-x-2">
        <Mail className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
        <Linkedin className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
      </div>
    </div>
  </div>
);

const EquipmentCard = ({ equipment }: { equipment: any }) => (
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

const ScientistModal = ({
  scientist,
  isOpen,
  onClose
}: {
  scientist: any;
  isOpen: any;
  onClose: any;
}) => {
  if (!isOpen || !scientist) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {scientist.name
                  .split(" ")
                  .map((n: string) => n[0])
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

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Citation
            </h3>
            <p className="text-blue-800 italic text-lg">"{scientist.quote}"</p>
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
                {scientist.projects}
              </div>
              <div className="text-gray-600">Projets dirigés</div>
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
                Domaines d'expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {scientist.specializations.map(
                  (spec: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {spec}
                    </span>
                  )
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Réalisations Principales
              </h3>
              <ul className="space-y-2">
                {scientist.achievements.map(
                  (achievement: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Award className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">
                        {achievement}
                      </span>
                    </li>
                  )
                )}
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
  const [activeTab] = useState("scientists");
  const navigate = useNavigate();

  const scientists = [
    {
      name: "Mr Nadir BENDJABEUR",
      title: "PDG",
      location: "Alger, Algérie",
      quote:
        "Aujourd'hui, nous avons une position de challenger et une ambition d'être leader sur plusieurs pôles thérapeutiques, afin d'être la fierté de l'industrie pharmaceutique Algérienne.",
      shortBio:
        "Directeur Général visionnaire de NADPHARMADIC, pionnier de l'industrie pharmaceutique algérienne avec plus de 20 ans d'expérience dans le secteur.",
      fullBio:
        "Mr Nadir BENDJABEUR dirige NADPHARMADIC avec une vision stratégique axée sur l'excellence et l'innovation. Sous sa direction, l'entreprise s'est positionnée comme un acteur majeur de l'industrie pharmaceutique algérienne, développant des solutions thérapeutiques de haute qualité pour répondre aux besoins de santé publique.",
      rating: 4.9,
      experience: 25,
      projects: 50,
      awards: 12,
      specializations: [
        "Direction Stratégique",
        "Industrie Pharmaceutique",
        "Innovation Thérapeutique",
        "Management"
      ],
      achievements: [
        "Transformation de NADPHARMADIC en leader pharmaceutique algérien",
        "Développement de partenariats internationaux stratégiques",
        "Lancement de plus de 30 produits pharmaceutiques innovants",
        "Prix du dirigeant de l'année dans l'industrie pharmaceutique"
      ]
    },
    {
      name: "Mme Safia BENDJABEUR",
      title: "Vice PDG",
      location: "Alger, Algérie",
      quote:
        "Dès aujourd'hui, NADPHARMADIC évolue et se modernise pour continuer à anticiper et à répondre aux besoins des professionnels de la santé et du patient.",
      shortBio:
        "Vice-Présidente Directrice Générale de NADPHARMADIC, experte en stratégie d'entreprise et modernisation des processus pharmaceutiques.",
      fullBio:
        "Mme Safia BENDJABEUR pilote la transformation et la modernisation de NADPHARMADIC. Son expertise en gestion stratégique et sa vision prospective permettent à l'entreprise d'anticiper les évolutions du marché pharmaceutique et de répondre efficacement aux besoins émergents des professionnels de santé.",
      rating: 4.8,
      experience: 20,
      projects: 40,
      awards: 8,
      specializations: [
        "Stratégie d'Entreprise",
        "Transformation Digitale",
        "Innovation Pharmaceutique",
        "Relations Professionnels de Santé"
      ],
      achievements: [
        "Modernisation complète des processus de production",
        "Mise en place de systèmes de qualité internationale",
        "Développement de partenariats avec les professionnels de santé",
        "Certification ISO et standards pharmaceutiques européens"
      ]
    },
    {
      name: "Mr Med Lamine TORCHI",
      title: "Superviseur National Commercial",
      location: "Alger, Algérie",
      quote:
        "Notre mission est d'être au service des patients, des professionnels de la santé, et de contribuer à l'évolution de l'économie du pays.",
      shortBio:
        "Responsable commercial national avec une expertise approfondie dans la distribution pharmaceutique et les relations avec les professionnels de santé.",
      fullBio:
        "Mr Med Lamine TORCHI supervise l'ensemble des activités commerciales nationales de NADPHARMADIC. Sa connaissance approfondie du marché pharmaceutique algérien et son réseau étendu de professionnels de santé permettent à l'entreprise de maintenir sa position de leader et de contribuer activement au développement économique du secteur.",
      rating: 4.7,
      experience: 18,
      projects: 35,
      awards: 6,
      specializations: [
        "Commerce Pharmaceutique",
        "Distribution Nationale",
        "Relations Client",
        "Développement Commercial"
      ],
      achievements: [
        "Expansion du réseau commercial sur tout le territoire national",
        "Augmentation de 40% du chiffre d'affaires en 3 ans",
        "Mise en place d'un système de distribution moderne et efficace",
        "Formation de plus de 100 délégués commerciaux"
      ]
    },
    {
      name: "Mr [Directeur de Site]",
      title: "Directeur de Site",
      location: "Site de production, Algérie",
      quote:
        "Notre savoir-faire, l'engagement de nos collaborateurs et la confiance que nous témoignent nos clients sont au cœur de notre réussite.",
      shortBio:
        "Directeur de site de production expérimenté, garant de la qualité et de l'efficacité des processus de fabrication pharmaceutique.",
      fullBio:
        "Le Directeur de Site supervise l'ensemble des opérations de production pharmaceutique, veillant au respect des standards de qualité les plus élevés. Son expertise en gestion industrielle et son engagement pour l'excellence opérationnelle garantissent la production de médicaments sûrs et efficaces.",
      rating: 4.8,
      experience: 22,
      projects: 30,
      awards: 10,
      specializations: [
        "Gestion Industrielle",
        "Qualité Pharmaceutique",
        "Optimisation des Processus",
        "Management d'Équipe"
      ],
      achievements: [
        "Certification GMP (Good Manufacturing Practice)",
        "Réduction de 30% des coûts de production tout en maintenant la qualité",
        "Mise en place de systèmes de contrôle qualité automatisés",
        "Formation de plus de 200 techniciens de production"
      ]
    },
    {
      name: "Mme [Directrice Technique]",
      title: "Directrice Technique",
      location: "Laboratoires NADPHARMADIC, Algérie",
      quote:
        "Notre devise est d'exceller par la qualité, et nous devons continuer sur ce chemin.",
      shortBio:
        "Directrice Technique experte en développement pharmaceutique et assurance qualité, garante de l'excellence technique de tous nos produits.",
      fullBio:
        "La Directrice Technique dirige l'ensemble des activités de recherche et développement, ainsi que le contrôle qualité. Son expertise scientifique et son engagement pour l'excellence garantissent que tous les produits NADPHARMADIC respectent les standards internationaux les plus exigeants.",
      rating: 4.9,
      experience: 19,
      projects: 45,
      awards: 9,
      specializations: [
        "Recherche & Développement",
        "Contrôle Qualité",
        "Affaires Réglementaires",
        "Innovation Pharmaceutique"
      ],
      achievements: [
        "Développement de 25 nouvelles formulations pharmaceutiques",
        "Obtention d'autorisations de mise sur le marché pour 40 produits",
        "Mise en place de laboratoires de R&D aux standards internationaux",
        "Publication de recherches dans des revues pharmaceutiques reconnues"
      ]
    }
  ];

  const equipment = [
    {
      name: "Ligne de Production Pharmaceutique Automatisée",
      description:
        "Système de production moderne avec contrôle qualité intégré pour la fabrication de comprimés et gélules.",
      icon: Zap,
      status: "Opérationnel",
      year: "2024",
      precision: "±0.1mg"
    },
    {
      name: "Laboratoire de Contrôle Qualité",
      description:
        "Équipements d'analyse physico-chimique et microbiologique pour garantir la conformité des produits.",
      icon: Microscope,
      status: "Opérationnel",
      year: "2023",
      precision: "99.9%"
    },
    {
      name: "Système de Conditionnement Stérile",
      description:
        "Installation de conditionnement en atmosphère contrôlée pour produits pharmaceutiques sensibles.",
      icon: Shield,
      status: "En service",
      year: "2024",
      precision: "Classe A"
    },
    {
      name: "Chromatographe HPLC",
      description:
        "Appareil de chromatographie liquide haute performance pour l'analyse des principes actifs.",
      icon: Database,
      status: "Opérationnel",
      year: "2023",
      precision: "0.01%"
    },
    {
      name: "Spectrophotomètre UV-Visible",
      description:
        "Équipement d'analyse spectroscopique pour le dosage des substances actives pharmaceutiques.",
      icon: Brain,
      status: "Opérationnel",
      year: "2024",
      precision: "±0.001nm"
    },
    {
      name: "Station de Pesée Analytique",
      description:
        "Balances de précision en atmosphère contrôlée pour la préparation des échantillons d'analyse.",
      icon: Stethoscope,
      status: "En service",
      year: "2023",
      precision: "±0.01mg"
    }
  ];

  const handleScientistClick = (scientist: React.SetStateAction<null>) => {
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
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-48 md:px-8">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-6">
                Notre <span className="text-yellow-300">ÉQUIPE</span> &
                Équipements de Pointe
              </h1>
              <p className="text-xl leading-relaxed mb-8">
                Découvrez l'équipe dirigeante de NADPHARMADIC et nos équipements
                pharmaceutiques de dernière génération qui garantissent
                l'excellence de nos produits et services.
              </p>
            </div>
          </div>
        </section>

        {/* Statistiques */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-48 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
                <div className="text-gray-600 font-medium">
                  Dirigeants Experts
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  25+
                </div>
                <div className="text-gray-600 font-medium">
                  Équipements Modernes
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  20+
                </div>
                <div className="text-gray-600 font-medium">
                  Années d'Expérience
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  100%
                </div>
                <div className="text-gray-600 font-medium">
                  Qualité Pharmaceutique
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
                  L'Équipe Dirigeante NADPHARMADIC
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Des leaders expérimentés qui façonnent l'avenir de l'industrie
                  pharmaceutique algérienne
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {scientists.map((scientist: any, index: number) => (
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
                  Nos Équipements Pharmaceutiques
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Technologies de pointe pour garantir la qualité et
                  l'efficacité de nos produits pharmaceutiques
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {equipment.map((item: any, index: number) => (
                  <EquipmentCard key={index} equipment={item} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-48 md:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              L'Excellence au Service de la Santé
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Notre équipe expérimentée et nos équipements de pointe
              garantissent la qualité pharmaceutique la plus élevée pour le
              bien-être des patients.
            </p>
          </div>
        </section>
      </main>

      <section className="py-16 px-4 lg:px-48 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Video Embed */}
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/watch?v=RLwrC0lS6Ek"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

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
