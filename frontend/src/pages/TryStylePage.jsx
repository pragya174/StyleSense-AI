import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "../components/layout/Navbar";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import GeneratedImageCard from "../components/ui/GeneratedImageCard";
import { tryHairstyle } from "../api/analyze";

function TryStylePage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const generateImage = async () => {
      try {
        setLoading(true);
        setError(null);

        if (!state?.userFile || !state?.hairstyle) {
          setError("Missing image or hairstyle data. Please try again.");
          return;
        }

        const result = await tryHairstyle(
          state.userFile,
          state.hairstyle
        );

        console.log("AI TRY STYLE RESULT:", result);

        if (result.success && result.generated_image) {
          setGeneratedImage(result.generated_image);
        } else {
          setError(result.message || "AI image generation failed.");
        }
      } catch (error) {
        console.error(error);
        setError("Failed to generate AI hairstyle preview.");
      } finally {
        setLoading(false);
      }
    };

    generateImage();
  }, [state]);

  const handleBack = () => {
    navigate("/result", {
      state: {
        userImage: state?.userImage,
        userFile: state?.userFile,
        face_shape: state?.face_shape,
        skin_tone: state?.skin_tone,
        recommendation: state?.recommendation,
      },
    });
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">

          <h1 className="text-center text-5xl font-bold">
            AI Hairstyle Try-On
          </h1>

          <p className="mt-4 text-center text-slate-400">
            Preview how this hairstyle may look on you.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-sm text-pink-300">
              {state?.hairstyle || "Selected Hairstyle"}
            </span>

            <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
              AI Generated Preview
            </span>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-xl">
              <h2 className="mb-6 text-2xl font-semibold">
                Your Photo
              </h2>

              <img
                src={state?.userImage}
                alt="User"
                className="h-[450px] w-full rounded-2xl object-cover"
              />
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-xl">
              <h2 className="mb-6 text-2xl font-semibold">
                AI Generated Preview
              </h2>

              {loading ? (
                <LoadingSpinner />
              ) : generatedImage ? (
                <>
                  <GeneratedImageCard image={generatedImage} />

                  <p className="mt-4 text-center text-sm text-slate-400">
                    ✨ This is an AI-generated preview. Facial details may slightly vary.
                  </p>
                </>
              ) : (
                <div className="flex h-[450px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-pink-600/60 p-8 text-center">
                  <div className="mb-5 rounded-full bg-pink-500/10 p-5 text-4xl">
                    ✨
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    AI Preview Unavailable
                  </h3>

                  <p className="mt-4 max-w-md text-slate-400">
                    {error || "Could not generate the AI preview right now."}
                  </p>

                  <p className="mt-3 max-w-md text-sm text-pink-400">
                    This can happen when API credits are exhausted or the AI service is busy.
                  </p>

                  <button
                    onClick={handleBack}
                    className="mt-8 rounded-xl bg-pink-600 px-8 py-3 font-semibold text-white transition hover:bg-pink-700"
                  >
                    Back to Recommendations
                  </button>
                </div>
              )}

            </div>
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-lg text-slate-400">
              Selected Hairstyle
            </h3>

            <h2 className="mt-2 text-3xl font-bold text-pink-400">
              {state?.hairstyle}
            </h2>

            <button
              onClick={handleBack}
              className="mt-6 rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-pink-500 hover:bg-slate-800"
            >
              Back to Recommendations
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default TryStylePage;