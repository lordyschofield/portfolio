import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Code, Users } from 'lucide-react';
import { useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  github?: string;
  live?: string;
  featured: boolean;
  longDescription?: string;
  features?: string[];
  challenges?: string[];
  duration?: string;
  teamSize?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "HR Employee Data Module",
    description: "Comprehensive employee data management system with advanced search, filtering, and profile management capabilities for large-scale HR operations.",
    image: "👥",
    technologies: ["Laravel", "MySQL", "Vue.js", "WebSockets", "Job Queueing"],
    category: "fullstack",
    github: "#",
    live: "#",
    featured: true,
    longDescription: "A comprehensive HR management system designed to handle employee data for large-scale operations. Features advanced search and filtering capabilities, employee profile management, and real-time data synchronization across multiple departments.",
    features: [
      "Advanced employee search and filtering",
      "Real-time profile updates",
      "Department-wise data management",
      "Export functionality for reports",
      "Role-based access control",
      "Audit trail for data changes"
    ],
    challenges: [
      "Handling large datasets efficiently",
      "Implementing real-time synchronization",
      "Ensuring data security and privacy",
      "Creating intuitive user interfaces"
    ],
    duration: "6 months",
    teamSize: "3 developers"
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
    featured: true,
    longDescription: "A dynamic recruitment platform that streamlines the hiring process with customizable application forms, automated workflows, and comprehensive candidate tracking throughout the recruitment lifecycle.",
    features: [
      "Dynamic form builder with drag-and-drop",
      "Automated email notifications",
      "Candidate progress tracking",
      "Interview scheduling system",
      "Document upload and management",
      "Reporting and analytics dashboard"
    ],
    challenges: [
      "Creating flexible form structures",
      "Implementing workflow automation",
      "Managing file uploads securely",
      "Building responsive email templates"
    ],
    duration: "4 months",
    teamSize: "2 developers"
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
    featured: true,
    longDescription: "A robust financial management system focused on accounts receivable operations, featuring comprehensive invoicing, payment tracking, and financial reporting capabilities with multi-format export options.",
    features: [
      "Automated invoice generation",
      "Payment tracking and reconciliation",
      "Credit/debit memo management",
      "Multi-currency support",
      "Financial reporting suite",
      "Integration with banking APIs"
    ],
    challenges: [
      "Ensuring financial data accuracy",
      "Implementing complex financial calculations",
      "Creating comprehensive audit trails",
      "Managing multi-currency transactions"
    ],
    duration: "8 months",
    teamSize: "4 developers"
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
    featured: false,
    longDescription: "A comprehensive timekeeping solution that provides real-time attendance tracking, automated overtime calculations, and seamless integration with payroll processing systems.",
    features: [
      "Real-time attendance tracking",
      "Automated overtime calculations",
      "Leave balance management",
      "Biometric integration support",
      "Mobile check-in/out",
      "Comprehensive reporting"
    ],
    challenges: [
      "Real-time data synchronization",
      "Complex overtime calculations",
      "Mobile app integration",
      "Ensuring system reliability"
    ],
    duration: "5 months",
    teamSize: "3 developers"
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
    featured: false,
    longDescription: "A complete payroll management solution that handles complex salary calculations, tax computations, benefits management, and generates professional payslips in multiple formats.",
    features: [
      "Automated salary calculations",
      "Tax computation and withholding",
      "Benefits and deduction management",
      "Multi-format payslip generation",
      "Year-end tax reporting",
      "Integration with banking systems"
    ],
    challenges: [
      "Complex tax calculation logic",
      "Handling various employee types",
      "Ensuring payslip security",
      "Managing compliance requirements"
    ],
    duration: "7 months",
    teamSize: "3 developers"
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
    featured: false,
    longDescription: "A comprehensive leave and overtime management system that provides automated workflow processing, policy enforcement, and real-time notifications for efficient HR operations.",
    features: [
      "Automated leave request workflows",
      "Overtime tracking and approval",
      "Policy-based leave calculations",
      "Real-time notification system",
      "Calendar integration",
      "Reporting and analytics"
    ],
    challenges: [
      "Complex workflow management",
      "Policy rule implementation",
      "Real-time notifications",
      "Calendar synchronization"
    ],
    duration: "4 months",
    teamSize: "2 developers"
  }
];

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === parseInt(id || '0'));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            <div className="flex items-center gap-8">
              <Link
                to="/"
                className="text-2xl font-bold text-white hover:text-purple-300 transition-colors duration-300"
              >
                Portfolio
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all duration-300"
              >
                <ArrowLeft size={16} />
                Back
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-12 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="text-8xl mb-6">{project.image}</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {project.description}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {project.github && project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
              >
                <Github size={20} />
                View Source
              </a>
            )}
            {project.live && project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white hover:shadow-lg transition-all duration-300"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="max-w-6xl w-full">
          <div className="grid md:grid-cols-3 gap-8 justify-items-center md:justify-items-stretch">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.longDescription}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-sm text-gray-400">Duration</p>
                      <p className="text-white font-medium">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-sm text-gray-400">Team Size</p>
                      <p className="text-white font-medium">{project.teamSize}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Features */}
              {project.features && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Challenges */}
              {project.challenges && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Technical Challenges</h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Code className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                        <p className="text-gray-300">{challenge}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Category */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-bold text-white mb-4">Category</h3>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 capitalize">
                  {project.category}
                </span>
              </motion.div>

              {/* Featured Badge */}
              {project.featured && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-center"
                >
                  <div className="text-white font-bold text-lg">⭐ Featured Project</div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="max-w-6xl w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex justify-center"
          >
            <Link
              to="/#projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <ArrowLeft size={20} />
              Back to All Projects
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
