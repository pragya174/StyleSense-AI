import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-pink-500/20 bg-gradient-to-r from-pink-600/20 via-violet-600/20 to-pink-600/20 p-10 text-center shadow-2xl shadow-pink-500/20 md:p-16">
        <h2 className="text-4xl font-bold md:text-5xl">
          Ready to discover your
          <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            {" "}perfect style?
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-slate-300">
          Upload your selfie and get personalized AI-powered beauty and hairstyle recommendations in seconds.
        </p>

        <Link
          to="/upload"
          className="mt-8 inline-block rounded-2xl bg-gradient-to-r from-pink-600 to-violet-600 px-8 py-4 font-semibold text-white shadow-lg shadow-pink-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-500/40"
        >
          Try StyleSense AI
        </Link>
      </div>
    </section>
  );
}

export default CTASection;