import { motion } from 'motion/react';
import { Ruler, Home, Building2, Settings, Shield, Users, Check, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    id: 'architectural',
    title: 'Architectural Design',
    icon: <Ruler size={48} />,
    desc: 'Our architectural design service blends aesthetics with functionality. We don’t just draw buildings; we design experiences. From conceptual sketches to detailed 3D renderings, our team ensures every inch of your space is optimized for its purpose.',
    list: [
        'Conceptual Design & 3D Modeling',
        'Interior Space Planning',
        'Landscape Architectural Design',
        'Building Plan Documentation for Approval'
    ]
  },
  {
    id: 'residential',
    title: 'Residential Construction',
    icon: <Home size={48} />,
    desc: 'We specialize in building modern homes that reflect the personality of their owners. Whether you are looking for a luxury mansion in GRA Benin or a family bungalow in Ugbowo, our residential team delivers with precision.',
    list: [
        'Custom Home Building',
        'Estate Development & Planning',
        'Townhouses & Luxury Duplexes',
        'Sustainable Green Housing'
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Buildings',
    icon: <Building2 size={48} />,
    desc: 'Solidwall Construction LTD builds infrastructure that powers businesses. We understand the unique requirements of commercial spaces—durability, accessibility, and professional appeal.',
    list: [
        'Corporate Office Complexes',
        'Shopping Malls & Retail Spaces',
        'Warehouse & Industrial Facilities',
        'Hotels & Recreational Centers'
    ]
  },
  {
    id: 'renovation',
    title: 'Renovation & Remodelling',
    icon: <Settings size={48} />,
    desc: 'Breathe new life into aging structures. Our renovation service focuses on modernizing designs while reinforcing structural integrity. We handle everything from minor interior upgrades to full-scale building overhauls.',
    list: [
        'Structural Reinforcement',
        'Contemporary Interior Remodelling',
        'Facade Upgrades',
        'Kitchen & Bathroom Modernization'
    ]
  },
  {
    id: 'structural',
    title: 'Structural Engineering',
    icon: <Shield size={48} />,
    desc: 'The safety of any building lies in its structural engineering. We provide expert analysis and calculations to ensure your building can withstand the elements and the passage of time.',
    list: [
        'Foundation Analysis & Design',
        'Steel & Concrete Structure Design',
        'Structural Integrity Assessment',
        'Soil Test Interpretation'
    ]
  },
  {
    id: 'management',
    title: 'Project Management & Supervision',
    icon: <Users size={48} />,
    desc: 'We take the stress out of construction. Our project managers oversee every detail—from material procurement to site safety—ensuring your project is delivered on time and within budget.',
    list: [
        'Direct Labor & Site Supervision',
        'Quality Control & Material Inspection',
        'Budget Auditing & Cost Control',
        'Regulatory Compliance Management'
    ]
  }
];

const ServicesPage = ({ onNavigate }: { onNavigate: (page: any) => void }) => {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-64 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1500" 
            alt="Services Banner" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary-dark/80"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Our Services</h1>
          <p className="text-gray-400 max-w-xl mx-auto">From concept to completion, we provide end-to-end solutions for all your construction needs.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {servicesData.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 space-y-6">
                  <div className="text-accent mb-4">{service.icon}</div>
                  <h3 className="text-3xl font-bold text-primary-dark underline decoration-accent underline-offset-8">{service.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.list.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700 font-medium italic">
                        <Check size={18} className="text-accent mr-3 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="mt-8 bg-primary-dark text-white px-10 py-4 rounded font-bold hover:bg-accent transition-all flex items-center"
                  >
                    Request This Service <ArrowRight className="ml-2" size={18} />
                  </button>
                </div>
                <div className="lg:w-1/2">
                   <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <img 
                        src={`https://images.unsplash.com/photo-${idx % 2 === 0 ? '1503387762-592dea58ef23' : '1504307651254-35680f356dfd'}?auto=format&fit=crop&q=80&w=1200`} 
                        alt={service.title} 
                        className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-light-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-20 text-primary-dark">Our 5-Step Execution Process</h2>
            <div className="relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
                    {[
                        { title: 'Consultation', desc: 'Understanding your vision, budget, and requirements.' },
                        { title: 'Design', desc: 'Crafting the blueprint & 3D visualization.' },
                        { title: 'Approval', desc: 'Securing necessary building permits and documentation.' },
                        { title: 'Construction', desc: 'Bringing the design to life with quality materials.' },
                        { title: 'Handover', desc: 'Final inspection and key presentation.' }
                    ].map((step, idx) => (
                        <div key={idx} className="text-center group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-white border-4 border-accent rounded-full flex items-center justify-center text-xl font-bold text-accent group-hover:bg-accent group-hover:text-white transition-all transform group-hover:scale-110">
                                {idx + 1}
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-primary-dark">{step.title}</h4>
                            <p className="text-gray-500 text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
