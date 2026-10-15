import { motion } from 'framer-motion'
import { FaMobile, FaServer, FaCode, FaDatabase, FaLaptopCode } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      title: 'Flutter Mobile Apps',
      description:
        'Building polished cross-platform mobile applications with Flutter, Dart, Provider state management, and smooth UI/UX.',
      icon: FaMobile,
    },
    {
      title: 'RESTful API Integration',
      description:
        'Connecting mobile clients to secure backends with JWT authentication, Entity Framework, and robust API design.',
      icon: FaServer,
    },
    {
      title: '.NET Backend Development',
      description:
        'ASP.NET Core Web APIs, Entity Framework Core, authentication, and scalable server-side architecture.',
      icon: FaCode,
    },
    {
      title: 'Full-Stack Solutions',
      description:
        'End-to-end delivery from Flutter frontend to .NET/Python backends with clean three-tier architecture.',
      icon: FaLaptopCode,
    },
    {
      title: 'Python & ML Features',
      description:
        'Flask microservices and scikit-learn models for intelligent features like automated categorization and insights.',
      icon: FaDatabase,
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What I <span className="text-gradient">Build</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group glass-card p-8 lg:p-10 rounded-2xl relative overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 50px rgba(59, 130, 246, 0.3)',
              }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 flex items-center justify-center mb-6 group-hover:from-accent-blue/30 group-hover:to-accent-cyan/30 transition-all duration-300">
                <service.icon className="text-3xl text-accent-blue" />
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent-blue/10 rounded-full blur-3xl group-hover:bg-accent-blue/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
