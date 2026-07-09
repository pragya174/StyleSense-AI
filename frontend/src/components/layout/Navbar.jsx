import { Link } from "react-router-dom";
import Logo from "../common/Logo";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="#features" className="hover:text-white transition">
            Features
          </a>

          <a href="#how-it-works" className="hover:text-white transition">
            How It Works
          </a>

          <a href="#about" className="hover:text-white transition">
            About
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-xl border border-slate-700 px-4 py-2 hover:bg-slate-800 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-xl bg-pink-600 px-5 py-2 font-medium hover:bg-pink-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;