import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

function ReferencePage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">

          <h1 className="text-center text-5xl font-bold">
            Hairstyle Reference
          </h1>

          <p className="mt-4 text-center text-slate-400">
            Use this reference to understand how the hairstyle looks.
          </p>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-xl">
              <h2 className="mb-6 text-2xl font-semibold">
                Your Photo
              </h2>

              <img
                src={state?.userImage}
                alt="User"
                className="h-[500px] w-full rounded-2xl bg-slate-950 object-contain"
              />
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-xl">
              <h2 className="mb-6 text-2xl font-semibold">
                Reference Hairstyle
              </h2>

              <img
                src={state?.hairstyleImage}
                alt={state?.hairstyle}
                className="h-[500px] w-full rounded-2xl bg-slate-950 object-contain"
              />
            </div>

          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-pink-500/20 bg-pink-500/10 p-8 text-center">
            <h2 className="text-3xl font-bold text-pink-400">
              {state?.hairstyle}
            </h2>

            <p className="mt-4 text-slate-300">
              This is a safe reference view. It does not change your face, but helps you compare the recommended hairstyle with your original photo.
            </p>

            <button
              onClick={() => navigate(-1)}
              className="mt-8 rounded-xl bg-pink-600 px-8 py-3 font-semibold text-white transition hover:bg-pink-700"
            >
              Back
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default ReferencePage;