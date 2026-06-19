import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#1a1a1a] font-sans">
      <Navbar />
      <section className="p-8 md:p-16 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-light mb-8">Terms and Conditions</h1>
        <div className="space-y-6 text-lg leading-relaxed opacity-80">
          <p>Last Updated: June 2026</p>
          <p>Welcome to AuraGold Elite. By accessing our platform or interacting with our services via WhatsApp, you agree to be bound by these Terms and Conditions.</p>
          
          <h2 className="text-2xl font-serif mt-8">1. Use of Services</h2>
          <p>AuraGold Elite provides a WhatsApp-based CRM and gold accumulation platform. You agree to use the service only for lawful purposes. Integrating, utilizing, or interacting with our WhatsApp bot constitutes an agreement to our terms of communication.</p>
          
          <h2 className="text-2xl font-serif mt-8">2. Meta & WhatsApp Compliance</h2>
          <p>You acknowledge that our services run on top of WhatsApp and Meta's infrastructure. By using AuraGold Elite, you also agree to comply with WhatsApp's Terms of Service and Meta's User Policies. AuraGold Elite is not liable for service outages caused by Meta's platforms.</p>
          
          <h2 className="text-2xl font-serif mt-8">3. Gold Valuation & Payments</h2>
          <p>All plans related to 22K gold accumulation are subject to real-time market fluctuations. The price locked in at the time of deposit is final. All payments are processed securely through certified payment gateways.</p>

          <h2 className="text-2xl font-serif mt-8">4. Liability</h2>
          <p>We strive to provide uninterrupted service, but AuraGold Elite is provided "as is" and without warranties of any kind. We are not liable for direct, indirect, or incidental damages resulting from the use of our platform.</p>

          <h2 className="text-2xl font-serif mt-8">5. Amendments</h2>
          <p>We reserve the right to modify these Terms at any time. Continued use of the platform after changes indicates your acceptance of the updated terms.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
