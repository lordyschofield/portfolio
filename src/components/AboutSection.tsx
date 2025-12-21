import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Globe, Zap } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Expertise",
      description: "Vue.js with Vuetify, Vue Router, and Vuex for robust state management",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Mastery",
      description: "Laravel framework with RESTful APIs and database optimization",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full Stack Integration",
      description: "Seamless integration between frontend and backend technologies",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Focus",
      description: "Optimized applications with modern development practices",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl mx-4 sm:mx-6 lg:mx-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl text-center !text-center" style={{ textAlign: 'center', margin: '0 auto', width: '100%', marginTop: '20px' }}>
            Focused on creating reliable and engaging web experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center" style={{ padding: '10px' }}>
          {/* Left Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20" style={{ padding: '10px', marginTop: '20px' }}>
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  With over three years in full-stack web development, I've specialized in creating
                  scalable and user-friendly applications using modern technologies.
                </p>
                <p>
                  My expertise spans the entire development lifecycle, from conceptualizing ideas
                  to deploying production-ready applications. I'm passionate about writing clean,
                  maintainable code and staying up-to-date with the latest industry trends.
                </p>
                <p>
                  Currently focusing on Laravel for robust backend solutions and Vue.js ecosystem
                  for dynamic, responsive frontends, I bring both depth and breadth to every project.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "3+", label: "Years Experience", color: "from-blue-500 to-cyan-500" },
                { number: "10+", label: "Projects Completed", color: "from-green-500 to-emerald-500" },
                { number: "99.99%", label: "Client Satisfaction", color: "from-purple-500 to-pink-500" },
                { number: "24/7", label: "Support Available", color: "from-orange-500 to-red-500" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-center"
                  style={{ padding: '10px' }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ padding: '10px' }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 pt-[10px] border border-white/20 group hover:bg-white/20 transition-all duration-300 text-center flex flex-col items-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ paddingTop: '10px' }}
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-r ${highlight.color}
                flex items-center justify-center
                text-white mb-4
                group-hover:scale-110 transition-transform duration-300
                py-[15px]`}
              >
                {highlight.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{highlight.title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}