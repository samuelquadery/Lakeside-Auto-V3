import { useMemo, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Navigation, Mail, ArrowRight } from 'lucide-react'

// Light/Silver mode map styles
const lightMapStyles = [
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#444444' }],
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [{ color: '#f2f2f2' }],
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [{ saturation: -100 }, { lightness: 45 }],
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [{ visibility: 'simplified' }],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [{ color: '#c4d4e0' }, { visibility: 'on' }],
  },
]

// Lakeside Auto location - 5401 Lakeside Ave, Richmond, VA 23228
const LAKESIDE_AUTO_LOCATION = {
  lat: 37.60696,
  lng: -77.46439,
}

const LocationPage = () => {
  const [map, setMap] = useState(null)

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
  })

  const mapContainerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '0.75rem',
  }

  const options = useMemo(
    () => ({
      styles: lightMapStyles,
      disableDefaultUI: true,
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
    }),
    []
  )

  const onLoad = useCallback((map) => {
    setMap(map)
  }, [])

  const onUnmount = useCallback(() => {
    setMap(null)
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
              Find Us
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Conveniently located on Lakeside Avenue in Richmond
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map Container */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100 p-2"
            >
              {loadError ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-xl">
                  <div className="text-center p-8">
                    <MapPin className="w-12 h-12 text-[#1e5988] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">View Our Location</h3>
                    <p className="text-gray-600 mb-4">
                      5401 Lakeside Ave, Richmond, VA 23228
                    </p>
                    <a
                      href="https://www.google.com/maps/place/5401+Lakeside+Ave,+Richmond,+VA+23228/@37.60696,-77.46439,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e5988] hover:bg-[#2a6a9c] text-white font-semibold rounded-lg transition-colors"
                    >
                      <Navigation className="w-4 h-4" />
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              ) : !isLoaded ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-xl">
                  <div className="w-12 h-12 border-4 border-[#1e5988] border-t-transparent rounded-full animate-spin" />
                </div>
              ) : (
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={LAKESIDE_AUTO_LOCATION}
                  zoom={15}
                  options={options}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                >
                  <MarkerF
                    position={LAKESIDE_AUTO_LOCATION}
                    icon={{
                      path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
                      fillColor: '#1e5988',
                      fillOpacity: 1,
                      strokeColor: '#ffffff',
                      strokeWeight: 2,
                      scale: 2,
                      anchor: { x: 12, y: 24 },
                    }}
                  />
                </GoogleMap>
              )}
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1e5988]/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#1e5988]" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 uppercase tracking-wide">Address</span>
                    <p className="text-xl font-bold text-gray-900">5401 Lakeside Ave</p>
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
                      className="block text-xl font-bold text-gray-900 hover:text-[#1e5988] transition-colors"
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
                      className="block text-xl font-bold text-gray-900 hover:text-[#1e5988] transition-colors"
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
                    <p className="text-xl font-bold text-gray-900">Mon-Fri: 8:30 AM - 5:00 PM</p>
                    <p className="text-gray-600">Sat-Sun: Closed</p>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <motion.a
                href="https://www.google.com/maps/dir/?api=1&destination=5401+Lakeside+Ave,+Richmond,+VA+23228"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 w-full p-4 bg-[#1e5988] hover:bg-[#2a6a9c] text-white font-semibold rounded-xl transition-colors shadow-lg"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1e5988]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Visit?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Schedule your appointment today or just stop by during business hours.
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

export default LocationPage
