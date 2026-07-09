import { useNavigate } from "react-router-dom";

function HairstyleCard({
  image,
  title,
  match,
  userImage,
  userFile,
  faceShape,
  isRecommended,
  rank,
}) {
  const navigate = useNavigate();

  const handleTryStyle = () => {
  navigate("/try-style", {
    state: {
      hairstyle: title,
      hairstyleImage: image,
      userImage: userImage,
      userFile: userFile,
    },
  });
};

  const handleReference = () => {
    navigate("/reference", {
      state: {
        hairstyle: title,
        hairstyleImage: image,
        userImage,
      },
    });
  };

  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-500 hover:shadow-pink-500/20">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute right-4 top-4 rounded-2xl bg-black/70 px-4 py-2 backdrop-blur-md shadow-lg">
          <p className="text-[10px] uppercase tracking-wider text-slate-300">
            AI Score
          </p>
          <p className="text-sm font-bold text-white">
            ⭐ {match}% Match
          </p>
        </div>
      </div>

      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-2xl font-bold text-white">
            {title}
          </h3>

          <p
            className={`mt-2 text-sm font-medium ${
              isRecommended ? "text-amber-400" : "text-slate-400"
            }`}
          >
            {rank === 1
  ? "🏆 Best Match"
  : isRecommended
  ? "⭐ AI Recommended"
  : "Explore More"}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleTryStyle}
            className="rounded-xl bg-pink-600 py-3 font-semibold text-white transition hover:bg-pink-700"
          >
            Try Style
          </button>

          <button
            onClick={handleReference}
            className="rounded-xl border border-slate-600 bg-slate-800 py-3 font-semibold text-white transition hover:border-pink-500 hover:bg-slate-700"
          >
            Reference
          </button>
        </div>
      </div>
    </div>
  );
}

export default HairstyleCard;