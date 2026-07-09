function HeroPreview() {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-pink-600 to-violet-600 opacity-30 blur-2xl"></div>

      <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl backdrop-blur">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">Live Preview</p>
            <h2 className="text-2xl font-bold">AI Style Report</h2>
          </div>

          <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-medium text-green-400">
            96% Match
          </span>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl bg-slate-800/70 p-5">
            <p className="text-sm text-slate-400">Face Shape</p>
            <h3 className="mt-2 text-2xl font-bold text-pink-400">Oval</h3>
          </div>

          <div className="rounded-2xl bg-slate-800/70 p-5">
            <p className="text-sm text-slate-400">Skin Tone</p>
            <h3 className="mt-2 text-2xl font-bold text-violet-400">Cool</h3>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-pink-600 to-violet-600 p-5">
            <p className="text-sm text-white/80">Recommended Style</p>
            <h3 className="mt-2 text-2xl font-bold">Minimal Chic</h3>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="mb-5 text-lg font-semibold">
            Top Recommendations
          </h3>

          <div className="space-y-3">
            <div className="rounded-xl border border-pink-500/20 bg-pink-500/10 p-4">
              ✨ Curtain Bangs
            </div>

            <div className="rounded-xl border border-violet-500/20 bg-violet-500/10 p-4">
              💄 Soft Glam Makeup
            </div>

            <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">
              👗 Blue & Lavender Palette
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPreview;