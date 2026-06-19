import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#1a1a1a] font-sans">
      <Navbar />
      <section className="p-8 md:p-16 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-light mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-lg leading-relaxed opacity-80">
          <p>Last Updated: June 2026</p>
          <h2 className="text-2xl font-serif mt-8">1. Information We Collect</h2>
          <p>We collect information you provide directly to us through our WhatsApp integration, website, and customer service channels. This includes your name, phone number, payment information, and order history.</p>
          
          <h2 className="text-2xl font-serif mt-8">2. How We Use Your Information</h2>
          <p>We use the information we collect to process your 22K gold orders, communicate with you via WhatsApp regarding updates and marketing, and improve our services.</p>
          
          <h2 className="text-2xl font-serif mt-8">3. Facebook and Meta Compliance</h2>
          <p>As a platform utilizing WhatsApp Business APIs, we comply strictly with Meta's Platform Terms and Developer Policies. We do not sell your personal data. Data shared with Meta is strictly for the purpose of facilitating communication, providing platform analytics, and ensuring the delivery of your transaction updates.</p>
          
          <h2 className="text-2xl font-serif mt-8">4. Data Security & Retention</h2>
          <p>We implement bank-grade security measures to protect your personal and financial data against unauthorized access. We retain your information only as long as necessary to provide our services or comply with legal and financial obligations.</p>
          
          <h2 className="text-2xl font-serif mt-8">5. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us via our Contact page or email us at privacy@auragoldelite.com.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
