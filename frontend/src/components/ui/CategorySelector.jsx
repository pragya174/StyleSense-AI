function CategorySelector() {

  const categories = [
    "Hairstyle",
    "Nails",
    "Outfit",
    "Accessories",
    "Makeup",
  ];

  return (
    <div className="rounded-3xl bg-slate-900 p-8">

      <h2 className="mb-6 text-2xl font-semibold">
        Select Categories
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">

        {categories.map((item) => (
          <label
            key={item}
            className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-700 p-4"
          >
            <input type="checkbox" defaultChecked />

            {item}
          </label>
        ))}

      </div>

    </div>
  );
}

export default CategorySelector;