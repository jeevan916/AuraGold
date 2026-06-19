import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DataDeletion() {
  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#1a1a1a] font-sans">
      <Navbar />
      <section className="p-8 md:p-16 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-light mb-8">User Data Deletion</h1>
        <div className="space-y-6 text-lg leading-relaxed opacity-80">
          <p>At AuraGold Elite, we respect your privacy and your right to control your personal data, in strict compliance with the General Data Protection Regulation (GDPR) and Meta Platform Terms.</p>
          
          <h2 className="text-2xl font-serif mt-8">How to Request Data Deletion</h2>
          <p>If you wish to delete your account and all associated data from AuraGold Elite, you have two simple options:</p>
          
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Via WhatsApp:</strong> Send the message "DELETE MY DATA" to our official WhatsApp Business number. Our automated system will securely log the request, verify your identity, and process the deletion within 30 days.
            </li>
            <li>
              <strong>Via Email:</strong> Send an email to <strong>privacy@auragoldelite.com</strong> with the subject line "Data Deletion Request." Please include the phone number associated with your WhatsApp account so we can locate your records accurately.
            </li>
          </ol>

          <h2 className="text-2xl font-serif mt-8">What Happens When You Request Deletion?</h2>
          <p>Upon receiving and verifying your request, we will remove your personal information, communication logs, and contact details from our active databases.</p>
          <p className="border-l-4 border-[#1a1a1a]/30 pl-4 py-2 italic bg-[#1a1a1a]/5">
            <strong>Important Note:</strong> Any active 22K gold accumulation plans must be completely resolved (either via physical delivery of your jewellery or formal liquidation) before complete account deletion can be processed. We are also required by law to retain certain financial transaction records for compliance and auditing purposes.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
