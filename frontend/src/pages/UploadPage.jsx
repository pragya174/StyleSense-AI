import Navbar from "../components/layout/Navbar";
import UploadCard from "../components/ui/UploadCard";
import CategorySelector from "../components/ui/CategorySelector";


function UploadPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-5xl px-6 py-16">

        <h1 className="text-5xl font-bold text-center">
          Upload Your Selfie
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Our AI will analyze your face and generate personalized beauty recommendations.
        </p>

        <div className="mt-12 space-y-8">

          <UploadCard />

          <CategorySelector />

         

        </div>

      </div>
    </div>
  );
}

export default UploadPage;