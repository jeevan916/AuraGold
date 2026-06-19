import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-8 md:px-16">
      <Link to="/" className="text-2xl font-serif tracking-tighter">AuraGold Elite</Link>
      <div className="space-x-8">
        <Link to="/about" className="text-sm uppercase tracking-widest opacity-70 hover:opacity-100 transition">About</Link>
        <Link to="/contact" className="text-sm uppercase tracking-widest opacity-70 hover:opacity-100 transition">Contact</Link>
        <Link to="/terms" className="text-sm uppercase tracking-widest opacity-70 hover:opacity-100 transition">Terms</Link>
        <button className="border border-[#1a1a1a]/30 rounded-full px-6 py-2 text-sm uppercase tracking-widest hover:bg-[#1a1a1a] hover:text-[#f5f2ed] transition">
          Start Your Journey
        </button>
      </div>
    </nav>
  );
}
