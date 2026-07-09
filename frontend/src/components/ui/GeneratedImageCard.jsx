function GeneratedImageCard({ image }) {
  return (
    <div>

      <img
        src={image}
        alt="Generated"
        className="h-[450px] w-full rounded-2xl object-cover"
      />

      <button
        className="mt-6 w-full rounded-xl bg-pink-600 py-3 text-lg font-semibold hover:bg-pink-700 transition"
      >
        Download Image
      </button>

    </div>
  );
}

export default GeneratedImageCard;