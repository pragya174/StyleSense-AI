function InfoCard({ title, value }) {
  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-semibold">
        {value}
      </h3>

    </div>
  );
}

export default InfoCard;