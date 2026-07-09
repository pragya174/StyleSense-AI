function BeautyCategories() {
  const categories = [
    {
      icon: "💇‍♀️",
      title: "Hairstyles",
      description: "Find hairstyles that match your face shape and overall vibe.",
      status: "Live",
      color: "from-pink-600 to-rose-500",
    },
    {
      icon: "💄",
      title: "Makeup",
      description: "Get lipstick, blush and makeup shade suggestions for your skin tone.",
      status: "Coming Soon",
      color: "from-violet-600 to-fuchsia-500",
    },
    {
      icon: "💅",
      title: "Nails",
      description: "Discover nail colors and designs that complement your undertone.",
      status: "Coming Soon",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: "👗",
      title: "Outfit Colors",
      description: "Explore color palettes that enhance your natural features.",
      status: "Coming Soon",
      color: "from-cyan-500 to-sky-500",
    },
    {
      icon: "💍",
      title: "Accessories",
      description: "Choose earrings, necklaces and styling details that suit your face.",
      status: "Coming Soon",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: "🕶️",
      title: "Glasses",
      description: "Find frame shapes that balance and flatter your face structure.",
      status: "Coming Soon",
      color: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-pink-500/10 blur-[150px]" />
      <div className="absolute right-10 bottom-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
            Beauty Categories
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Complete styling for every
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              {" "}beauty detail
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            StyleSense AI is designed to grow into a complete personal styling assistant across hairstyles, makeup, nails, accessories and outfits.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group rounded-3xl border border-white/10 bg-slate-900/80 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-pink-500/20"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${category.color} text-3xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                >
                  {category.icon}
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    category.status === "Live"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {category.status}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {category.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeautyCategories;