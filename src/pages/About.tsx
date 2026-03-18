import { motion } from 'motion/react';

export default function About() {
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
              About <span className="text-primary">Us</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Split Content */}
      <section className="py-24 md:py-48 px-6 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 lg:col-span-5"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://instagram.fdac2-2.fna.fbcdn.net/v/t39.30808-6/484508012_1215724673886907_4083255862637308941_n.jpg?stp=c0.0.1440.1079a_cp6_dst-jpg_e35_s1080x1080_tt6&_nc_cat=101&ig_cache_key=MzA4NzY2ODIxMDc0NTE2OTA4Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=E2kGhnfHYeMQ7kNvwEjDjEN&_nc_oc=Adl0RjgmDXvgyVPs6gTdfWX-JK7Tp9xhVNrEfF0ru8Oi75PhUxLm4-yRdyrzPbnbfdg&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=-4_eNL-9aEW4QWl_Ff-v5Q&_nc_ss=8&oh=00_AfytcLYIngwVvfX7tPvpc_FlJwnCl3t6b_BBQw0AH4qUCw&oe=69BD15DC" 
                alt="Torrez Lawn Care Team" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 lg:col-span-7 flex flex-col justify-center"
          >
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">Who We Are</h2>
            <p className="text-2xl md:text-3xl leading-relaxed text-gray-900 mb-16 font-serif font-bold text-balance">
              Torrez Lawn Care Services is a locally owned and operated landscaping company dedicated to providing top-tier lawn maintenance and garden care to homeowners in Hammond, Louisiana. We believe that a beautiful lawn is the foundation of a welcoming home, and we treat every property as if it were our own.
            </p>

            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-8 border-t border-gray-200 pt-12">Why Torrez Lawn Care?</h2>
            <ul className="space-y-10">
              {[
                { title: 'Local Expertise', desc: 'We understand the specific climate and soil needs of Louisiana.' },
                { title: 'Reliability', desc: 'We show up on time and complete the job to your satisfaction.' },
                { title: 'Quality Workmanship', desc: 'We use professional-grade equipment and techniques.' },
                { title: 'Customer First', desc: 'Your satisfaction is our top priority. We communicate clearly and honestly.' }
              ].map((item, i) => (
                <li key={i} className="group">
                  <h3 className="font-serif text-2xl mb-3 text-gray-900 font-bold group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-lg">{item.desc}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
