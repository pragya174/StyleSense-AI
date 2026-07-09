function RecommendationCard({ title, items }) {
  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">

      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <div className="mt-5 space-y-3">

        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-xl bg-slate-800 p-3"
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}

export default RecommendationCard;