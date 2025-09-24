import React, { useState, useEffect } from "react";

const DiscoverStories: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    // Trigger title animation on component mount
    const titleTimer = setTimeout(() => setIsVisible(true), 100);

    // Stagger card animations
    const cardTimers = [
      setTimeout(() => setVisibleCards(prev => [true, prev[1], prev[2]]), 400),
      setTimeout(() => setVisibleCards(prev => [prev[0], true, prev[2]]), 600),
      setTimeout(() => setVisibleCards(prev => [prev[0], prev[1], true]), 800),
    ];

    return () => {
      clearTimeout(titleTimer);
      cardTimers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <section
      id="stories"
      className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-indigo-100 rounded-full opacity-30 animate-bounce"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Animated Title */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible
              ? "transform translate-y-0 opacity-100"
              : "transform translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-blue-800 bg-clip-text text-transparent mb-6 animate-pulse">
            Discover Great Stories About Science
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mb-6 rounded-full animate-pulse"></div>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ease-out ${
            isVisible
              ? "transform translate-y-0 opacity-100"
              : "transform translate-y-8 opacity-0"
          }`}
        >
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            Dive into inspiring stories and groundbreaking discoveries shaping
            the future of science and technology.
          </p>
        </div>

        {/* Animated Stories Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Story Card 1 */}
          <div
            className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${
              visibleCards[0]
                ? "transform translate-y-0 opacity-100 scale-100"
                : "transform translate-y-12 opacity-0 scale-95"
            } hover:-translate-y-2 hover:scale-105`}
          >
            <div className="relative overflow-hidden">
              <img
                src="https://thumbs.dreamstime.com/b/science-lab-chemicals-14262437.jpg"
                alt="Story 1"
                className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-8 text-left">
              <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mb-4 rounded-full group-hover:w-16 transition-all duration-300"></div>
              <h3 className="text-2xl font-bold text-indigo-600 mb-3 group-hover:text-indigo-700 transition-colors duration-300">
                The Future of Space Exploration
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                How new technologies are pushing the boundaries of human
                exploration beyond Earth.
              </p>
            </div>
          </div>

          {/* Story Card 2 */}
          <div
            className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${
              visibleCards[1]
                ? "transform translate-y-0 opacity-100 scale-100"
                : "transform translate-y-12 opacity-0 scale-95"
            } hover:-translate-y-2 hover:scale-105`}
          >
            <div className="relative overflow-hidden">
              <img
                src="https://www.aamc.org/sites/default/files/Advances_1200x666.jpg"
                alt="Story 2"
                className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-8 text-left">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mb-4 rounded-full group-hover:w-16 transition-all duration-300"></div>
              <h3 className="text-2xl font-bold text-indigo-600 mb-3 group-hover:text-indigo-700 transition-colors duration-300">
                Breakthroughs in Medical Science
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Discover the latest innovations improving health and extending
                human life.
              </p>
            </div>
          </div>

          {/* Story Card 3 */}
          <div
            className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${
              visibleCards[2]
                ? "transform translate-y-0 opacity-100 scale-100"
                : "transform translate-y-12 opacity-0 scale-95"
            } hover:-translate-y-2 hover:scale-105`}
          >
            <div className="relative overflow-hidden">
              <img
                src="https://builtin.com/sites/www.builtin.com/files/2022-07/future-artificial-intelligence.png"
                alt="Story 3"
                className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-8 text-left">
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-4 rounded-full group-hover:w-16 transition-all duration-300"></div>
              <h3 className="text-2xl font-bold text-indigo-600 mb-3 group-hover:text-indigo-700 transition-colors duration-300">
                AI and the Future of Research
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                How artificial intelligence is transforming scientific research
                and discovery.
              </p>
            </div>
          </div>
        </div>

        {/* Animated CTA */}
        <div
          className={`mt-16 transition-all duration-1000 delay-1000 ease-out ${
            isVisible
              ? "transform translate-y-0 opacity-100"
              : "transform translate-y-8 opacity-0"
          }`}
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
            <span>Explore All Stories</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5-5 5M6 12h12"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverStories;