import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  // Navigation links - removed "Home" and "Contact" (Get Quote serves as Contact link)
  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Location', href: '/location' },
  ]

  const isActive = (href) => {
    return location.pathname === href
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-[#1e5988]/10' : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - serves as Home button */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center flex-shrink-0"
            >
              <img 
                src="/logo.png" 
                alt="Lakeside Auto - Click to go Home" 
                className="h-12 md:h-14 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <Link key={link.name} to={link.href}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive(link.href)
                      ? 'text-[#1e5988] bg-[#1e5988]/10'
                      : 'text-[#1e5988] hover:text-[#174a73] hover:bg-[#1e5988]/5'
                  }`}
                >
                  {link.name}
                </motion.div>
              </Link>
            ))}
            {/* Get Quote - Primary link to Contact page */}
            <Link to="/contact">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`ml-4 px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  location.pathname === '/contact'
                    ? 'bg-[#1e5988] text-white'
                    : 'border-2 border-[#1e5988] text-[#1e5988] hover:bg-[#1e5988] hover:text-white'
                }`}
              >
                Get Quote
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#1e5988]"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <Link key={link.name} to={link.href}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`block px-4 py-3 rounded-lg transition-colors font-medium ${
                      isActive(link.href)
                        ? 'text-[#1e5988] bg-[#1e5988]/10'
                        : 'text-[#1e5988] hover:text-[#174a73] hover:bg-[#1e5988]/5'
                    }`}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
              {/* Get Quote - Primary link to Contact page */}
              <Link to="/contact">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className={`block px-4 py-3 text-center font-semibold rounded-lg mt-4 transition-all ${
                    location.pathname === '/contact'
                      ? 'bg-[#1e5988] text-white'
                      : 'border-2 border-[#1e5988] text-[#1e5988] hover:bg-[#1e5988] hover:text-white'
                  }`}
                >
                  Get Quote
                </motion.div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
