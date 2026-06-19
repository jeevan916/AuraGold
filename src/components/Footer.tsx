import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="p-16 text-center border-t border-[#1a1a1a]/10">
      <h2 className="font-serif text-4xl font-light mb-8">Your Future, Solid as Gold.</h2>
      <button className="bg-[#1a1a1a] text-[#f5f2ed] rounded-full px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#1a1a1a]/80 transition mb-16">
        Get Started Today
      </button>
      <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest opacity-50">
        <Link to="/privacy" className="hover:opacity-100 transition">Privacy Policy</Link>
        <Link to="/terms" className="hover:opacity-100 transition">Terms of Service</Link>
        <Link to="/data-deletion" className="hover:opacity-100 transition">User Data Deletion</Link>
        <Link to="/contact" className="hover:opacity-100 transition">Contact Us</Link>
      </div>
    </footer>
  );
}
