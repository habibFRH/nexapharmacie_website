import React, { useState, useEffect } from "react";

const SliderSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "This service transformed our business. The team is highly professional and supportive.",
      name: "Sarah Johnson",
      position: "CEO, Startup Inc.",
    },
    {
      id: 2,
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      text: "Highly recommend! Amazing experience and excellent customer service.",
      name: "David Brown",
      position: "Marketing Manager",
    },
    {
      id: 3,
      image: "https://randomuser.me/api/portraits/women/52.jpg",
      text: "Their innovative solutions helped us grow faster than we imagined.",
      name: "Emily Carter",
      position: "Product Designer",
    },
  ];

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 200);

    // Auto-advance slides
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(slideTimer);
    };
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="slider" className="w-full bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 py-20 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-32 right-16 w-16 h-16 bg-indigo-200 rounded-full opacity-30 animate-float-delay"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-purple-200 rounded-full opacity-25 animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-24 h-24 bg-pink-200 rounded-full opacity-20 animate-float-slow"></div>


      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Animated Header */}
        <div className={`transition-all duration-1000 ease-out mb-16 ${
          isVisible 
            ? 'transform translate-y-0 opacity-100' 
            : 'transform translate-y-8 opacity-0'
        }`}>
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4 animate-pulse">
            ✨ Client Testimonials
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4">
            What People Say About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Custom Slider */}
        <div className={`relative transition-all duration-1000 delay-300 ease-out ${
          isVisible 
            ? 'transform translate-y-0 opacity-100' 
            : 'transform translate-y-8 opacity-0'
        }`}>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            {/* Slides Container */}
            <div className="relative h-96 flex items-center justify-center">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 flex flex-col items-center justify-center p-12 transition-all duration-700 ease-in-out ${
                    currentSlide === index
                      ? 'opacity-100 transform translate-x-0 scale-100'
                      : index < currentSlide
                      ? 'opacity-0 transform -translate-x-full scale-95'
                      : 'opacity-0 transform translate-x-full scale-95'
                  }`}
                >
                  {/* Profile Image with Animation */}
                  <div className="relative mb-8">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1 animate-spin-slow">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Quote with Animation */}
                  <div className="relative mb-8 max-w-2xl">
                    <svg className="absolute -top-4 -left-4 w-8 h-8 text-blue-300 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                    <p className="text-xl text-gray-700 italic leading-relaxed font-medium">
                      "{testimonial.text}"
                    </p>
                    <svg className="absolute -bottom-4 -right-4 w-8 h-8 text-blue-300 opacity-50 rotate-180" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>

                  {/* Author Info */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{testimonial.name}</h3>
                    <p className="text-blue-600 font-semibold">{testimonial.position}</p>
                  </div>

                  {/* Star Rating */}
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => goToSlide((currentSlide - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 !bg-gray-300 hover:!bg-gray-50 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => goToSlide((currentSlide + 1) % testimonials.length)}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 !bg-gray-300 hover:!bg-gray-50 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2 animate-pulse">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2 animate-pulse">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2 animate-pulse">98%</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;