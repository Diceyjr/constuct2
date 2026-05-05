import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Clock, Mail, MessageSquare, Facebook, Instagram, Linkedin, Send, ChevronDown, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  const faqs = [
    { q: "How long does it take to build a 4-bedroom duplex?", a: "Typically, a standard 4-bedroom duplex takes between 6 to 9 months from foundation to handover, depending on the complexity of the design and funding schedule." },
    { q: "Do you handle building approvals in Edo State?", a: "Yes, we handle the entire process. We prepare the architectural and structural drawings and process them through the Edo State Ministry of Physical Planning and Urban Development." },
    { q: "What is your pricing model for architectural designs?", a: "Our pricing depends on the project scope and detail required. We offer fixed-price packages for standard residential designs and percentage-based fees for large commercial projects." },
    { q: "Do you build outside of Benin City?", a: "Absolutely. While we are based in Benin, we have completed projects in Asaba, Warri, Sapele, and other parts of Edo, Delta, and neighboring states." },
    { q: "What kind of guarantee do you offer on your structures?", a: "We offer a 10-year structural warranty on all buildings we construct. We stand by our work and ensure that our engineering meets national standards." },
    { q: "Can I bring my own architectural design for you to build?", a: "Yes, we can work with external designs. However, our internal engineering team will review them to ensure they meet our safety and structural standards before we commence construction." }
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-64 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1500" 
            alt="Contact Banner" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary-dark/80"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Get In Touch</h1>
          <p className="text-gray-400 max-w-xl mx-auto">We're here to answer any questions you have about your next building project.</p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: <MapPin className="text-accent" size={32} />, title: "Visit Us", content: "237A Ugbowo Lagos Rd, Uselu, Benin City 300103, Edo State." },
                    { icon: <Phone className="text-accent" size={32} />, title: "Call Us", content: "0816 293 0106 / 0800 SOLIDWALL" },
                    { icon: <Clock className="text-accent" size={32} />, title: "Working Hours", content: "Monday – Saturday: 9:00 AM – 6:00 PM" }
                ].map((item, idx) => (
                    <div key={idx} className="bg-light-bg p-10 rounded-2xl text-center space-y-4 hover:shadow-lg transition-all border-b-4 border-transparent hover:border-accent">
                        <div className="flex justify-center">{item.icon}</div>
                        <h4 className="text-xl font-bold text-primary-dark">{item.title}</h4>
                        <p className="text-gray-500">{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-20">
                {/* Contact Form */}
                <div className="lg:w-3/5">
                    {formStatus === 'success' ? (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-green-50 border-2 border-green-200 p-12 rounded-2xl text-center space-y-6"
                        >
                            <div className="flex justify-center"><CheckCircle size={64} className="text-green-500" /></div>
                            <h2 className="text-3xl font-bold text-green-800">Message Sent Successfully!</h2>
                            <p className="text-green-700 text-lg">Thank you for reaching out to Solidwall Construction. We'll be in touch within 24 hours to discuss your project.</p>
                            <button onClick={() => setFormStatus('idle')} className="text-green-800 underline font-bold underline-offset-4">Send another message</button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary-dark uppercase">Full Name</label>
                                    <input required type="text" className="w-full bg-light-bg border border-gray-200 p-4 rounded-lg focus:outline-none focus:border-accent" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary-dark uppercase">Email Address</label>
                                    <input required type="email" className="w-full bg-light-bg border border-gray-200 p-4 rounded-lg focus:outline-none focus:border-accent" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary-dark uppercase">Phone Number</label>
                                    <input required type="tel" className="w-full bg-light-bg border border-gray-200 p-4 rounded-lg focus:outline-none focus:border-accent" placeholder="081 2345 6789" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary-dark uppercase">Service Interested In</label>
                                    <select className="w-full bg-light-bg border border-gray-200 p-4 rounded-lg focus:outline-none focus:border-accent appearance-none">
                                        <option>Architectural Design</option>
                                        <option>Residential Construction</option>
                                        <option>Commercial Buildings</option>
                                        <option>Renovation & Remodelling</option>
                                        <option>Structural Engineering</option>
                                        <option>Project Management</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary-dark uppercase">Project Type</label>
                                    <select className="w-full bg-light-bg border border-gray-200 p-4 rounded-lg focus:outline-none focus:border-accent appearance-none">
                                        <option>Residential</option>
                                        <option>Commercial</option>
                                        <option>Renovation</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary-dark uppercase">Budget Range</label>
                                    <select className="w-full bg-light-bg border border-gray-200 p-4 rounded-lg focus:outline-none focus:border-accent appearance-none">
                                        <option>₦5M - ₦20M</option>
                                        <option>₦20M - ₦50M</option>
                                        <option>₦50M - ₦100M</option>
                                        <option>₦100M+</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary-dark uppercase">Your Message</label>
                                <textarea required rows={5} className="w-full bg-light-bg border border-gray-200 p-4 rounded-lg focus:outline-none focus:border-accent" placeholder="Tell us about your project..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-accent text-white p-5 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all flex items-center justify-center">
                                Send Message <Send className="ml-3" size={20} />
                            </button>
                        </form>
                    )}
                </div>

                {/* Info & Map */}
                <div className="lg:w-2/5 space-y-10">
                    <div className="bg-primary-dark text-white p-10 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-6 italic">Connect With Us</h3>
                        <p className="text-gray-400 mb-8">Follow our social media pages to see daily site updates and design inspiration.</p>
                        <div className="grid grid-cols-2 gap-4">
                            <a href="#" className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg hover:bg-accent transition-colors">
                                <Facebook size={20} /> <span>Facebook</span>
                            </a>
                            <a href="#" className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg hover:bg-accent transition-colors">
                                <Instagram size={20} /> <span>Instagram</span>
                            </a>
                            <a href="#" className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg hover:bg-accent transition-colors">
                                <Linkedin size={20} /> <span>LinkedIn</span>
                            </a>
                            <a href="https://wa.me/2348162930106" target="_blank" className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg hover:bg-[#25D366] transition-colors">
                                <MessageSquare size={20} /> <span>WhatsApp</span>
                            </a>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/10">
                            <a 
                                href="https://wa.me/2348162930106" 
                                target="_blank"
                                className="w-full bg-[#25D366] text-white p-4 rounded-lg font-bold flex items-center justify-center hover:opacity-90 transition-opacity"
                            >
                                <MessageSquare size={20} className="mr-3" /> Chat with MD on WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden h-80 grayscale hover:grayscale-0 transition-all duration-500 shadow-xl border">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.253013898118!2d5.5997233748231!3d6.361546793628468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3a58cf0b407%3A0xe74e790c3707054f!2s237a%20Lagos%20Rd%2C%20Uselu%20300103%2C%20Benin%20City!5e0!3m2!1sen!2sng!4v1709680000000!5m2!1sen!2sng" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-dark">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden">
                        <button 
                            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                            className="w-full p-6 text-left flex justify-between items-center group"
                        >
                            <span className="font-bold text-primary-dark group-hover:text-accent transition-colors">{faq.q}</span>
                            <ChevronDown size={20} className={`text-accent transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                            {openFaq === idx && (
                                <motion.div 
                                    initial={{ height: 0 }}
                                    animate={{ height: 'auto' }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 text-gray-600 border-t border-gray-50 pt-4">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
