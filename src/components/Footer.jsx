import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Facebook, 
  Instagram, 
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Customer Reviews', href: '/reviews' },
    { name: 'Location', href: '/location' },
    { name: 'Get Quote', href: '/contact' },
  ]

  const services = [
    'Engine Diagnostics',
    'Transmission Repair',
    'Brake Service',
    'AC & Heating',
    'Electrical Systems',
    'Suspension Work',
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-block mb-6 bg-white rounded-lg p-3"
              >
                {/* Logo displayed in original blue and white colors */}
                <img 
                  src="/logo.png" 
                  alt="Lakeside Auto" 
                  className="h-12 w-auto"
                />
              </motion.div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Richmond's trusted automotive specialists since 1998. 
              Quality service with integrity and expertise.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-[#1e5988] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#1e5988] hover:pl-2 transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-[#1e5988] hover:pl-2 transition-all duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1e5988] flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <p>5401 Lakeside Ave</p>
                  <p>Richmond, VA 23228</p>
                </div>
              </li>
              <li>
                <a
                  href="tel:+18042662553"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#1e5988] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#1e5988]" />
                  (804) 266-2553
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@lakesideauto.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#1e5988] transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#1e5988]" />
                  info@lakesideauto.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#1e5988] flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <p>Mon-Fri: 8:30 AM - 5:00 PM</p>
                  <p>Saturday: Closed</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} Lakeside Auto. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-[#1e5988] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#1e5988] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#1e5988] hover:bg-[#2a6a9c] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#1e5988]/30 z-50 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}

export default Footer
