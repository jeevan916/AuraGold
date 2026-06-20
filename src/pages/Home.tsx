import { MessageSquare, PiggyBank, Brain, Bell, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#1a1a1a] font-sans">
      <Navbar />
      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center p-8 md:px-16 py-24">
        <div className="md:w-1/2 space-y-8">
          <h1 className="font-serif text-6xl md:text-8xl font-light tracking-tighter leading-[0.9]">
            The Future of Luxury Jewellery, Delivered via WhatsApp.
          </h1>
          <p className="text-lg font-light opacity-70 max-w-md">
            AuraGold Elite gives retailers the freedom of autonomous gold purchase plans and gives customers an easy way to manage purchases with multiple payment modes and rate protection—no new apps required.
          </p>
          <div className="flex gap-4">
            <Link to="/contact" className="inline-block bg-[#1a1a1a] text-[#f5f2ed] rounded-full px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#1a1a1a]/80 transition hover:-translate-y-1">
              For Customers
            </Link>
            <Link to="/contact" className="inline-block border border-[#1a1a1a] rounded-full px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#1a1a1a] hover:text-[#f5f2ed] transition hover:-translate-y-1">
              For Retailers
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-16 md:mt-0 aspect-square bg-[#d4af37]/10 rounded-3xl overflow-hidden flex items-center justify-center p-4">
          {/* WhatsApp UI Mockup */}
          <div className="w-[320px] max-w-full h-[580px] bg-white rounded-[2.5rem] shadow-2xl border-[8px] border-[#1a1a1a] flex flex-col relative text-sm overflow-hidden transform hover:scale-105 transition duration-500">
            {/* Header */}
            <div className="bg-[#075E54] text-white p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-serif text-xl border border-[#d4af37]">A</div>
              <div className="leading-tight">
                <div className="font-medium">AuraGold Elite</div>
                <div className="text-[10px] opacity-80">Verified Business ✓</div>
              </div>
            </div>
            {/* Chat Body */}
            <div className="flex-1 bg-[#efeae2] p-4 flex flex-col gap-3 overflow-hidden">
              <div className="mx-auto bg-[#e1f3fb] text-[#1a1a1a]/60 text-[10px] px-3 py-1 rounded-lg shadow-sm mb-2">Today</div>
              
              <div className="bg-white p-3 pb-5 rounded-xl rounded-tl-none w-[90%] shadow-sm text-[#1a1a1a] relative animate-fade-in-up">
                Hello! 🌟 Your automated 22K Gold accumulation plan reminder. 
                <br/><br/>
                <strong>Rate Protection:</strong> Locked at current low 🔒
                <br/>
                <strong>Next Installment:</strong> ₹10,000 due tomorrow.
                <span className="text-[9px] text-gray-400 absolute bottom-1 right-2">10:00 AM</span>
              </div>

              <div className="flex flex-col gap-2 w-[90%] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <Link to="/contact" className="bg-white block text-center text-[#00a884] p-2 rounded-xl shadow-sm font-medium border border-[#00a884]/20 hover:bg-[#00a884]/5 transition active:scale-95">Pay Now (UPI/Cards)</Link>
              </div>

              <div className="bg-[#d9fdd3] p-3 pb-5 rounded-xl rounded-tr-none max-w-[85%] self-end shadow-sm text-[#1a1a1a] relative mt-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Payment done via UPI ✅
                <span className="text-[9px] text-gray-400 absolute bottom-1 right-2">10:15 AM</span>
              </div>

              <div className="bg-white p-3 pb-5 rounded-xl rounded-tl-none w-[90%] shadow-sm text-[#1a1a1a] relative mt-1 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                Payment Received! 🎉 
                <br/>Added 1.53 gms of 22K Gold your secure vault.
                <span className="text-[9px] text-gray-400 absolute bottom-1 right-2">10:16 AM</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Core Features Section */}
      <section className="p-8 md:p-16">
        <h2 className="font-serif text-5xl font-light mb-16 text-center">Engineered for Excellence</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { icon: MessageSquare, title: "Autonomous Planning", desc: "Retailers offer systematic plans. No manual follow-ups required; the system sends automated payment notifications." },
            { icon: PiggyBank, title: "Multiple Payment Modes", desc: "Customers easily manage timely purchases via flexible plans, utilizing UPI, Cards, and Net Banking directly from chat." },
            { icon: Brain, title: "Rate Protection", desc: "Shield customers from volatile gold rates by locking in terms effortlessly when scheduling their gold plan." },
            { icon: Bell, title: "Timely Reminders", desc: "Automated notifications ensure customers never miss a scheduled payment to grow their wealth." },
            { icon: ShieldCheck, title: "Secure Vaulting", desc: "Instantly update customer ledgers and securely track their 22K gold allocations in real-time." }
          ].map((item, i) => (
            <div key={i} className="border-t border-[#1a1a1a]/20 pt-8 space-y-4">
              <item.icon className="w-8 h-8 text-[#d4af37]" />
              <h3 className="font-serif text-2xl">{item.title}</h3>
              <p className="text-[#1a1a1a]/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Authority Section */}
      <section className="p-8 md:p-16 bg-[#1a1a1a] text-[#f5f2ed] rounded-[3rem]">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 space-y-6">
            <h2 className="font-serif text-5xl font-light">A Legacy of Trust</h2>
            <p className="text-lg leading-relaxed opacity-80">
              AuraGold Elite is powered by the heritage of Sanghavi Jewellers. We combine decades of artisanal excellence with modern digital security. Our financial infrastructure ensures your payments are secure and your rate protection is strictly enforced.
            </p>
          </div>
          <div className="md:w-1/2 aspect-video bg-[#252525] rounded-3xl overflow-hidden flex flex-col items-center justify-center p-8 relative border border-white/5 shadow-inner">
            <div className="z-10 text-center space-y-4">
              <ShieldCheck className="w-20 h-20 text-[#d4af37] mx-auto drop-shadow-lg" />
              <h3 className="text-3xl font-serif text-[#d4af37]">Rate Protection Active</h3>
              <p className="text-[#f5f2ed]/60 max-w-sm mx-auto text-sm">
                Customers buy at the smartest prices, insulated from volatility. Retailers collect payments autonomously.
              </p>
            </div>
            {/* Abstract Chart Background Graphic */}
            <div className="absolute bottom-0 left-0 w-full h-32 flex items-end justify-between px-4 sm:px-12 opacity-30 gap-2">
              {[30, 45, 35, 60, 50, 80, 75, 95].map((h, i) => (
                <div key={i} className="w-full bg-[#d4af37] rounded-t-md" style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
