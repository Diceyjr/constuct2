import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Tag, ChevronRight, ArrowLeft, Search } from 'lucide-react';

const blogPosts = [
  { 
    id: 1, 
    title: 'Top 7 Construction Mistakes to Avoid in Edo State', 
    category: 'Construction Tips', 
    excerpt: 'Building in Benin City requires specific knowledge of soil types and environmental moisture. Here is how to avoid common pitfalls.', 
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800',
    author: 'Engr. Godwin I.',
    date: 'April 15, 2024',
    content: `
      Building a house in Nigeria is a significant investment, but many homeowners fall into traps that lead to cost overruns or structural failures. In Edo State, particularly Benin City, the "red soil" (laterite) has specific properties that must be considered.
      
      1. Skipping Soil Tests: Many skip this to save money, but the type of soil determines your foundation depth and type.
      2. Poor Drainage Planning: During the rainy season, poor drainage can undermine even the best foundations.
      3. Using Substandard Materials: Cheap blocks and weak iron rods lead to cracks that cost triple to fix later.
      4. Hiring "Face-only" Professionals: Always verify the credentials of your architect and site engineer.
      5. Ignoring Ventilation: Our climate is humid; a design that doesn't prioritize airflow will be uncomfortable and prone to mold.
    `
  },
  { 
    id: 2, 
    title: 'Modern Architecture Trends in Nigeria for 2024', 
    category: 'Design Trends', 
    excerpt: 'From minimalism to smart homes, see what is shaping the landscape of luxury housing in Lagos and Benin.', 
    image: 'https://images.unsplash.com/photo-1600585154340-be6199bc12a1?auto=format&fit=crop&q=80&w=800',
    author: 'Arch. Fatima A.',
    date: 'March 28, 2024',
    content: `
      The Nigerian architectural scene is evolving rapidly. We are seeing a shift away from overly ornate designs towards "Functional Minimalism."
      
      Smart home integration is no longer a luxury but a standard for new builds in GRA areas. This includes automated lighting, security systems that can be monitored from your phone, and energy-efficient cooling systems.
      
      Eco-friendly materials are also gaining traction. People are asking for sustainable stones and natural lighting solutions to reduce their carbon footprint and electricity bills.
    `
  },
  { 
    id: 3, 
    title: 'Why Solidwall Construction is Expanding to Asaba', 
    category: 'Company News', 
    excerpt: 'Following our success in Edo State, we are bringing "Solid Excellence" to the Delta State capital.', 
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800',
    author: 'Solidwall Media',
    date: 'March 10, 2024',
    content: `
      We are thrilled to announce that Solidwall Construction LTD is officially opening a consultancy office in Asaba, Delta State. 
      
      Our mission has always been to raise the bar for construction in Nigeria, and Asaba presents a burgeoning market of property owners who value quality and integrity. We look forward to building long-lasting relationships with our new clients across the Niger.
    `
  },
  { 
    id: 4, 
    title: 'How to Choose the Right Foundation for Your Soil', 
    category: 'Construction Tips', 
    excerpt: 'Understand the difference between strip, pad, and raft foundations and why the choice matters.', 
    image: 'https://images.unsplash.com/photo-1541919329513-35f7af297129?auto=format&fit=crop&q=80&w=800',
    author: 'Engr. Segun O.',
    date: 'Feb 15, 2024',
    content: `
      The foundation is the most critical part of your building. If the foundation fails, everything else is at risk. 
      
      In swampy areas common in parts of the Niger Delta, a raft foundation is often mandatory to distribute weight evenly. In more solid terrains like Uselu, a strip foundation might suffice for a bungalow. However, for high-rise structures, pile foundations are the gold standard.
    `
  },
  { 
    id: 5, 
    title: 'Maintaining Your Building: A Seasonal Guide', 
    category: 'Construction Tips', 
    excerpt: 'Practical tips to keep your property in top shape during the dusty Harmattan and rainy seasons.', 
    image: 'https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80&w=800',
    author: 'Solidwall Media',
    date: 'Jan 20, 2024',
    content: `
      Maintenance is cheaper than repair. During the Harmattan, dust accumulates in AC units and electrical panels, causing overheating. 
      
      Before the rains start, ensure your gutters are cleared and roof leaks are patched. A small leak in May can become a collapsed ceiling in August.
    `
  },
  { 
    id: 6, 
    title: 'The Future of Real Estate Investment in Edo State', 
    category: 'Design Trends', 
    excerpt: 'Why now is the perfect time to build your rental property or family home in Benin City.', 
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    author: 'Engr. Godwin I.',
    date: 'Jan 05, 2024',
    content: `
      With the expansion of roads and infrastructure projects in Edo State, properties in satellite areas are appreciating fast. 
      
      Investing in a well-built duplex today can yield significant rental income or resale value as the city expands outwards.
    `
  }
];

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  if (selectedPost) {
    return (
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
        <button 
          onClick={() => setSelectedPost(null)}
          className="flex items-center text-accent font-bold mb-8 hover:-translate-x-2 transition-transform"
        >
          <ArrowLeft className="mr-2" /> Back to Blog
        </button>
        
        <img 
          src={selectedPost.image} 
          alt={selectedPost.title} 
          className="w-full h-[400px] object-cover rounded-2xl mb-8 shadow-xl"
          referrerPolicy="no-referrer"
        />
        
        <div className="flex items-center gap-6 mb-6 text-sm text-gray-500 font-medium">
            <span className="bg-accent/10 text-accent px-3 py-1 rounded">{selectedPost.category}</span>
            <div className="flex items-center"><User size={16} className="mr-2" /> {selectedPost.author}</div>
            <div className="flex items-center"><Calendar size={16} className="mr-2" /> {selectedPost.date}</div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-8 leading-tight">
            {selectedPost.title}
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed">
            {selectedPost.content.split('\n').filter(p => p.trim() !== '').map((para, i) => (
                <p key={i}>{para}</p>
            ))}
        </div>

        <div className="mt-16 pt-16 border-t">
            <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.filter(p => p.id !== selectedPost.id).slice(0, 2).map(post => (
                    <div key={post.id} className="cursor-pointer group" onClick={() => setSelectedPost(post)}>
                         <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-lg mb-4" referrerPolicy="no-referrer" />
                         <h4 className="font-bold group-hover:text-accent transition-colors">{post.title}</h4>
                    </div>
                ))}
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-64 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1500" 
            alt="Blog Banner" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary-dark/80"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">News & Insights</h1>
          <p className="text-gray-400 max-w-xl mx-auto">Expert advice on construction, design, and real estate in Nigeria.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16">
                {/* Main Content */}
                <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {blogPosts.map((post) => (
                            <motion.div 
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                                onClick={() => setSelectedPost(post)}
                            >
                                <div className="relative overflow-hidden rounded-xl mb-6">
                                    <img 
                                        src={post.image} 
                                        alt={post.title} 
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                        referrerPolicy="no-referrer"
                                    />
                                    <span className="absolute top-4 left-4 bg-accent text-white px-3 py-1 text-xs font-bold rounded">
                                        {post.category}
                                    </span>
                                </div>
                                <div className="flex items-center text-xs text-gray-400 mb-3 space-x-4">
                                    <span className="flex items-center"><User size={12} className="mr-1" /> {post.author}</span>
                                    <span className="flex items-center"><Calendar size={12} className="mr-1" /> {post.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-primary-dark mb-4 group-hover:text-accent transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                    {post.excerpt}
                                </p>
                                <span className="text-accent font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                                    Read More <ChevronRight size={16} className="ml-1" />
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="lg:w-1/3 space-y-12">
                     <div className="bg-light-bg p-8 rounded-2xl">
                         <h4 className="text-xl font-bold mb-6 border-b-2 border-accent w-fit italic">Search Blog</h4>
                         <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Search articles..." 
                                className="w-full bg-white border border-gray-200 p-4 rounded-lg focus:outline-none focus:border-accent"
                            />
                            <Search className="absolute right-4 top-4 text-gray-400" size={20} />
                         </div>
                     </div>

                     <div className="bg-light-bg p-8 rounded-2xl">
                         <h4 className="text-xl font-bold mb-6 border-b-2 border-accent w-fit italic">Recent Posts</h4>
                         <div className="space-y-6 text-sm">
                             {blogPosts.slice(0, 3).map(post => (
                                 <div key={post.id} className="flex gap-4 cursor-pointer group" onClick={() => setSelectedPost(post)}>
                                     <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded-lg shrink-0" referrerPolicy="no-referrer" />
                                     <div>
                                         <h5 className="font-bold group-hover:text-accent transition-colors line-clamp-2">{post.title}</h5>
                                         <span className="text-xs text-gray-400">{post.date}</span>
                                     </div>
                                 </div>
                             ))}
                         </div>
                     </div>

                     <div className="bg-primary-dark p-8 rounded-2xl text-white">
                         <h4 className="text-xl font-bold mb-6 italic">Newsletter</h4>
                         <p className="text-gray-400 text-sm mb-6">Stay updated with building tips and industry news delivered to your inbox.</p>
                         <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                             <input type="text" placeholder="Your Name" className="w-full bg-white/10 border border-white/20 p-4 rounded-lg focus:outline-none focus:border-accent" />
                             <input type="email" placeholder="Your Email" className="w-full bg-white/10 border border-white/20 p-4 rounded-lg focus:outline-none focus:border-accent" />
                             <button className="w-full bg-accent text-white p-4 rounded-lg font-bold hover:bg-opacity-90 transition-all">Subscribe Now</button>
                         </form>
                     </div>
                </aside>
            </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
