import { useState, useRef, useEffect } from 'react'

const projects = [
  {
    title: 'Mind2Deck — AI Presentation Generator',
    category: 'Full Stack / AI',
    image: '',
    description:
      'End-to-end AI web platform that automates slide generation from a user-provided topic, reducing presentation creation time by 70%. Integrated NLP models for structured content generation and Stable Diffusion for AI image synthesis. Produces professional-quality PPTX, image, and video exports. Architected with SQL Server and Azure Blob for scalable multi-format asset storage.',
    technologies: ['ASP.NET Core', 'C#', 'SQL Server', 'Azure Blob', 'Stable Diffusion', 'NLP'],
    liveUrl: '',
    githubUrl: '',
    gradient: ['#3b82f6', '#06b6d4'],
  },
  {
    title: 'Foodie — Full-Stack Food Ordering',
    category: 'Flutter / Full Stack',
    image: '',
    description:
      'Complete Flutter frontend with Provider state management: category-based browsing, persistent cart, and checkout flow with multiple payment methods. Secure RESTful backend using ASP.NET Core Web API with Entity Framework Core, JWT authentication, and BCrypt password hashing. Resolved cross-platform networking challenges including CORS and firewall configuration.',
    technologies: ['Flutter', 'Provider', '.NET Core Web API', 'JWT', 'SQLite', 'Entity Framework'],
    liveUrl: '',
    githubUrl: '',
    gradient: ['#f59e0b', '#ef4444'],
  },
  {
    title: 'ExpenseTracker — Smart Expense Tracker with ML',
    category: 'Flutter / AI',
    image: '',
    description:
      'Flutter frontend with secure ASP.NET Core API and a Python Flask microservice that automates expense categorization using TF-IDF + Naïve Bayes. Features JWT authentication, interactive pie charts for spending insights, and time-based filtering (daily/weekly/monthly). Clean three-tier architecture for scalability.',
    technologies: ['Flutter', 'ASP.NET Core', 'Python Flask', 'JWT', 'SQLite', 'scikit-learn'],
    liveUrl: '',
    githubUrl: '',
    gradient: ['#8b5cf6', '#ec4899'],
  },
  {
    title: 'WallPix — Wallpaper App',
    category: 'Flutter',
    image: '',
    description:
      'Wallpaper app integrating the Pexels API with infinite scrolling and lazy loading to browse over 10,000 high-quality images. Optimized image loading with advanced caching strategies, achieving sub-200ms load times. Applied asynchronous programming patterns for jank-free scrolling even on mid-range Android devices.',
    technologies: ['Flutter', 'Dart', 'Pexels API', 'Asynchronous Programming', 'Caching'],
    liveUrl: '',
    githubUrl: '',
    gradient: ['#22c55e', '#0ea5e9'],
  },
  {
    title: 'Quiz App',
    category: 'Flutter',
    image: '',
    description:
      'Multi-screen quiz application with splash, quiz, and results screens. Used OOP principles for a scalable question model. Dynamic score calculation, percentage-based evaluation, and real-time feedback. State managed with Provider for complex interactions and setState for local UI updates.',
    technologies: ['Flutter', 'Dart', 'OOP', 'Provider'],
    liveUrl: '',
    githubUrl: '',
    gradient: ['#22c55e', '#14b8a6'],
  },
  {
    title: 'Calculator & Number Guessing Game',
    category: 'Python',
    image: '',
    description:
      'Command-line calculator supporting arithmetic, exponentiation, and modulus with robust error handling. Interactive number guessing game (1–100) with real-time hints, attempt limits, and challenge elements. Demonstrates clean Python control flow and user interaction patterns.',
    technologies: ['Python', 'Error Handling', 'Random Module', 'Loops'],
    liveUrl: '',
    githubUrl: '',
    gradient: ['#64748b', '#94a3b8'],
  },
]

/* ---------- small inline icons (no extra dependency) ---------- */
const ArrowLeft = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
)
const ExternalLink = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.297 24 12 24 5.37 18.627 0 12 0z" />
  </svg>
)

