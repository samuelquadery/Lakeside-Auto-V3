import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Wrench, Users, Clock, Star, MapPin, Phone, ArrowRight } from 'lucide-react'

const HomePage = () => {
  const features = [
    { icon: Wrench, text: 'Expert Technicians' },
    { icon: Users, text: 'Family Owned' },
    { icon: Clock, text: 'Same-Day Service' },
  ]

  const services = [
    { name: 'Engine Diagnostics', desc: 'Computer diagnostics to pinpoint issues' },
    { name: 'Transmission Service', desc: 'Repair, rebuilds, and fluid exchanges' },
    { name: 'Brake Systems', desc: 'Pad replacement and system overhauls' },
    { name: 'AC & Heating', desc: 'Climate control repairs and maintenance' },
  ]

  // Load Elfsight script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://elfsightcdn.com/platform.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
            alt="Professional automotive service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e5988]/80 via-[#1e5988]/60 to-white" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e5988]/70 via-transparent to-[#1e5988]/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8"
          >
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white tracking-wide">
              Serving Richmond Since 1998
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-6 text-white drop-shadow-lg"
          >
            Richmond's Premier<br />Automotive<br />Specialists
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Professional auto repair and maintenance you can trust. 
            Where quality workmanship meets honest, reliable service.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white hover:bg-gray-50 text-[#1e5988] text-lg font-bold rounded-lg shadow-2xl flex items-center gap-2"
              >
                Schedule Service
                <ChevronRight className="w-5 h-5" />
              </motion.div>
            </Link>
            <Link to="/services">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-lg font-semibold rounded-lg border border-white/30"
              >
                Explore Services
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {features.map((feature) => (
              <div
                key={feature.text}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
              >
                <feature.icon className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">{feature.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our <span className="text-[#1e5988]">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive automotive care for all makes and models
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-[#1e5988]/20 hover:shadow-xl transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 bg-[#1e5988] text-white font-semibold rounded-lg hover:bg-[#174a73] transition-colors"
              >
                View All Services
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section with Elfsight Widget */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Customer <span className="text-[#1e5988]">Reviews</span>
            </h2>
            <p className="text-gray-600">See what our customers say about us</p>
          </motion.div>

          {/* Elfsight Widget Container */}
          <div className="elfsight-app-45de2d46-664e-4a7a-ba91-4ed08538b426" data-elfsight-app-lazy></div>

          <div className="text-center mt-8">
            <Link to="/reviews">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 border-2 border-[#1e5988] text-[#1e5988] font-semibold rounded-lg hover:bg-[#1e5988] hover:text-white transition-all inline-flex items-center gap-2"
              >
                See All Reviews
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Why Choose <span className="text-[#1e5988]">Lakeside Auto?</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1e5988]/10 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-[#1e5988]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">25+ Years Experience</h3>
                    <p className="text-gray-600 text-sm">Trusted by Richmond families since 1998</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1e5988]/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-[#1e5988]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Family Owned & Operated</h3>
                    <p className="text-gray-600 text-sm">Personal service you can count on</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1e5988]/10 flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-5 h-5 text-[#1e5988]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Honest & Transparent</h3>
                    <p className="text-gray-600 text-sm">Fair pricing with no hidden fees</p>
                  </div>
                </div>
              </div>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-8 px-6 py-3 border-2 border-[#1e5988] text-[#1e5988] font-semibold rounded-lg hover:bg-[#1e5988] hover:text-white transition-all"
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1e5988] rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Contact Us Today</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <div>
                    <p className="font-medium">5401 Lakeside Ave</p>
                    <p className="text-blue-200 text-sm">Richmond, VA 23228</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+18042662553" className="font-medium hover:text-blue-200">
                    (804) 266-2553
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <div>
                    <p className="font-medium">Mon-Fri: 8:30 AM - 5:00 PM</p>
                    <p className="text-blue-200 text-sm">Sat-Sun: Closed</p>
                  </div>
                </div>
              </div>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-6 w-full py-3 bg-white text-[#1e5988] font-bold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Your Quote
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
