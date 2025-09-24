import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  Shield,
  Users,
  Zap,
  Award,
  Target
} from "lucide-react";
import Footer from "../components/Footer";

const HealthRevivedPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white py-20 px-4 lg:px-48 md:px-8">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Health <span className="text-green-300">Revived</span>
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
                  Compassion
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
                  Excellence
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
                  Community
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Building strong relationships with patients, families, and
                  communities to create a supportive healthcare ecosystem.
                </p>
              </div>
            </div>
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

        {/* Call to Action */}
        {/* <section className="py-16 px-4 lg:px-48 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Ready to Revive Your Health?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Take the first step towards a healthier, more vibrant life. Our
              team of experts is ready to provide you with the personalized care
              you deserve.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
                Schedule Consultation
              </button>
              <button className="bg-transparent hover:bg-gray-50 text-gray-800 border-2 border-gray-300 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section> */}

        {/* Back to Home */}
        <section className="py-8 px-4 lg:px-48 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HealthRevivedPage;
