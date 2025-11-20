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
  ChevronRight,
  Play
} from "lucide-react";
import { useNavigate } from "react-router-dom";

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
    <div className="relative">
      {/* Main Video Display */}
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-2xl">
        <iframe
          className="absolute top-0 left-0 w-full h-full transition-opacity duration-500"
          src={`https://www.youtube.com/embed/${videos[currentVideo].id}?rel=0&modestbranding=1`}
          title={videos[currentVideo].title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Navigation Arrows */}
        <button
          onClick={prevVideo}
          className="absolute left-4 top-1/2 -translate-y-1/2 !bg-transparent text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextVideo}
          className="absolute right-4 top-1/2 -translate-y-1/2 !bg-transparent text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Video Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-500 to-transparent p-6 text-white">
          <h3 className="text-xl font-bold mb-2">
            {videos[currentVideo].title}
          </h3>
          <p className="text-gray-200">{videos[currentVideo].description}</p>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center gap-4 mt-6">
        {videos.map((video, index) => (
          <button
            key={video.id}
            onClick={() => setCurrentVideo(index)}
            className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
              index === currentVideo
                ? "ring-4 !ring-blue-500 shadow-xl scale-105"
                : "opacity-70 hover:opacity-100 hover:scale-105"
            }`}
          >
            <div className="w-32 h-18 !bg-gradient-to-br !from-blue-500 !to-green-500 flex items-center justify-center">
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
            </div>
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
