import { motion } from 'motion/react';
import { Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full bg-paper min-h-screen">
      {/* Header */}
      <section className="relative pt-48 pb-24 md:pt-64 md:pb-32 px-6 lg:px-16 xl:px-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/20 blur-[180px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-[8rem] leading-[1.1] font-bold tracking-tight mb-8"
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h1>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 md:py-48 px-6 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">Phone</h3>
            <a href="tel:9856624350" className="font-serif text-3xl font-bold text-gray-900 hover:text-primary transition-colors duration-300">
              (985) 662-4350
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">Email</h3>
            <a href="mailto:torrezlawncareservices@gmail.com" className="font-serif text-2xl font-bold text-gray-900 hover:text-primary transition-colors duration-300 break-all">
              torrezlawncareservices@gmail.com
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">Headquarters</h3>
            <p className="font-serif text-2xl font-bold text-gray-900 leading-relaxed">
              Hammond, LA<br />
              <span className="text-lg text-gray-600 font-sans font-normal mt-2 block">Serving a 45-mile radius</span>
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">Hours</h3>
            <ul className="font-serif text-xl font-bold space-y-3 mb-12 text-gray-900">
              <li>Mon - Fri: 7am - 6pm</li>
              <li>Sat: 8am - 4pm</li>
              <li className="text-gray-500">Sun: Closed</li>
            </ul>

            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">Social</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/torrezlawnservices_91" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://web.facebook.com/lawnservicestorrez/?ref=PRODASH_UPSELL_xav_ig_profile_page_web#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[500px] md:h-[800px] bg-gray-100 relative overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110191.03350314412!2d-90.54714157835158!3d30.49045862211244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86273e65922c2a0d%3A0x6b4c1a5d070119e7!2sHammond%2C%20LA!5e0!3m2!1sen!2sus!4v1710689000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
      </section>
    </div>
  );
}
