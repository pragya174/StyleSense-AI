function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24">
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-pink-500/10 blur-[150px]" />
      <div className="absolute right-10 bottom-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-sm font-medium text-pink-300">
              About StyleSense AI
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Meet your
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                {" "}Personal AI Stylist
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              StyleSense AI helps users discover hairstyles, colors and beauty
              recommendations that match their natural features using face shape
              analysis, skin tone detection and AI-powered styling suggestions.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-400">
              Built as a smart styling assistant, it combines computer vision,
              recommendation logic and generative AI to create a personalized
              beauty experience.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl">
            <h3 className="text-2xl font-bold">Built With</h3>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "React",
                "FastAPI",
                "OpenCV",
                "MediaPipe",
                "Replicate AI",
                "Tailwind CSS",
              ].map((tech) => (
                <div
                  key={tech}
                  className="rounded-2xl border border-white/10 bg-slate-800/70 p-4 text-center font-medium text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10"
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-gradient-to-r from-pink-600 to-violet-600 p-6">
              <p className="text-sm text-white/80">✨ Project Goal</p>
              <h4 className="mt-2 text-2xl font-bold">
                Personalized styling made simple with AI.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;