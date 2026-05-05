import { motion } from 'motion/react';
import { Target, Eye, Shield, Award, Lightbulb, Users, CheckCircle } from 'lucide-react';

const AboutPage = ({ onNavigate }: { onNavigate: (page: any) => void }) => {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-80 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1500" 
            alt="About Banner" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary-dark/80"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-gray-300 text-lg flex items-center justify-center space-x-2">
            <span className="cursor-pointer hover:text-accent" onClick={() => onNavigate('home')}>Home</span>
            <span>/</span>
            <span className="text-accent">About Us</span>
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary-dark border-l-4 border-accent pl-4">Our Solid Foundation</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Founded over a decade ago in the heart of Benin City, Solidwall Construction LTD began with a simple yet powerful vision: to provide high-quality architectural designs and robust construction services that stand the test of time. 
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                What started as a small team of passionate engineers and architects has grown into a leading construction firm in Edo State. We pride ourselves on our deep roots in the local community, understanding the unique geological and environmental conditions of Nigeria to build structures that are not only beautiful but structurally superior.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg font-medium text-primary-dark">
                "We don't just build walls; we build trust, safety, and legacy for the next generation of Nigerians."
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" alt="Site Work" className="rounded-lg shadow-lg aspect-square object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800" alt="Team Meeting" className="rounded-lg shadow-lg mt-8 aspect-square object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
               whileHover={{ y: -10 }}
               className="bg-white p-12 rounded-2xl shadow-xl space-y-6 border-t-8 border-primary-dark"
            >
              <div className="w-16 h-16 bg-primary-dark/10 rounded-full flex items-center justify-center text-primary-dark">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold text-primary-dark">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To deliver innovative, functional, and aesthetically pleasing architectural designs and construction solutions that enhance the quality of life for our clients while maintaining the highest standards of safety and integrity.
              </p>
            </motion.div>

            <motion.div 
               whileHover={{ y: -10 }}
               className="bg-white p-12 rounded-2xl shadow-xl space-y-6 border-t-8 border-accent"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-bold text-primary-dark">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the most trusted and preferred construction firm in Nigeria, recognized for our commitment to "Solid Excellence" and our role in shaping the masterpiece of modern African architecture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-primary-dark uppercase tracking-widest">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: 'Integrity', icon: <Shield />, text: 'We maintain absolute transparency and honesty in all our dealings.' },
              { title: 'Quality', icon: <Award />, text: 'We never compromise on material quality or structural integrity.' },
              { title: 'Innovation', icon: <Lightbulb />, text: 'We embrace modern technology and contemporary design trends.' },
              { title: 'Client-First', icon: <Users />, text: 'Your satisfaction and safety are our primary motivations.' }
            ].map((value, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-light-bg rounded-lg flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-16 text-primary-dark">Meet Our Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Engr. Godwin Ighodaro', title: 'MD/CEO', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
              { name: 'Arch. Fatima Abubakar', title: 'Lead Architect', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
              { name: 'Engr. Segun Obaloluwa', title: 'Site Engineer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
              { name: 'Mrs. Chioma Okeke', title: 'Project Manager', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' }
            ].map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent/20">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-bold text-primary-dark">{member.name}</h4>
                <p className="text-accent font-medium text-sm">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 bg-primary-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-around gap-8 opacity-60">
            <span className="text-2xl font-bold italic tracking-widest border-2 border-white/20 px-6 py-2">COREN REGISTERED</span>
            <span className="text-2xl font-bold italic tracking-widest border-2 border-white/20 px-6 py-2">NIA MEMBER</span>
            <span className="text-2xl font-bold italic tracking-widest border-2 border-white/20 px-6 py-2">NIOB CERTIFIED</span>
            <span className="text-2xl font-bold italic tracking-widest border-2 border-white/20 px-6 py-2">QHSE COMPLIANT</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Why Choose Solidwall?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We combine local expertise with international standards to deliver unparalleled construction value.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Material Transparency', text: 'We source only tested and certified materials, ensuring your building never fails.', icon: <CheckCircle className="text-accent" /> },
              { title: 'Timely Delivery', text: 'Our project management frameworks ensure milestones are achieved on schedule.', icon: <CheckCircle className="text-accent" /> },
              { title: 'Local Expertise', text: 'Based in Benin City, we know the terrain, the soil, and the people better than anyone.', icon: <CheckCircle className="text-accent" /> }
            ].map((item, idx) => (
              <div key={idx} className="flex space-x-4 p-8 bg-light-bg rounded-lg">
                <div className="shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-primary-dark">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
