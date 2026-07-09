import { useState } from "react";

function ImagePreview({
  image,
  file,
  analyzeImage,
  navigate,
  onRemove,
}) {
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    try {
      setLoading(true);

      const result = await analyzeImage(file);

      console.log("========== BACKEND RESPONSE ==========");
      console.log(JSON.stringify(result, null, 2));
      console.log("======================================");

      navigate("/loading");

      setTimeout(() => {
        navigate("/result", {
          state: {
            ...result,
            userImage: image,
            userFile: file,
          },
        });
      }, 3000);
    } catch (error) {
      console.error(error);
      alert("Failed to analyze image.");
      setLoading(false);
    }
  };

  return (
    <div className="mt-8">
      <img
        src={image}
        alt="preview"
        className="mx-auto h-72 w-72 rounded-2xl border border-slate-700 object-cover"
      />

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="rounded-xl bg-pink-600 px-6 py-3 text-white transition hover:bg-pink-700 disabled:bg-gray-500"
        >
          {loading ? "Analyzing..." : "Analyze Style"}
        </button>

        <button
          onClick={onRemove}
          className="rounded-xl bg-red-500 px-6 py-3 text-white transition hover:bg-red-600"
        >
          Remove Image
        </button>
      </div>
    </div>
  );
}

export default ImagePreview;