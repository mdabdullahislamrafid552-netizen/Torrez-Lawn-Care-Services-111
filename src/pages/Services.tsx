import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Lawn Care',
      description: 'Keep your lawn looking its best year-round with our comprehensive maintenance plans. We handle mowing, edging, and trimming with professional precision.',
      benefits: ['Consistent, manicured appearance', 'Healthier grass growth', 'Weed control and prevention'],
      image: 'https://sunlightwaterandus.com/wp-content/uploads/2023/04/What-Is-the-Best-Time-To-Seed-Lawn-in-NJ-500x383.png'
    },
    {
      title: 'Landscaping',
      description: 'Enhance the beauty of your property with professional landscape design and installation. We create stunning outdoor environments tailored to your vision.',
      benefits: ['Custom design solutions', 'Increased property value', 'Expert plant selection and placement'],
      image: 'https://mikesbackyardnursery.com/wp-content/uploads/2014/03/rsz_dsc_0034.jpg'
    },
    {
      title: 'Pressure Washing',
      description: 'Restore the original beauty of your home\'s exterior, driveways, and walkways. Our professional pressure washing removes years of dirt, grime, and mildew.',
      benefits: ['Instantly improves curb appeal', 'Prevents damage from mold and mildew', 'Safe for various exterior surfaces'],
      image: 'https://www.hotsyab.com/wp-content/uploads/2019/05/Hotsy_Pressure_Washer_PSI_vs_GPM.jpg'
    },
    {
      title: 'Property Builds',
      description: 'From hardscaping to custom outdoor living spaces, we build structures that enhance your property\'s functionality and aesthetic appeal.',
      benefits: ['Durable, high-quality construction', 'Seamless integration with existing landscape', 'Customized to your lifestyle needs'],
      image: 'https://assets.savills.com/properties/GBCBRSCKS260004/CKS260004_01_l_lis.jpg'
    },
    {
      title: 'Maintenance',
      description: 'Comprehensive property maintenance services to ensure every aspect of your home and landscape remains in pristine condition year-round.',
      benefits: ['Preventative care saves money long-term', 'Peace of mind knowing your property is cared for', 'Prompt attention to repair needs'],
      image: 'https://img.freepik.com/free-photo/man-installs-heating-system-house-checks-pipes-with-wrench_169016-55822.jpg?semt=ais_hybrid&w=740&q=80'
    }
  ];

  return (
    <div className="w-full bg-paper">
      {/* Header */}
      <section className="relative pt-48 pb-24 md:pt-64 md:pb-32 px-6 lg:px-16 xl:px-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/20 blur-[180px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[8rem] leading-[1.1] font-bold tracking-tight mb-8">
              Our <span className="text-primary">Services</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 md:py-48 px-6 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto space-y-32 md:space-y-48">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} gap-16 md:gap-24 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden aspect-[4/5] group rounded-xl shadow-lg">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <span className="text-primary/20 font-serif text-6xl md:text-8xl mb-8 block font-bold">
                  0{index + 1}
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 font-bold">{service.title}</h2>
                <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
                  {service.description}
                </p>
                
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">Key Benefits</h3>
                <ul className="space-y-4 mb-12">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start text-gray-700 text-base">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 shrink-0" />
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/request-service"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
                >
                  Request this service <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <section className="relative py-24 md:py-32 bg-gray-900 text-white px-6 lg:px-16 xl:px-24 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif text-4xl md:text-6xl mb-12 font-bold">Service Areas</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
              {['Hammond', 'Ponchatoula', 'Madisonville', 'Covington', 'Mandeville', '45-mile radius'].map((area, index) => (
                <span 
                  key={index}
                  className="text-sm md:text-base font-medium text-white hover:text-primary transition-colors duration-300 cursor-default border border-white/20 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 hover:border-primary/50"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