/* ---------- gradient placeholder shown when no image is provided ---------- */
const BrowserMock = ({ project, large }) => (
  <div style={{ width: '100%', height: '100%', borderRadius: large ? 16 : 12, overflow: 'hidden', background: '#0b1220' }}>
    <div style={{
      height: large ? 36 : 28,
      background: 'linear-gradient(90deg, #1e293b, #0f172a)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 12px',
      gap: 6,
    }}>
      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} />
      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }} />
      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e' }} />
      <div style={{
        flex: 1,
        marginLeft: 8,
        height: 16,
        borderRadius: 4,
        background: '#1e293b',
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
      }}>
        <span style={{ fontSize: 10, color: '#64748b', overflow: 'hidden', whiteSpace: 'nowrap' }}>
          {project.title}
        </span>
      </div>
    </div>
    <div style={{
      height: `calc(100% - ${large ? 36 : 28}px)`,
      background: `linear-gradient(135deg, ${project.gradient[0]}22, ${project.gradient[1]}33)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    }}>
      <div style={{
        width: large ? 80 : 56,
        height: large ? 80 : 56,
        borderRadius: 16,
        background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `0 8px 32px ${project.gradient[0]}55`,
      }}>
        <span style={{
          fontSize: large ? 28 : 20,
          fontWeight: 700,
          color: 'white',
          letterSpacing: 1,
        }}>
          {project.title.split(' ')[0].slice(0, 2).toUpperCase()}
        </span>
      </div>
      <div style={{
        position: 'absolute',
        bottom: large ? 16 : 10,
        left: large ? 16 : 10,
        right: large ? 16 : 10,
      }}>
        <div style={{
          fontSize: large ? 13 : 11,
          fontWeight: 600,
          color: 'white',
          marginBottom: 4,
        }}>
          {project.title}
        </div>
        <div style={{
          fontSize: large ? 11 : 9,
          color: '#94a3b8',
        }}>
          {project.category}
        </div>
      </div>
    </div>
  </div>
)

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % projects.length)
      }, 5000)
    }
    return () => clearInterval(intervalRef.current)
  }, [isAutoPlaying])

  const goTo = (index) => {
    setIsAutoPlaying(false)
    setActiveIndex(index)
  }

  const next = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }

  const prev = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const project = projects[activeIndex]

  return (
    <section id="projects" className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16 lg:mb-20">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Project visual */}
          <div className="relative">
            <div
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
              style={{ boxShadow: `0 0 60px ${project.gradient[0]}33` }}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <BrowserMock project={project} large />
              )}
            </div>

            {/* Navigation arrows */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:border-accent-blue/40 transition-all"
                aria-label="Previous project"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </button>

              <div className="flex gap-2">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? 'w-8 bg-accent-blue'
                        : 'w-2 bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to project ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:border-accent-blue/40 transition-all rotate-180"
                aria-label="Next project"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Right: Project details */}
          <div className="space-y-6">
            <div>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                style={{
                  background: `${project.gradient[0]}22`,
                  color: project.gradient[0],
                }}
              >
                {project.category}
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-base lg:text-lg">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary/80 text-gray-300 border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-button px-6 py-3 rounded-full text-white font-semibold text-sm flex items-center gap-2"
                >
                  Live Demo
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border-2 border-gray-600 text-white font-semibold text-sm flex items-center gap-2 hover:border-accent-blue transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  Source Code
                </a>
              )}
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-3 overflow-x-auto pt-4 pb-2">
              {projects.map((p, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    i === activeIndex
                      ? 'border-accent-blue shadow-glow'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  {p.image ? (
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-xs font-bold text-white"
                      style={{
                        background: `linear-gradient(135deg, ${p.gradient[0]}, ${p.gradient[1]})`,
                      }}
                    >
                      {p.title.split(' ')[0].slice(0, 2).toUpperCase()}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
