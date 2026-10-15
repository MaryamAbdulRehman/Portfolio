import { motion } from 'framer-motion'
import { FaMobile, FaCode, FaDatabase, FaLaptopCode } from 'react-icons/fa'

const About = () => {
  const cards = [
    {
      title: 'Flutter & Dart',
      icon: FaMobile,
      description: 'Building polished cross-platform mobile apps with Flutter, Dart, Provider, and BLoC basics',
    },
    {
      title: '.NET Backend',
      icon: FaCode,
      description: 'ASP.NET Core Web APIs, Entity Framework Core, JWT authentication, and secure REST services',
    },
    {
      title: 'Python & ML',
      icon: FaDatabase,
      description: 'Flask microservices, scikit-learn models, and intelligent features like automated categorization',
    },
    {
      title: 'Full-Stack Apps',
      icon: FaLaptopCode,
      description: 'End-to-end solutions connecting Flutter clients to .NET and Python backends with clean architecture',
    },
  ]

  const techTags = [
    'Flutter',
    'Dart',
    'Provider',
    'Firebase',
    'ASP.NET Core',
    'Entity Framework',
    'JWT',
    'Python',
    'Flask',
    'scikit-learn',
    'SQLite',
    'Git',
  ]

  return (
    <section id="about" className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16 lg:mb-20 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Building Cross-Platform Apps,
          <br />
          <span className="text-gradient">One Feature at a Time</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
              I'm a Flutter Developer with hands-on experience building 6+ cross-platform mobile applications.
              Proficient in Dart, state management (setState, Provider), RESTful API integration, asynchronous
              programming, Firebase, and third-party package management.
            </p>

            <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
              Additionally skilled in backend development using .NET (ASP.NET Core, Entity Framework) and Python
              (Flask, ML). Currently completing a BS in Software Engineering (graduating 2026) and seeking a
              Flutter developer role to build innovative, high-quality mobile solutions with a strong focus on
              user-centric design and smooth UI/UX.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {techTags.map((tag, index) => (
                <motion.span
                  key={tag}
                  className="px-4 py-2 rounded-full glass text-sm text-gray-300 border border-accent-blue/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: 'rgba(59, 130, 246, 0.5)',
                    boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)',
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                className="glass-card p-6 lg:p-8 rounded-2xl cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)',
                }}
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-4 group-hover:bg-accent-blue/20 transition-colors">
                  <card.icon className="text-2xl lg:text-3xl text-accent-blue" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
