import { motion } from 'motion/react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      location: 'Hammond, LA',
      text: 'Torrez Lawn Care completely transformed our front yard. They were professional, on time, and the pine straw installation looks incredible. Highly recommend their services!'
    },
    {
      name: 'Michael Broussard',
      location: 'Ponchatoula, LA',
      text: 'I\'ve been using them for regular lawn maintenance for over a year now. My grass has never looked greener or healthier. They are reliable and always do a thorough job.'
    },
    {
      name: 'Emily Chen',
      location: 'Covington, LA',
      text: 'We hired them for a major garden cleanup and mulch installation before hosting a family event. They worked quickly and the results were stunning. Great attention to detail.'
    },
    {
      name: 'David Thompson',
      location: 'Mandeville, LA',
      text: 'Very impressed with their tree trimming service. They safely removed some large overhanging branches and cleaned up every bit of debris before leaving. True professionals.'
    },
    {
      name: 'Jessica Landry',
      location: 'Madisonville, LA',
      text: 'Finding a dependable lawn care service was tough until we found Torrez. Their communication is excellent, pricing is fair, and the quality of work is top-notch.'
    }
  ];

  return (
    <div className="w-full bg-paper">
      {/* Header */}
      <section className="relative pt-48 pb-24 md:pt-64 md:pb-32 px-6 lg:px-16 xl:px-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/20 blur-[180px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-[8rem] leading-[1.1] font-bold tracking-tight mb-8"
          >
            Client <span className="text-primary">Testimonials</span>
          </motion.h1>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-48 px-6 lg:px-16 xl:px-24">
        <div className="max-w-4xl mx-auto space-y-32 md:space-y-48">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative text-center"
            >
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-[10rem] font-serif text-primary/10 leading-none select-none">
                "
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 leading-relaxed mb-12 relative z-10 font-bold text-balance">
                {testimonial.text}
              </p>
              <div className="flex flex-col items-center justify-center">
                <div className="w-px h-12 bg-primary/30 mb-6" />
                <div>
                  <h4 className="font-serif text-2xl text-gray-900 font-bold mb-2">{testimonial.name}</h4>
                  <p className="text-sm font-bold uppercase tracking-wider text-primary">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
