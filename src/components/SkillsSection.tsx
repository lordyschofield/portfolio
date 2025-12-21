import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Vue.js", level: 95, description: "Component-based framework with reactive data binding" },
        { name: "Vuetify", level: 90, description: "Material Design component framework for Vue.js" },
        { name: "Vue Router", level: 88, description: "Official router for Vue.js applications" },
        { name: "Vuex", level: 85, description: "State management pattern and library for Vue.js" },
        { name: "JavaScript/TypeScript", level: 92, description: "Modern JavaScript with type safety" },
        { name: "React", level: 80, description: "Component-based UI library" },
      ]
    },
    {
      title: "Backend Technologies",
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Laravel", level: 95, description: "PHP framework for web artisans" },
        { name: "PHP", level: 90, description: "Server-side scripting language" },
        { name: "MySQL", level: 88, description: "Relational database management" },
        { name: "REST APIs", level: 92, description: "RESTful API development and integration" },
        { name: "Node.js", level: 75, description: "JavaScript runtime environment" },
        // { name: "Express.js", level: 70, description: "Web application framework for Node.js" },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git", level: 90, description: "Version control system" },
        // { name: "Docker", level: 75, description: "Containerization platform" },
        // { name: "AWS", level: 70, description: "Cloud computing services" },
        // { name: "Linux", level: 80, description: "Operating system and command line" },
        { name: "NPM/Yarn", level: 88, description: "Package managers" },
        { name: "Webpack/Vite", level: 82, description: "Module bundlers and build tools" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl mx-4 sm:mx-6 lg:mx-8" style={{ marginTop: '10px' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl text-center !text-center" style={{ textAlign: 'center', margin: '0 auto', width: '100%', marginTop: '20px' }}>
            Comprehensive expertise across the full-stack development spectrum
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              style={{ padding: '20px', margin: '10px' }}
            >
              <div className="flex flex-col items-center mb-8 text-center">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-3xl mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group text-center" style={{ padding: '2px' }}>
                      <div className="flex justify-center items-center mb-3">
                        <h4 className="text-lg font-semibold text-white mr-2">{skill.name}</h4>
                        <span className="text-sm text-gray-400">({skill.level}%)</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        />
                      </div>

                      {/* Description - appears on hover */}
                      <motion.p
                        className="text-sm text-gray-400 leading-relaxed"
                        initial={{ opacity: 0, height: 0 }}
                        animate={hoveredSkill === skill.name ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {skill.description}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3" style={{ padding: '10px'}}>
            {[
              "HTML5", "CSS3", "SASS/SCSS", "Tailwind CSS", "Bootstrap",
              "jQuery", "Axios", "JWT", "OAuth", "Redis", "MongoDB",
              "PostgreSQL", "Firebase", "Stripe", "PayPal", "Jest",
              "Cypress", "Figma", "Adobe XD", "Postman", "Swagger"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 text-sm font-medium border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
                style={{ padding: '10px'}}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}