import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import Footer from "../components/Footer";

// Import images from nadpic
import img8 from "../assets/nadpic/8.png";
import img9 from "../assets/nadpic/9.png";
import img10 from "../assets/nadpic/10.png";
import img11 from "../assets/nadpic/11.png";
import img12 from "../assets/nadpic/12.png";
import img13 from "../assets/nadpic/13.png";
import img14 from "../assets/nadpic/14.png";


const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-slate-800 via-gray-900 to-black text-white py-20 px-4 lg:px-48 md:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/20"></div>

          {/* Animated particles */}
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

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Contactez-<span className="text-cyan-400">Nous</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              Une question ? Un projet ? Parlons-en. Nous sommes toujours ravis
              d’échanger avec vous.
            </p>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
                Nos <span className="text-cyan-500">Installations</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                À la pointe de la technologie, nos laboratoires et centres de production garantissent une excellence sans compromis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
              <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl group shadow-xl">
                <img src={img8} alt="Facility 8" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center text-white">
                  <p className="text-xl font-bold leading-tight">Laboratoires de Haute Précision</p>
                </div>
              </div>
              <div className="md:row-span-1 relative overflow-hidden rounded-3xl group shadow-lg">
                <img src={img9} alt="Facility 9" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="md:row-span-2 relative overflow-hidden rounded-3xl group shadow-lg">
                <img src={img10} alt="Facility 10" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="md:col-span-1 relative overflow-hidden rounded-3xl group shadow-lg">
                <img src={img11} alt="Facility 11" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="md:col-span-2 relative overflow-hidden rounded-3xl group shadow-lg">
                <img src={img12} alt="Facility 12" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-cyan-600/20"></div>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-3xl border border-cyan-100 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovation & Qualité</h3>
                <p className="text-gray-600 leading-relaxed italic">
                  "Notre engagement envers l'excellence se reflète dans chaque étape de notre processus de fabrication, utilisant les technologies les plus avancées pour assurer la sécurité de nos patients."
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl shadow-md h-40">
                  <img src={img13} alt="Facility 13" className="w-full h-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-md h-40">
                  <img src={img14} alt="Facility 14" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4 lg:px-48 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Nos Coordonnées
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6">
                <Mail className="w-10 h-10 text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-700">contact@exemple.com</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                <Phone className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
                <p className="text-gray-700">+213 555 123 456</p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6">
                <MapPin className="w-10 h-10 text-gray-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Adresse</h3>
                <p className="text-gray-700">123 Rue Exemple, Alger, Algérie</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-gradient-to-r from-gray-50 to-cyan-50 px-4 lg:px-48 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Envoyez-nous un message
            </h2>
            <form className="space-y-6 bg-white rounded-xl shadow-lg p-8">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  className="w-full text-black px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full text-black px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  className="w-full text-black px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
                  rows={5}
                  placeholder="Écrivez votre message ici..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-black flex items-center justify-center gap-2 !bg-cyan-600 font-semibold py-3 rounded-lg hover:bg-cyan-700 transition-all"
              >
                <Send className="w-5 h-5" />
                Envoyer
              </button>
            </form>
          </div>
        </section>

        {/* Future Section (optional inspiration message) */}
        <section className="py-16 bg-gradient-to-r from-slate-800 via-gray-900 to-black text-white px-4 lg:px-48 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="w-16 h-16 text-cyan-400 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold mb-6">Restons connectés</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Nous croyons en la collaboration et en la communication. N’hésitez
              pas à nous écrire, chaque message compte.
            </p>
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

export default ContactPage;
