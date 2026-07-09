import { Link } from "react-router-dom";

function HeroContent() {
  return (
    <div className="max-w-2xl">
      <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-sm font-medium text-pink-300">
        ✨ AI Powered Personal Styling
      </span>

      <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
        Discover Your
        <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent">
          {" "}Perfect Style
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
        Upload a selfie and let StyleSense AI analyze your face shape, skin tone,
        and style profile to recommend hairstyles, colors, accessories, and beauty looks.
      </p>

      <div className="mt-10 flex flex-wrap gap-5">
        <Link
          to="/upload"
          className="rounded-2xl bg-gradient-to-r from-pink-600 to-violet-600 px-8 py-4 font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:-translate-y-1 hover:shadow-pink-500/40"
        >
          Try AI Stylist
        </Link>

        <a
          href="#how-it-works"
          className="rounded-2xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:border-pink-500 hover:bg-slate-800"
        >
          How It Works
        </a>
      </div>

      <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
        <span>✓ Face Shape Analysis</span>
        <span>✓ Skin Tone Detection</span>
        <span>✓ AI Style Report</span>
      </div>
    </div>
  );
}

export default HeroContent;