function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <h2 className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-2xl font-bold text-transparent">
            StyleSense AI
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Personalized beauty recommendations powered by AI.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-slate-400">
          <a href="#" className="cursor-pointer transition-colors duration-300 hover:text-pink-400">
            GitHub
          </a>

          <a href="#" className="cursor-pointer transition-colors duration-300 hover:text-pink-400">
            LinkedIn
          </a>

          <a href="#" className="cursor-pointer transition-colors duration-300 hover:text-pink-400">
            Contact
          </a>
        </div>

        <p className="text-sm text-slate-500">
          © 2026 StyleSense AI
        </p>
      </div>
    </footer>
  );
}

export default Footer;