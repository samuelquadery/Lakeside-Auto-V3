import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Wrench, 
  Cog, 
  Gauge, 
  Car, 
  Battery, 
  Thermometer,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const ServicesPage = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Engine Diagnostics',
      description: 'State-of-the-art computer diagnostics to pinpoint issues with precision. We decode complex engine problems quickly and accurately.',
      features: ['Check Engine Light Diagnosis', 'Computer Code Reading', 'Performance Analysis', 'Emissions Testing'],
    },
    {
      icon: Cog,
      title: 'Transmission Service',
      description: 'Complete transmission repair, rebuilds, and fluid exchanges. Our technicians specialize in both manual and automatic systems.',
      features: ['Fluid Changes', 'Clutch Repair', 'Transmission Rebuilds', 'Torque Converter Service'],
    },
    {
      icon: Gauge,
      title: 'Brake Systems',
      description: 'Comprehensive brake services including pad replacement, rotor resurfacing, and complete brake system inspections for your safety.',
      features: ['Brake Pad Replacement', 'Rotor Resurfacing', 'Brake Line Repair', 'ABS Diagnostics'],
    },
    {
      icon: Car,
      title: 'Suspension & Steering',
      description: 'Expert wheel alignment, shock replacement, and steering repairs. We restore your vehicle\'s ride quality and handling.',
      features: ['Wheel Alignment', 'Shock & Strut Replacement', 'Power Steering Repair', 'Ball Joint Service'],
    },
    {
      icon: Battery,
      title: 'Electrical Systems',
      description: 'Battery testing, alternator repair, starter replacement, and complete electrical system diagnostics and repairs.',
      features: ['Battery Testing & Replacement', 'Alternator Repair', 'Starter Replacement', 'Wiring Repair'],
    },
    {
      icon: Thermometer,
      title: 'AC & Heating',
      description: 'Full climate control services including AC repair, refrigerant recharge, and heating system maintenance.',
      features: ['AC Recharge', 'Compressor Repair', 'Heater Core Service', 'Climate Control Diagnostics'],
    },
  ]

  const additionalServices = [
    'Oil Changes & Fluid Services',
    'Tire Rotation & Balancing',
    'Belt & Hose Replacement',
    'Fuel System Service',
    'Exhaust System Repair',
    'Pre-Purchase Inspections',
    'State Inspections',
    'Preventive Maintenance',
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
              Our Services
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Comprehensive automotive care delivered by experienced technicians
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-[#1e5988]/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-[#1e5988]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#1e5988]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Additional <span className="text-[#1e5988]">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We handle all makes and models with expert care
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-[#1e5988] flex-shrink-0" />
                <span className="text-gray-700 font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1e5988]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Need Service? We're Here to Help
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Contact us today to schedule your appointment or get a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-white text-[#1e5988] font-bold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <a href="tel:+18042662553">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#1e5988] transition-all"
              >
                Call (804) 266-2553
              </motion.button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
