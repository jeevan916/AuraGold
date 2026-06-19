import { useState, FormEvent } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#1a1a1a] font-sans">
      <Navbar />
      <section className="p-16 max-w-4xl mx-auto">
        <h1 className="font-serif text-6xl font-light mb-8">Contact Us</h1>
        <p className="text-lg leading-relaxed opacity-80 mb-12">
          Get in touch with our team to learn more about AuraGold Elite.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <input type="text" placeholder="Name" className="w-full bg-transparent border-b border-[#1a1a1a]/30 py-3 focus:outline-none focus:border-[#1a1a1a]" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-[#1a1a1a]/30 py-3 focus:outline-none focus:border-[#1a1a1a]" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
          </div>
          <input type="text" placeholder="Subject" className="w-full bg-transparent border-b border-[#1a1a1a]/30 py-3 focus:outline-none focus:border-[#1a1a1a]" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} required />
          <textarea placeholder="Message" className="w-full bg-transparent border-b border-[#1a1a1a]/30 py-3 focus:outline-none focus:border-[#1a1a1a] h-32" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required />
          <button type="submit" className="bg-[#1a1a1a] text-[#f5f2ed] rounded-full px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#1a1a1a]/80 transition">
            Send Message
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}
