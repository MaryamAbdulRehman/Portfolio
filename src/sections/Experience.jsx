import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'Flutter Developer Intern',
      company: 'Devmind (Remote)',
      date: '2025',
      description:
        'Developed and maintained cross-platform mobile applications using Flutter and Dart, integrating RESTful APIs and third-party packages to enhance functionality.',
      responsibilities: [
        'Developed and maintained cross-platform mobile applications using Flutter and Dart',
        'Integrated RESTful APIs and third-party packages to enhance app functionality',
        'Collaborated with a remote team using Agile methodologies',
        'Implemented new features, fixed bugs, and optimized code for better readability and performance',
      ],
      technologies: ['Flutter', 'Dart', 'RESTful APIs', 'Git', 'Agile', 'Third-party Packages'],
    },
  ]

  const education = {
    degree: 'BS Software Engineering',
    school: 'PMAS Arid Agriculture University – Rawalpindi, PK',
    date: '2022 – 2026',
  }

  return (
    <section id="experience" className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience & <span className="text-gradient">Education</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-cyan to-accent-purple transform md:-translate-x-1/2" />

          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent-blue rounded-full transform -translate-x-1/2 mt-6 z-10 shadow-glow">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-accent-blue"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.8, 0, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>

                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}
                >
                  <motion.div
                    className="glass-card p-6 lg:p-8 rounded-2xl"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)',
                    }}
                  >
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent-blue/20 text-accent-blue mb-3">
                      {exp.date}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-accent-cyan font-medium mb-4">{exp.company}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-accent-blue mt-1">•</span>
                          <span className={index % 2 === 0 ? 'md:order-first' : ''}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs bg-secondary/80 text-gray-300 border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}

            {/* Education entry */}
            <motion.div
              className="relative flex flex-col md:flex-row items-start md:flex-row-reverse"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent-cyan rounded-full transform -translate-x-1/2 mt-6 z-10 shadow-glow" />

              <div className="ml-12 md:ml-0 md:w-1/2 md:pl-12">
                <motion.div
                  className="glass-card p-6 lg:p-8 rounded-2xl"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 0 30px rgba(6, 182, 212, 0.2)',
                  }}
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent-cyan/20 text-accent-cyan mb-3">
                    {education.date}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                    {education.degree}
                  </h3>
                  <p className="text-accent-cyan font-medium mb-2">{education.school}</p>
                  <p className="text-gray-400 text-sm">
                    Currently pursuing Bachelor of Science in Software Engineering. Expected graduation 2026.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
