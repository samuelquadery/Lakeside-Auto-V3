import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const ReviewsPage = () => {
  // Load Elfsight script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://elfsightcdn.com/platform.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

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
              Customer Reviews
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              See what our customers have to say about their experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Elfsight Google Reviews Widget */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
              What Our <span className="text-[#1e5988]">Customers</span> Say
            </h2>
            <p className="text-gray-600">Real reviews from Google</p>
          </motion.div>

          {/* Elfsight Widget Container */}
          <div className="elfsight-app-45de2d46-664e-4a7a-ba91-4ed08538b426" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1e5988]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Experience the Lakeside Auto Difference
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join our satisfied customers in Richmond
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-white text-[#1e5988] font-bold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Get Your Quote Today
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ReviewsPage
