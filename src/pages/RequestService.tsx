import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function RequestService() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    serviceNeeded: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '', phone: '', email: '', address: '', serviceNeeded: '', message: ''
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="w-full bg-white text-gray-900 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-primary/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[180px] rounded-full pointer-events-none" />
      
      <section className="relative z-10 pt-48 pb-24 md:pt-64 md:pb-32 px-6 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[8rem] leading-[1.1] font-bold tracking-tight mb-8">
              Request a <span className="text-primary">Quote</span>
            </h1>
            <p className="text-xl text-gray-600 font-sans max-w-md leading-relaxed">
              Fill out the form below to schedule an assessment of your property. We will be in touch shortly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100"
          >
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-24">
                <div className="w-24 h-24 rounded-full border-4 border-primary/20 flex items-center justify-center mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary" />
                </div>
                <h3 className="font-serif text-4xl mb-4 text-gray-900 font-bold">Request Received</h3>
                <p className="text-gray-600 text-lg">Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Select Service *</label>
                    <select
                      name="serviceNeeded"
                      required
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                    >
                      <option value="" disabled>Select Service</option>
                      <option value="Lawn Maintenance">Lawn Maintenance</option>
                      <option value="Mulch Installation">Mulch Installation</option>
                      <option value="Pine Straw Installation">Pine Straw Installation</option>
                      <option value="Garden Maintenance">Garden Maintenance</option>
                      <option value="Tree Trimming">Tree Trimming</option>
                      <option value="Other">Other / Multiple</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Property Address *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="123 Main St, Hammond, LA"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Additional Details</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about what you need..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'} 
                  {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>
    </div>
  );
}
