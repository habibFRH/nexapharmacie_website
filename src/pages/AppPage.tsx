import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Smartphone,
  Download,
  Star,
  Shield,
  Bell,
  Calendar,
  Activity,
  Users,
  Camera,
  MapPin
} from "lucide-react";
import Footer from "../components/Footer";

const AppPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 text-white py-20 px-4 lg:px-48 md:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Animated background elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Découvrez <span className="text-yellow-300">NOTRE APPLI</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
                  Votre santé au bout des doigts. Une application
                  révolutionnaire pour transformer votre expérience de soins de
                  santé.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <Star className="w-5 h-5 text-yellow-300" />
                    <span className="font-semibold">4.9/5 étoiles</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <Download className="w-5 h-5" />
                    <span className="font-semibold">100K+ téléchargements</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl">
                    <Smartphone className="w-6 h-6" />
                    App Store
                  </button>
                  <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl">
                    <Download className="w-6 h-6" />
                    Google Play
                  </button>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="relative">
                <div className="w-64 h-96 mx-auto bg-gray-900 rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-b from-blue-400 to-blue-500 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-full"></div>
                    <div className="p-6 pt-12">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Activity className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-white font-bold text-lg">
                          HealthApp
                        </h3>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-white" />
                            <span className="text-white text-sm">
                              Prochain RDV
                            </span>
                          </div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="flex items-center gap-3">
                            <Bell className="w-5 h-5 text-white" />
                            <span className="text-white text-sm">
                              Rappel médication
                            </span>
                          </div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="flex items-center gap-3">
                            <Activity className="w-5 h-5 text-white" />
                            <span className="text-white text-sm">
                              Suivi santé
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 lg:px-48 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Fonctionnalités Principales
              </h2>
              <p className="text-xl text-gray-600">
                Tout ce dont vous avez besoin pour gérer votre santé
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Prise de Rendez-vous
                </h3>
                <p className="text-gray-600">
                  Planifiez facilement vos consultations avec nos professionnels
                  de santé en quelques clics.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Activity className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Suivi Santé
                </h3>
                <p className="text-gray-600">
                  Surveillez vos paramètres vitaux et suivez l'évolution de
                  votre état de santé en temps réel.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Bell className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Rappels Intelligents
                </h3>
                <p className="text-gray-600">
                  Ne manquez jamais vos médicaments ou rendez-vous grâce à nos
                  notifications personnalisées.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                  <Camera className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Téléconsultation
                </h3>
                <p className="text-gray-600">
                  Consultez vos médecins à distance via appel vidéo sécurisé
                  depuis votre domicile.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Données Sécurisées
                </h3>
                <p className="text-gray-600">
                  Vos informations médicales sont protégées par un chiffrement
                  de niveau bancaire.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Urgences
                </h3>
                <p className="text-gray-600">
                  Accès rapide aux services d'urgence et localisation des
                  centres médicaux les plus proches.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 px-4 lg:px-48 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Interface Intuitive
              </h2>
              <p className="text-xl text-gray-600">
                Découvrez notre design moderne et facile à utiliser
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <div key={index} className="bg-white rounded-2xl p-4 shadow-xl">
                  <div className="w-full h-96 bg-gradient-to-b from-blue-400 to-blue-500 rounded-xl relative overflow-hidden">
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-800 rounded-full"></div>
                    <div className="p-6 pt-10">
                      <div className="text-center text-white">
                        <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                          {index === 1 && <Activity className="w-6 h-6" />}
                          {index === 2 && <Calendar className="w-6 h-6" />}
                          {index === 3 && <Bell className="w-6 h-6" />}
                        </div>
                        <h4 className="font-bold mb-2">
                          {index === 1 && "Dashboard"}
                          {index === 2 && "Rendez-vous"}
                          {index === 3 && "Notifications"}
                        </h4>
                      </div>
                      <div className="space-y-3 mt-6">
                        {[1, 2, 3, 4].map((item) => (
                          <div
                            key={item}
                            className="bg-white/20 rounded-lg h-8"
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 lg:px-48 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Ce que disent nos utilisateurs
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Une application révolutionnaire ! Je peux maintenant suivre
                  ma santé et prendre mes rendez-vous en toute simplicité."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Marie L.</p>
                    <p className="text-sm text-gray-500">
                      Utilisatrice depuis 6 mois
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Interface intuitive et fonctionnalités complètes. C'est
                  exactement ce dont j'avais besoin pour gérer ma santé."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Jean P.</p>
                    <p className="text-sm text-gray-500">
                      Utilisateur depuis 1 an
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 text-white px-4 lg:px-48 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Prêt à transformer votre santé ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Téléchargez notre application dès maintenant et rejoignez plus de
              100 000 utilisateurs satisfaits.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl">
                <Smartphone className="w-6 h-6" />
                Télécharger sur App Store
              </button>
              <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl">
                <Download className="w-6 h-6" />
                Télécharger sur Google Play
              </button>
            </div>
            <div className="mt-8 text-center">
              <p className="text-blue-200">
                Disponible sur iOS 12+ et Android 8+
              </p>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-8 px-4 lg:px-48 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300 group"
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

export default AppPage;
