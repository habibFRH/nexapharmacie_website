import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Microscope,
  FlaskConical,
  Dna,
  Brain,
  Heart,
  Pill
} from "lucide-react";

// Mock components for demonstration

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 px-4 lg:px-48 md:px-8">
    <div className="text-center">
      <p>&copy; 2024 MedTech Solutions. Tous droits réservés.</p>
    </div>
  </footer>
);

const ResearchCard = ({ icon: Icon, title, description, status, progress }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
    <div className="flex items-start space-x-4">
      <div className="bg-gradient-to-r from-blue-500 to-green-500 p-3 rounded-lg">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              status === "En cours"
                ? "bg-blue-100 text-blue-800"
                : status === "Terminé"
                ? "bg-green-100 text-green-800"
                : "bg-orange-100 text-orange-800"
            }`}
          >
            {status}
          </span>
          <span className="text-sm text-gray-500">{progress}</span>
        </div>
      </div>
    </div>
  </div>
);

const ResearchPage: React.FC = () => {
  const researchProjects = [
    {
      icon: Brain,
      title: "Intelligence Artificielle en Diagnostic",
      description:
        "Développement d'algorithmes d'IA pour améliorer la précision des diagnostics médicaux et réduire les erreurs de diagnostic.",
      status: "En cours",
      progress: "75% complété"
    },
    {
      icon: Dna,
      title: "Thérapie Génique Avancée",
      description:
        "Recherche sur les techniques de modification génétique pour traiter les maladies héréditaires et les cancers.",
      status: "Phase II",
      progress: "60% complété"
    },
    {
      icon: Heart,
      title: "Cardiologie Régénérative",
      description:
        "Études sur la régénération des tissus cardiaques endommagés par des cellules souches et la bioingénierie.",
      status: "En cours",
      progress: "45% complété"
    },
    {
      icon: Pill,
      title: "Médicaments Personnalisés",
      description:
        "Développement de traitements pharmaceutiques adaptés au profil génétique individuel de chaque patient.",
      status: "Terminé",
      progress: "100% complété"
    },
    {
      icon: Microscope,
      title: "Nanotechnologie Médicale",
      description:
        "Application des nanotechnologies pour la livraison ciblée de médicaments et l'imagerie médicale de haute précision.",
      status: "En cours",
      progress: "30% complété"
    },
    {
      icon: FlaskConical,
      title: "Biomarqueurs Innovants",
      description:
        "Identification et validation de nouveaux biomarqueurs pour le dépistage précoce des maladies chroniques.",
      status: "Phase I",
      progress: "20% complété"
    }
  ];

  const statistiques = [
    { label: "Projets Actifs", value: "12", color: "text-blue-600" },
    { label: "Publications", value: "89", color: "text-green-600" },
    { label: "Brevets Déposés", value: "23", color: "text-purple-600" },
    { label: "Collaborations", value: "45", color: "text-orange-600" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-48 md:px-8">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-6">
                Nos <span className="text-yellow-300">RECHERCHES</span>
              </h1>
              <p className="text-xl leading-relaxed mb-8">
                Explorez nos recherches révolutionnaires en sciences médicales,
                axées sur des traitements innovants, des méthodes de diagnostic
                avancées et l'amélioration de la qualité de vie des patients à
                travers le monde.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="!bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Découvrir nos projets
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:!bg-white hover:text-blue-600 transition-colors">
                  Publications récentes
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Statistiques */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-48 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statistiques.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Domaines de Recherche */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-48 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Nos Domaines de Recherche
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nos équipes multidisciplinaires travaillent sur des projets
                innovants qui façonnent l'avenir de la médecine
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {researchProjects.map((project, index) => (
                <ResearchCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Approche Scientifique */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 lg:px-48 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Notre Approche Scientifique
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 text-white p-2 rounded-lg">
                      <Microscope className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Recherche Fondamentale
                      </h3>
                      <p className="text-gray-600">
                        Compréhension approfondie des mécanismes biologiques
                        pour développer des solutions innovantes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-500 text-white p-2 rounded-lg">
                      <FlaskConical className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Recherche Appliquée
                      </h3>
                      <p className="text-gray-600">
                        Translation des découvertes scientifiques en
                        applications pratiques pour les patients.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-500 text-white p-2 rounded-lg">
                      <Brain className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Innovation Technologique
                      </h3>
                      <p className="text-gray-600">
                        Intégration des dernières technologies pour accélérer la
                        recherche et améliorer les résultats.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Collaborations Internationales
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium text-gray-800">
                      Universités Partenaires
                    </h4>
                    <p className="text-gray-600 text-sm">
                      15 universités de recherche de premier plan
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium text-gray-800">
                      Instituts de Recherche
                    </h4>
                    <p className="text-gray-600 text-sm">
                      8 instituts spécialisés en biotechnologie
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium text-gray-800">
                      Partenaires Industriels
                    </h4>
                    <p className="text-gray-600 text-sm">
                      22 entreprises pharmaceutiques et technologiques
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-48 md:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Rejoignez Notre Mission</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Participez à l'avenir de la médecine en collaborant avec nos
              équipes de recherche ou en soutenant nos projets innovants.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="!bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:!bg-gray-100 transition-colors">
                Nous Contacter
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:!bg-white hover:text-blue-600 transition-colors">
                En Savoir Plus
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Navigation de retour */}
      <div className="bg-white border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 lg:px-48 md:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ResearchPage;
