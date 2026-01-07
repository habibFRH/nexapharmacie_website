import React, { useState } from "react";
import {
  ArrowLeft,
  Heart,
  Shield,
  Users,
  Zap,
  Award,
  Target,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import images from nadpic
import img1 from "../assets/nadpic/1.png";
import img2 from "../assets/nadpic/2.png";
import img3 from "../assets/nadpic/3.png";
import img4 from "../assets/nadpic/4.png";
import img5 from "../assets/nadpic/5.png";
import img6 from "../assets/nadpic/6.png";
import img7 from "../assets/nadpic/7.png";


// Footer Component
const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 px-4">
    <div className="max-w-6xl mx-auto text-center">
      <p>&copy; 2024 Health Revived. All rights reserved.</p>
    </div>
  </footer>
);

// Video Carousel Component
const VideoCarousel: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    {
      id: "Qi0rNvJvA-U",
      title: "Healthcare Innovation",
      description:
        "Discover how we're transforming healthcare through innovation"
    },
    {
      id: "gakq02IgIsU",
      title: "Patient Care Excellence",
      description: "Experience our commitment to exceptional patient care"
    }
  ];

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="relative group">
      {/* Main Video Display */}
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white/50">
        <iframe
          className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000"
          src={`https://www.youtube.com/embed/${videos[currentVideo].id}?rel=0&modestbranding=1&autoplay=0`}
          title={videos[currentVideo].title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Navigation Arrows - Sleeker design */}
        <button
          onClick={prevVideo}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 backdrop-blur-md opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 z-20 border border-white/20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextVideo}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 backdrop-blur-md opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 z-20 border border-white/20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Video Info Overlay - Modern Glassmorphism */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent p-10 text-white pointer-events-none">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold mb-3 tracking-tight">
              {videos[currentVideo].title}
            </h3>
            <p className="text-blue-100/90 text-lg leading-relaxed">
              {videos[currentVideo].description}
            </p>
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation - Minimalist dots/thumbnails */}
      <div className="flex justify-center gap-3 mt-8">
        {videos.map((video, index) => (
          <button
            key={video.id}
            onClick={() => setCurrentVideo(index)}
            className={`group/thumb relative h-2 transition-all duration-500 rounded-full ${index === currentVideo
              ? "w-16 !bg-blue-600 shadow-lg shadow-blue-500/30"
              : "w-4 !bg-gray-300 hover:!bg-blue-400"
              }`}
          >
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 scale-0 group-hover/thumb:scale-100 transition-transform duration-300 bg-gray-800 text-white text-xs py-1 px-3 rounded whitespace-nowrap hidden md:block">
              {video.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};


const HealthRevivedPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white py-20 px-4 lg:px-48 md:px-8">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Home <span className="text-green-300"></span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              Transforming healthcare through innovation, compassion, and
              cutting-edge technology
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <Heart className="w-5 h-5" />
                <span className="font-semibold">Compassionate Care</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">Advanced Technology</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 px-4 lg:px-48 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              At Health Revived, we believe that everyone deserves access to
              exceptional healthcare. Our mission is to revolutionize the
              medical field by combining state-of-the-art technology with
              personalized patient care, ensuring that health and wellness are
              not just restored, but truly revived for generations to come.
            </p>

            {/* Video Embed */}
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/ilxKxDKvqjg"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Visual Journey Section */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
              <div className="md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
                  Un Héritage de <span className="text-blue-600">Confiance</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Depuis nos débuts, nous nous efforçons de repousser les limites de la science pour offrir des solutions de santé innovantes. Chaque image raconte une histoire d'engagement, de précision et de soin.
                </p>
                <div className="flex gap-4">
                  <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
                  <div className="h-1 w-10 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500">
                    <img src={img1} alt="Heritage 1" className="w-full h-48 object-cover" />
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500">
                    <img src={img2} alt="Heritage 2" className="w-full h-64 object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500">
                    <img src={img3} alt="Heritage 3" className="w-full h-64 object-cover" />
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500">
                    <img src={img4} alt="Heritage 4" className="w-full h-48 object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal Scroll Gallery */}
            <div className="relative mt-20">
              <div className="flex gap-8 overflow-x-auto pb-12 scrollbar-hide snap-x px-4 -mx-4">
                {[img5, img6, img7].map((img, idx) => (
                  <div key={idx} className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center">
                    <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[16/10] bg-gray-100 border-8 border-white">
                      <img
                        src={img}
                        alt={`Gallery ${idx + 5}`}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10 transform translate-y-4 group-hover:translate-y-0 text-white">
                        <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-2">Standard International</span>
                        <h4 className="text-3xl font-bold mb-2">Innovation & Qualité</h4>
                        <p className="text-blue-100/90 leading-relaxed font-light">L'excellence pharmaceutique au service de l'Algérie.</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Simple hint for mobile */}
              <div className="flex justify-center gap-2 md:hidden">
                <div className="w-8 h-1 bg-blue-600 rounded-full"></div>
                <div className="w-2 h-1 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-1 bg-gray-300 rounded-full"></div>
              </div>
            </div>

          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 px-4 lg:px-48 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                  EXCELLER PAR LA QUALITé
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Every patient is treated with empathy, respect, and
                  personalized care that addresses not just symptoms, but the
                  whole person.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                  NOS ENGAGEMENTS
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  We maintain the highest standards in medical care,
                  continuously improving our services through research and
                  innovation.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                  NOS PERSPECTIVES
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Building strong relationships with patients, families, and
                  communities to create a supportive healthcare ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Videos Section */}
        <section className="py-16 bg-gradient-to-r from-slate-50 to-gray-100 px-4 lg:px-48 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Featured Videos
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Explore our latest insights and patient success stories through
              our featured video content
            </p>
            <VideoCarousel />
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4 lg:px-48 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                <Target className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3">Precision Medicine</h3>
                <p className="text-blue-100">
                  Personalized treatments based on individual genetic profiles
                  and health data.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                <Zap className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3">Advanced Diagnostics</h3>
                <p className="text-green-100">
                  State-of-the-art imaging and laboratory services for accurate
                  diagnosis.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                <Heart className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3">Holistic Care</h3>
                <p className="text-purple-100">
                  Comprehensive approach addressing physical, mental, and
                  emotional well-being.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                <Shield className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3">Preventive Care</h3>
                <p className="text-orange-100">
                  Proactive health programs to prevent illness and maintain
                  wellness.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                <Users className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3">Patient Support</h3>
                <p className="text-teal-100">
                  24/7 care coordination and patient advocacy services.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                <Award className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3">Research Excellence</h3>
                <p className="text-indigo-100">
                  Leading clinical trials and breakthrough medical research.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 lg:px-48 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Impact by Numbers
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-lg opacity-90">Lives Transformed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-lg opacity-90">Patient Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-lg opacity-90">Care Availability</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-lg opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-8 px-4 lg:px-48 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <button className="!bg-white inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300 group" onClick={() => navigate("/")}>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HealthRevivedPage;
