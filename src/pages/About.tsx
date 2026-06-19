import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#1a1a1a] font-sans">
      <Navbar />
      <section className="p-16">
        <h1 className="font-serif text-6xl font-light mb-8">About AuraGold Elite</h1>
        <p className="text-lg leading-relaxed opacity-80 max-w-3xl">
          AuraGold Elite is a WhatsApp-first CRM and automation platform specifically engineered for high-end jewelry businesses. 
          We bridge the gap between traditional luxury jewelry retail and modern digital convenience.
        </p>
      </section>
      <Footer />
    </div>
  );
}
