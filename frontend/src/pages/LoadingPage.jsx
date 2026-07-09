import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoadingPage() {
    const navigate = useNavigate();

useEffect(() => {
  const timer = setTimeout(() => {
    navigate("/result");
  }, 3500);

  return () => clearTimeout(timer);
}, []);
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">

      <div className="w-[600px]">

        <h1 className="text-4xl font-bold text-center">
          AI is analyzing your style...
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Please wait while our AI studies your face.
        </p>

        <div className="mt-12 space-y-8">

          <div>
            <p className="mb-2">✔ Detecting Face Shape</p>

            <div className="h-3 rounded-full bg-slate-700 overflow-hidden">
              <div className="h-full w-3/4 bg-pink-500"></div>
            </div>
          </div>

          <div>
            <p className="mb-2">✔ Detecting Skin Tone</p>

            <div className="h-3 rounded-full bg-slate-700 overflow-hidden">
              <div className="h-full w-full bg-violet-500"></div>
            </div>
          </div>

          <div>
            <p className="mb-2">Matching Hairstyles...</p>

            <div className="h-3 rounded-full bg-slate-700 overflow-hidden">
              <div className="h-full w-1/2 bg-pink-500"></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default LoadingPage;