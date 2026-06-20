import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#1a1a1a] font-sans">
      <Navbar />
      <section className="px-8 py-24 md:px-16 md:py-32 max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl font-light mb-12 tracking-tight"
        >
          Redefining the <br /> <span className="italic text-[#d4af37]">Jewelry Retail</span> Experience.
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg leading-relaxed opacity-80"
          >
            <p>
              AuraGold Elite is a WhatsApp-first CRM and automation platform specifically engineered for high-end jewelry businesses. We bridge the gap between traditional luxury jewelry retail and modern digital convenience.
            </p>
            <p>
              Founded with the vision to empower jewelers with state-of-the-art tools, we ensure that every customer's gold buying journey is seamless, trusted, and fully automated—leaving you to do what you do best: craft and curate exquisite jewelry.
            </p>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="bg-white p-8 rounded-3xl shadow-sm border border-[#1a1a1a]/5"
          >
             <h3 className="font-serif text-3xl mb-4">Our Values</h3>
             <ul className="space-y-4">
               {[
                 { title: "Trust & Transparency", desc: "Every transaction securely logged and visible." },
                 { title: "Seamless Automation", desc: "No manual follow-up or messy accounting." },
                 { title: "Customer Centricity", desc: "Zero friction for the end-consumer." }
               ].map((v, i) => (
                 <li key={i} className="flex flex-col border-b border-[#1a1a1a]/10 pb-4 last:border-0 last:pb-0">
                   <strong className="text-[#1a1a1a] mb-1">{v.title}</strong>
                   <span className="text-sm opacity-60">{v.desc}</span>
                 </li>
               ))}
             </ul>
             
             <div className="mt-8 pt-6 border-t border-[#1a1a1a]/10">
               <Link to="/contact" className="inline-block w-full text-center bg-[#1a1a1a] text-[#f5f2ed] rounded-full px-6 py-4 text-sm uppercase tracking-widest hover:bg-[#1a1a1a]/80 transition">
                  Partner With Us
               </Link>
             </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
