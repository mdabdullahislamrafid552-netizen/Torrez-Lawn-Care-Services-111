import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="w-full bg-paper" ref={containerRef}>
      {/* Hero */}
      <section className="relative h-screen w-full flex items-center pb-16 md:pb-32 px-6 lg:px-16 xl:px-24 bg-gray-900 overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: [0.33, 1, 0.68, 1] }}
            src="https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?cs=srgb&dl=pexels-pixabay-158063.jpg&fm=jpg" 
            alt="Estate Lawn" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div 
              initial={{ y: 40, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-white font-serif text-[10vw] md:text-[6vw] leading-[1.1] font-bold">
                Professional <br />
                <span className="text-primary">Lawn Care.</span>
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1, delay: 1 }}
              className="max-w-md"
            >
              <p className="text-white/90 font-sans text-lg leading-relaxed mb-8">
                Expert lawn maintenance, landscaping, and property care services in Hammond, Louisiana. We keep your property looking its absolute best.
              </p>
              <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors">
                View Our Services <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Statement - Editorial */}
      <section className="py-24 md:py-32 px-6 lg:px-16 xl:px-24 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-sm font-bold uppercase tracking-wider text-primary mb-8"
              >
                About Torrez
              </motion.p>
              
              {/* Beautifully Framed Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative mt-8"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-sm border-[12px] border-white shadow-2xl relative z-10">
                  <img 
                    src="https://instagram.fdac2-2.fna.fbcdn.net/v/t39.30808-6/484508012_1215724673886907_4083255862637308941_n.jpg?stp=c0.0.1440.1079a_cp6_dst-jpg_e35_s1080x1080_tt6&_nc_cat=101&ig_cache_key=MzA4NzY2ODIxMDc0NTE2OTA4Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=E2kGhnfHYeMQ7kNvwEjDjEN&_nc_oc=Adl0RjgmDXvgyVPs6gTdfWX-JK7Tp9xhVNrEfF0ru8Oi75PhUxLm4-yRdyrzPbnbfdg&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=-4_eNL-9aEW4QWl_Ff-v5Q&_nc_ss=8&oh=00_AfytcLYIngwVvfX7tPvpc_FlJwnCl3t6b_BBQw0AH4qUCw&oe=69BD15DC" 
                    alt="Torrez Lawn Care Work" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                {/* Decorative background element */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 -z-0" />
              </motion.div>
            </div>
            <div className="lg:col-span-8">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.2] text-gray-900 font-bold text-balance"
              >
                Dedicated to providing top-tier <span className="text-primary">lawn care and landscaping</span> solutions for residential and commercial properties.
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1 }}
                className="mt-12"
              >
                <Link to="/about" className="inline-flex items-center text-lg font-medium text-gray-900 hover:text-primary transition-colors">
                  Learn More About Us <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Editorial */}
      <section className="py-24 md:py-32 bg-gray-50 text-gray-900 px-6 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <h2 className="font-serif text-4xl md:text-6xl font-bold">Our Services</h2>
            <Link to="/services" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors">
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {[
              { title: 'Lawn Care', img: 'https://sunlightwaterandus.com/wp-content/uploads/2023/04/What-Is-the-Best-Time-To-Seed-Lawn-in-NJ-500x383.png' },
              { title: 'Landscaping', img: 'https://mikesbackyardnursery.com/wp-content/uploads/2014/03/rsz_dsc_0034.jpg' },
              { title: 'Pressure Washing', img: 'https://www.hotsyab.com/wp-content/uploads/2019/05/Hotsy_Pressure_Washer_PSI_vs_GPM.jpg' }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden aspect-[3/4] mb-6 rounded-lg shadow-md">
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between pt-4">
                  <h3 className="font-serif text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">{service.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto mt-24">
            {[
              { title: 'Property Builds', img: 'https://assets.savills.com/properties/GBCBRSCKS260004/CKS260004_01_l_lis.jpg' },
              { title: 'Maintenance', img: 'https://img.freepik.com/free-photo/man-installs-heating-system-house-checks-pipes-with-wrench_169016-55822.jpg?semt=ais_hybrid&w=740&q=80' }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden aspect-[4/3] mb-6 rounded-lg shadow-md">
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between pt-4">
                  <h3 className="font-serif text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">{service.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Minimalist */}
      <section className="py-24 md:py-32 px-6 lg:px-16 xl:px-24 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 font-bold sticky top-32">
                Our <span className="text-primary">Process</span>
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-0">
                {[
                  { num: '01', title: 'Free Estimate', desc: 'Contact us for a free, no-obligation estimate for your property needs.' },
                  { num: '02', title: 'Schedule Service', desc: 'We work with your schedule to find the most convenient time for our team to arrive.' },
                  { num: '03', title: 'Professional Execution', desc: 'Our experienced crew arrives on time and completes the work to the highest standards.' },
                  { num: '04', title: 'Quality Check', desc: 'We ensure you are completely satisfied with the results before we consider the job done.' }
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col md:flex-row py-10 border-t border-gray-200 group"
                  >
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <span className="text-xl font-bold text-primary/40 group-hover:text-primary transition-colors duration-300">{step.num}</span>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="font-serif text-2xl md:text-3xl mb-4 text-gray-900 font-bold">{step.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed max-w-lg">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
