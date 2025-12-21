import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'fullstack', 'frontend', 'backend', 'other'];

  const projects = [
    {
      id: 1,
      title: "HR Employee Data Module",
      description: "Comprehensive employee data management system with advanced search, filtering, and profile management capabilities for large-scale HR operations.",
      image: "👥",
      technologies: ["Laravel", "MySQL", "Vue.js", "WebSockets", "Job Queueing"],
      category: "fullstack",
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 2,
      title: "Hiring Application Form System",
      description: "Dynamic application form builder for recruitment processes with automated workflow management and candidate tracking.",
      image: "📋",
      technologies: ["Laravel", "Vue.js", "MySQL", "Real-time Updates", "PDF Export"],
      category: "fullstack",
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 3,
      title: "Accounts Receivable Module",
      description: "Advanced accounting module featuring credit/debit memos, statement of accounts, comprehensive reporting, and multi-format export capabilities.",
      image: "💰",
      technologies: ["Laravel", "MySQL", "Excel", "PDF", "Reports", "Financial APIs"],
      category: "backend",
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 4,
      title: "HR Timekeeping System",
      description: "Real-time employee attendance and time tracking system with automated calculations and integration with payroll processing.",
      image: "⏰",
      technologies: ["Laravel", "WebSockets", "Real-time", "Vue.js", "Job Queueing"],
      category: "fullstack",
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 5,
      title: "Payroll Management Module",
      description: "Comprehensive payroll processing system with automated calculations, tax computations, and multi-format payslip generation.",
      image: "💼",
      technologies: ["Laravel", "MySQL", "PDF Export", "Excel", "Financial Calculations"],
      category: "backend",
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 6,
      title: "Leave & Overtime Management",
      description: "Integrated leave request and overtime tracking system with approval workflows and automated policy enforcement.",
      image: "📅",
      technologies: ["Laravel", "Vue.js", "Real-time Notifications", "WebSockets", "Workflow Engine"],
      category: "fullstack",
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl mx-4 sm:mx-6 lg:mx-8" style={{ marginTop: '10px' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl text-center !text-center" style={{ textAlign: 'center', margin: '0 auto', width: '100%', marginTop: '20px' }}>
            A showcase of my recent work and technical capabilities
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12 px-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ paddingLeft: '10px', paddingRight: '10px'}}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
          style={{ padding: '20x'}}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                project.featured ? 'ring-2 ring-purple-400/50' : ''
              }`}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Project Image/Icon */}
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-6xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
                <span className="relative z-10">{project.image}</span>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4 justify-center" style={{ padding: '10px' }}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                {/* <div className="flex gap-3 justify-center">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-white text-sm font-medium hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                </div> */}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
}