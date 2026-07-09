function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload Your Selfie",
      description:
        "Start by uploading a clear selfie so StyleSense AI can understand your facial features.",
      icon: "📷",
    },
    {
      number: "02",
      title: "AI Face Analysis",
      description:
        "Our AI analyzes your face shape, skin tone and style profile within seconds.",
      icon: "✨",
    },
    {
      number: "03",
      title: "Get Style Report",
      description:
        "Receive personalized hairstyle, color, accessory and beauty recommendations.",
      icon: "📋",
    },
    {
      number: "04",
      title: "Try Hairstyles",
      description:
        "Preview AI-generated hairstyle looks or explore safe reference styles.",
      icon: "💇‍♀️",
    },
  ];

  return (
    <section id="how-it-works" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Your AI styling journey in
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              {" "}4 steps
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            From selfie upload to personalized recommendations, StyleSense AI makes styling simple, fast and personalized.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-500 hover:shadow-pink-500/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-600 to-violet-600 text-2xl shadow-lg shadow-pink-500/20">
                  {step.icon}
                </div>

                <span className="text-4xl font-black text-white/10">
                  {step.number}
                </span>
              </div>

              <h3 className="mt-8 text-xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;