function FeaturesSection() {
  const features = [
    {
      icon: "🧠",
      title: "Face Shape Analysis",
      description:
        "Detect your face shape with AI and receive personalized styling recommendations.",
      color: "from-pink-600 to-rose-500",
    },
    {
      icon: "🎨",
      title: "Skin Tone Detection",
      description:
        "Analyze your skin tone to discover the best beauty shades and outfit colors.",
      color: "from-violet-600 to-fuchsia-500",
    },
    {
      icon: "💇‍♀️",
      title: "Hairstyle Recommendations",
      description:
        "Explore hairstyles carefully selected for your unique facial features.",
      color: "from-cyan-500 to-sky-500",
    },
    {
      icon: "💄",
      title: "Beauty Suggestions",
      description:
        "Receive curated makeup, accessories and nail inspirations tailored for you.",
      color: "from-orange-500 to-pink-500",
    },
    {
      icon: "✨",
      title: "Virtual Try-On",
      description:
        "Preview hairstyles with AI or browse professional reference styles instantly.",
      color: "from-indigo-500 to-violet-500",
    },
    {
      icon: "⬇️",
      title: "Download Results",
      description:
        "Save your personalized AI style report and hairstyle previews anytime.",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section
  id="features"
  className="relative overflow-hidden px-6 py-24"
>
      <div className="absolute left-20 top-40 h-72 w-72 rounded-full bg-pink-500/10 blur-[150px]" />

<div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[150px]" />
      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-sm font-medium text-pink-300">
            Features
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Everything you need for your
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              {" "}perfect style
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            StyleSense AI combines advanced AI analysis with personalized beauty
            recommendations to help you discover your best look effortlessly.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="
group
rounded-3xl
border
border-white/10
bg-slate-900/80
p-8
transition-all
duration-300
hover:-translate-y-2
hover:border-pink-500/50
hover:shadow-2xl
hover:shadow-pink-500/20
"
            >

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.color} text-3xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
              >
                {feature.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturesSection;