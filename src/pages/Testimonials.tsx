import { motion } from 'motion/react';
import { Star, Quote, Play } from 'lucide-react';

const testimonials = [
  { name: "Engr. Osasere Ighodaro", loc: "GRA, Benin City", text: "Solidwall Construction delivered my duplex on time and within budget. Their attention to structural integrity is unmatched in Edo State. They handled every approval with the state ministry effortlessly.", date: "Feb 12, 2024", type: "Residential Project" },
  { name: "Mrs. Blessing Okon", loc: "Ugbowo, Benin", text: "The team is professional and transparent. From the design phase to the finishing, they exceeded my expectations. My family loves our new bungalow! The finishing is world-class.", date: "Jan 05, 2024", type: "Home Renovation" },
  { name: "Chief Emeka Nwosu", loc: "Asaba, Delta", text: "I hired them for my commercial warehouse design and management. Their site supervision is top-notch. They saved me millions in material waste through diligent tracking.", date: "Nov 20, 2023", type: "Commercial Project" },
  { name: "Barr. Osazuwa Eke", loc: "Etete, Benin City", text: "A company that actually keeps its word. They are the best architectural designers in Benin. My office complex is a landmark in Etete today because of them.", date: "Oct 15, 2023", type: "Office Hub" },
  { name: "Dr. (Mrs) Amina Bello", loc: "Ekpoma, Edo", text: "I was worried about building while being abroad. Solidwall sent me weekly video updates and kept the project running smoothly. Trust is their biggest asset.", date: "Sept 12, 2023", type: "4-Bedroom Villa" },
  { name: "Mr. Kelvin Ojo", loc: "Warri, Delta", text: "The structural redesign they did for my half-collapsing fence saved my property. They are experts in soil analysis and foundation reinforcement.", date: "Aug 30, 2023", type: "Structural Reinforcement" },
  { name: "Pastor Joshua Ibe", loc: "Sapele Rd, Benin", text: "Our church expansion project was handled with such grace and professionalism. The cost control was excellent, and the design is truly uplifting.", date: "July 22, 2023", type: "Civic Building" },
  { name: "Miss Anita Edosa", loc: "Ogba, Benin", text: "I love my modern kitchen remodel! They turned a dark old kitchen into a bright, contemporary space. All within two weeks!", date: "June 10, 2023", type: "Interior Remodelling" },
  { name: "Prince Adewole", loc: "GRA, Benin", text: "Solidwall is my go-to for all my real estate developments. Professionalism, quality, and speed. They never disappoint.", date: "May 02, 2023", type: "Estate Development" }
];

const TestimonialsPage = () => {
  return (
    <div className="pt-20">
       {/* Hero Banner */}
       <section className="relative h-64 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=1500" 
            alt="Testimonials Banner" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary-dark/80"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Client Reviews</h1>
          <p className="text-gray-400 max-w-xl mx-auto">See why hundreds of property owners in Benin City trust Solidwall.</p>
        </div>
      </section>

      {/* Ratings Summary */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-light-bg rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="text-center md:text-left">
                    <div className="text-6xl font-display font-bold text-primary-dark mb-2">4.9 <span className="text-2xl text-gray-400">/ 5</span></div>
                    <div className="flex text-yellow-400 mb-2 justify-center md:justify-start">
                        {[...Array(5)].map((_, i) => <Star key={i} size={28} fill="currentColor" />)}
                    </div>
                    <p className="text-gray-500 font-medium italic">Based on 36 Google Reviews</p>
                </div>
                <div className="flex-1 max-w-md w-full space-y-3">
                    {[
                        { star: 5, perc: 95 },
                        { star: 4, perc: 5 },
                        { star: 3, perc: 0 },
                        { star: 2, perc: 0 },
                        { star: 1, perc: 0 },
                    ].map((row) => (
                        <div key={row.star} className="flex items-center gap-4">
                            <span className="text-sm font-bold w-4">{row.star}</span>
                            <Star size={14} className="text-gray-300" />
                            <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-accent" style={{ width: `${row.perc}%` }}></div>
                            </div>
                            <span className="text-xs text-gray-400 w-8">{row.perc}%</span>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <p className="text-gray-600 mb-4 font-medium italic">Happy with our work?</p>
                    <button className="bg-accent text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all">Leave a Google Review</button>
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all relative group"
              >
                <Quote className="absolute top-4 right-4 text-accent/10 group-hover:text-accent/20 transition-colors" size={48} />
                <div className="flex text-yellow-400 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="pt-6 border-t flex justify-between items-end">
                    <div>
                        <h4 className="font-bold text-primary-dark">{t.name}</h4>
                        <p className="text-xs text-gray-400">{t.loc}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-1">{t.type}</p>
                        <p className="text-[10px] text-gray-400">{t.date}</p>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Placeholder */}
      <section className="py-20 bg-light-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-12 text-primary-dark">Client Video Reviews</h2>
                <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl group cursor-pointer">
                    <img 
                        src="https://images.unsplash.com/photo-1541919329513-35f7af297129?auto=format&fit=crop&q=80&w=1200" 
                        alt="Video Thumbnail" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                            <Play fill="currentColor" size={32} className="ml-1" />
                        </div>
                    </div>
                    <div className="absolute bottom-6 left-6 text-white text-left">
                        <p className="text-sm font-bold uppercase tracking-widest bg-accent px-3 py-1 rounded inline-block mb-3">New Project Finish</p>
                        <h3 className="text-xl md:text-2xl font-bold">Tour of the Okon Family Duplex in Ugbowo</h3>
                    </div>
                </div>
          </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
