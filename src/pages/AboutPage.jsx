import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Award, Users, Clock, Shield, ArrowRight } from 'lucide-react'

const AboutPage = () => {
  const highlights = [
    {
      icon: Clock,
      title: 'Serving Since 1998',
      description: 'Over 25 years of trusted automotive service in Richmond.',
    },
    {
      icon: Users,
      title: 'Family Owned',
      description: 'Local family business committed to our community.',
    },
    {
      icon: Award,
      title: 'Expert Technicians',
      description: 'Skilled mechanics with extensive training and experience.',
    },
    {
      icon: Shield,
      title: 'Honest Service',
      description: 'Transparent pricing and straightforward recommendations.',
    },
  ]

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-20 bg-[#1e5988]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-black uppercase text-white mb-4">
              About Us
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Richmond's trusted automotive specialists for over 25 years
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[#1e5988]/10 text-[#1e5988] text-sm font-medium tracking-wide mb-4">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900 mb-6">
                Richmond's Trusted <span className="text-[#1e5988]">Auto Shop</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  For over 25 years, Lakeside Auto has been the trusted choice for automotive 
                  repair and maintenance in Richmond, Virginia. As a family-owned and operated 
                  business, we take pride in treating every customer like part of our family.
                </p>
                <p>
                  Our experienced technicians are dedicated to providing honest, reliable service 
                  at fair prices. We believe in doing the job right the first time and standing 
                  behind our work. Whether you need routine maintenance or complex repairs, 
                  you can count on us to keep your vehicle running smoothly.
                </p>
                <p>
                  Located on Lakeside Avenue, we've built lasting relationships with generations 
                  of Richmond families. Our commitment to quality workmanship and customer 
                  satisfaction has made us a cornerstone of the community.
                </p>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-8 pt-8 border-t border-gray-100">
                <div>
                  <p className="text-4xl font-black text-[#1e5988]">25+</p>
                  <p className="text-gray-500 text-sm">Years in Business</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-[#1e5988]">10K+</p>
                  <p className="text-gray-500 text-sm">Happy Customers</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-[#1e5988]">4.6</p>
                  <p className="text-gray-500 text-sm">Google Rating</p>
                </div>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#1e5988]/20 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1e5988]/10 flex items-center justify-center mb-4 group-hover:bg-[#1e5988]/20 transition-colors">
                    <item.icon className="w-6 h-6 text-[#1e5988]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1e5988] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our <span className="text-[#1e5988]">Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#1e5988]/10 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-[#1e5988]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We provide honest assessments and only recommend necessary repairs. 
                No upselling, no hidden fees.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 bg-white rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#1e5988]/10 flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-[#1e5988]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">
                We use quality parts and take pride in our craftsmanship. 
                Every repair is done right the first time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 bg-white rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#1e5988]/10 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-[#1e5988]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                We're proud to serve our Richmond neighbors and build lasting 
                relationships with every customer.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1e5988]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Schedule your appointment today and see why Richmond trusts Lakeside Auto.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-white text-[#1e5988] font-bold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Book Appointment
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
