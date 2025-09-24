import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Counter: React.FC<{ target: number; suffix?: string }> = ({
  target,
  suffix = "",
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Ease out function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * target);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target]);

  return (
    <motion.span>
      {count} {suffix}
    </motion.span>
  );
};

const ForInvestors: React.FC = () => {
  const stats = [
    { value: 500, suffix: "+", label: "Active Investors", color: "text-blue-600" },
    { value: 50, suffix: "M+", label: "Capital Raised", color: "text-green-600" },
    { value: 25, suffix: "%", label: "Average ROI", color: "text-purple-600" },
    { value: 5, suffix: "+", label: "Years Experience", color: "text-indigo-600" },
  ];

  return (
    <section
      id="investors"
      className="w-full h-screen bg-gradient-to-br from-blue-500 via-blue-300 to-indigo-100 py-24 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-200/20 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Investment Opportunities
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6">
            For Investors
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            Join us on our journey of innovation and growth. We provide secure,
            transparent, and profitable opportunities for investors worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {/* Feature Cards */}
          {[
            {
              title: "Transparency",
              text: "Full access to reports, metrics, and insights so you always know where your investment stands with real-time data.",
              gradient: "from-blue-500 to-blue-600",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              )
            },
            {
              title: "Growth Potential",
              text: "Backed by technology and driven by results, we aim for long-term sustainable growth with proven strategies.",
              gradient: "from-green-500 to-emerald-600",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              )
            },
            {
              title: "Security",
              text: "Your investments are protected with top-notch security and compliance measures, ensuring complete peace of mind.",
              gradient: "from-purple-500 to-indigo-600",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              )
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="group bg-white/80 backdrop-blur-sm border border-white/50 shadow-xl rounded-2xl p-8"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                delay: i * 0.2
              }}
              viewport={{ once: true }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-3xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 120,
                  delay: i * 0.2
                }}
                viewport={{ once: true }}
              >
                <div
                  className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}
                >
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <span>Become an Investor</span>
              <svg
                className="w-5 h-5"
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
            <button className="px-10 py-4 !bg-white/80 backdrop-blur-sm border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
              Download Prospectus
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Ready to invest? Contact our team for personalized consultation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForInvestors;
