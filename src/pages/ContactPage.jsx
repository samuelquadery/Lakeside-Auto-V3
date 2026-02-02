import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Mail, Phone, MessageSquare, Car, CheckCircle, MapPin, Clock } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const serviceOptions = [
    'Engine Diagnostics',
    'Transmission Service',
    'Brake System',
    'Suspension & Steering',
    'Electrical Systems',
    'AC & Heating',
    'Oil Change & Maintenance',
    'Pre-Purchase Inspection',
    'Other',
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after delay
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicle: '',
        service: '',
        message: '',
      })
    }, 3000)
  }

  const inputClasses =
    'w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:border-[#1e5988] focus:ring-1 focus:ring-[#1e5988] outline-none transition-all duration-200'

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
              Contact Us
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Schedule your appointment or get in touch with our team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h2>
                <p className="text-gray-600">
                  Ready for quality automotive care? Fill out the form and our team 
                  will contact you to confirm your appointment during our business hours.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1e5988]/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#1e5988]" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 uppercase tracking-wide">Address</span>
                    <p className="font-bold text-gray-900">5401 Lakeside Ave</p>
                    <p className="text-gray-600">Richmond, VA 23228</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1e5988]/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#1e5988]" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 uppercase tracking-wide">Phone</span>
                    <a
                      href="tel:+18042662553"
                      className="block font-bold text-gray-900 hover:text-[#1e5988] transition-colors"
                    >
                      (804) 266-2553
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1e5988]/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#1e5988]" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 uppercase tracking-wide">Email</span>
                    <a
                      href="mailto:info@lakesideauto.com"
                      className="block font-bold text-gray-900 hover:text-[#1e5988] transition-colors"
                    >
                      info@lakesideauto.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1e5988]/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#1e5988]" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 uppercase tracking-wide">Hours</span>
                    <p className="font-bold text-gray-900">Mon-Fri: 8:30 AM - 5:00 PM</p>
                    <p className="text-gray-600">Sat-Sun: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="p-8 md:p-10 rounded-2xl bg-white shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Your Appointment</h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Request Submitted!
                    </h3>
                    <p className="text-gray-600">
                      We'll be in touch soon to confirm your appointment.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Smith"
                            className={`${inputClasses} pl-11`}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                            className={`${inputClasses} pl-11`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phone & Vehicle Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="(804) 555-1234"
                            className={`${inputClasses} pl-11`}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Vehicle (Year, Make, Model)
                        </label>
                        <div className="relative">
                          <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="vehicle"
                            value={formData.vehicle}
                            onChange={handleChange}
                            placeholder="2022 Toyota Camry"
                            className={`${inputClasses} pl-11`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className={`${inputClasses} cursor-pointer`}
                      >
                        <option value="">Select a service...</option>
                        {serviceOptions.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Details
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Describe the issue or what you need..."
                          className={`${inputClasses} pl-11 resize-none`}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-[#1e5988] hover:bg-[#2a6a9c] disabled:bg-[#1e5988]/50 text-white text-lg font-bold rounded-lg transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Request Appointment
                        </>
                      )}
                    </motion.button>

                    {/* Privacy Note */}
                    <p className="text-center text-sm text-gray-500">
                      By submitting this form, you agree to be contacted regarding your service request.
                      We respect your privacy and will never share your information.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
