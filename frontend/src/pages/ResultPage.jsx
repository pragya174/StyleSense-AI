import { useLocation } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import HairstyleCard from "../components/ui/HairstyleCard";

import curtainBangs from "../assets/hairstyles/hairstyle-curtain-bangs.jpg";
import butterflyLayers from "../assets/hairstyles/hairstyle-butterfly-layers.jpg";
import longLayers from "../assets/hairstyles/hairstyle-long-layers.jpg";
import softWaves from "../assets/hairstyles/hairstyle-soft-waves.jpg";
import wolfCut from "../assets/hairstyles/hairstyle-wolf-cut.jpg";
import sideSweptLayers from "../assets/hairstyles/hairstyle-side-swept-layers.jpg";
import faceFramingLayers from "../assets/hairstyles/hairstyle-face-framing-layers.jpg";
import texturedLob from "../assets/hairstyles/hairstyle-textured-lob.jpg";
import wispyBangs from "../assets/hairstyles/hairstyle-wispy-bangs.jpg";
import featherCut from "../assets/hairstyles/hairstyle-feather-cut.jpg";
import layeredBob from "../assets/hairstyles/hairstyle-layered-bob.jpg";
import shagCut from "../assets/hairstyles/hairstyle-shag-cut.jpg";

function ResultPage() {
  const { state } = useLocation();

  const data = state?.result || state || {};
  const recommendation = data?.recommendation || {};

  const faceShape = data?.face_shape || "Oval";
  const skinTone = data?.skin_tone || "Cool";

  const hairstyles = [
    "Curtain Bangs",
    "Butterfly Layers",
    "Long Layers",
    "Soft Waves",
    "Wolf Cut",
    "Side Swept Layers",
    "Face Framing Layers",
    "Textured Lob",
    "Wispy Bangs",
    "Feather Cut",
    "Layered Bob",
    "Shag Cut",
  ];

  const hairstyleImages = {
    "Curtain Bangs": curtainBangs,
    "Butterfly Layers": butterflyLayers,
    "Long Layers": longLayers,
    "Soft Waves": softWaves,
    "Wolf Cut": wolfCut,
    "Side Swept Layers": sideSweptLayers,
    "Face Framing Layers": faceFramingLayers,
    "Textured Lob": texturedLob,
    "Wispy Bangs": wispyBangs,
    "Feather Cut": featherCut,
    "Layered Bob": layeredBob,
    "Shag Cut": shagCut,
  };

  const recommended =
    recommendation?.hairstyles?.length > 0
      ? recommendation.hairstyles
      : ["Curtain Bangs", "Long Layers", "Soft Waves"];

  const normalize = (text) =>
    text.toLowerCase().trim().replace(/-/g, " ");

  let hairstyleScores = {};

if (faceShape === "Oval") {
  hairstyleScores = {
    "Curtain Bangs": 98,
    "Butterfly Layers": 96,
    "Long Layers": 94,
    "Soft Waves": 91,
    "Wolf Cut": 89,
    "Face Framing Layers": 86,
    "Side Swept Layers": 84,
    "Feather Cut": 82,
    "Textured Lob": 80,
    "Layered Bob": 78,
    "Shag Cut": 75,
    "Wispy Bangs": 73,
  };
}

else if (faceShape === "Round") {
  hairstyleScores = {
    "Side Swept Layers": 98,
    "Face Framing Layers": 96,
    "Long Layers": 94,
    "Textured Lob": 91,
    "Shag Cut": 89,
    "Curtain Bangs": 86,
    "Soft Waves": 84,
    "Butterfly Layers": 82,
    "Feather Cut": 80,
    "Layered Bob": 78,
    "Wolf Cut": 76,
    "Wispy Bangs": 74,
  };
}

else if (faceShape === "Square") {
  hairstyleScores = {
    "Wispy Bangs": 98,
    "Feather Cut": 96,
    "Soft Waves": 94,
    "Layered Bob": 91,
    "Side Swept Layers": 89,
    "Curtain Bangs": 86,
    "Long Layers": 84,
    "Butterfly Layers": 82,
    "Textured Lob": 80,
    "Face Framing Layers": 78,
    "Shag Cut": 76,
    "Wolf Cut": 74,
  };
}

else if (faceShape === "Heart") {
  hairstyleScores = {
    "Curtain Bangs": 98,
    "Textured Lob": 96,
    "Feather Cut": 94,
    "Layered Bob": 91,
    "Face Framing Layers": 89,
    "Soft Waves": 86,
    "Butterfly Layers": 84,
    "Long Layers": 82,
    "Wolf Cut": 80,
    "Side Swept Layers": 78,
    "Shag Cut": 76,
    "Wispy Bangs": 74,
  };
}

else {
  hairstyleScores = {
    "Curtain Bangs": 98,
    "Butterfly Layers": 96,
    "Long Layers": 94,
    "Soft Waves": 91,
    "Wolf Cut": 89,
    "Face Framing Layers": 86,
    "Side Swept Layers": 84,
    "Feather Cut": 82,
    "Textured Lob": 80,
    "Layered Bob": 78,
    "Shag Cut": 75,
    "Wispy Bangs": 73,
  };
}

  const isAIRecommended = (style) => {
    return recommended.some(
      (item) => normalize(item) === normalize(style)
    );
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-10 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-center text-5xl font-bold">
            Your AI Style Report
          </h1>

          <p className="mt-4 text-center text-slate-400">
            Personalized recommendations based on your face shape and skin tone.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-7 shadow-xl">
              <p className="text-sm text-slate-400">Face Shape</p>

              <h2 className="mt-3 text-3xl font-bold text-pink-400">
                {faceShape}
              </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900 p-7 shadow-xl">
              <p className="text-sm text-slate-400">Skin Tone</p>

              <h2 className="mt-3 text-3xl font-bold text-pink-400">
                {skinTone}
              </h2>
            </div>

            <div className="rounded-3xl border border-pink-500/30 bg-gradient-to-r from-pink-600 to-violet-600 p-7 text-center shadow-xl shadow-pink-500/20">
              <p className="text-sm text-white/80">Overall Style</p>

              <h2 className="mt-3 text-3xl font-bold">
                {recommendation?.style || "Minimal Chic"}
              </h2>
            </div>
          </div>

          <h2 className="mt-20 text-center text-4xl font-bold">
            Recommended Hairstyles For You ✨
          </h2>

          <p className="mt-3 text-center text-slate-400">
            Based on your face shape, skin tone and AI analysis.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-sm font-medium text-pink-300">
              {faceShape} Face
            </span>

            <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300">
              {skinTone} Skin Tone
            </span>

            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
              {recommendation?.style || "Minimal Chic"}
            </span>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
            {hairstyles.map((style, index) => (
              <HairstyleCard
                key={index}
                title={style}
                image={hairstyleImages[style]}
                match={hairstyleScores[style]}
                userImage={data?.userImage}
                userFile={data?.userFile}
                faceShape={faceShape}
                isRecommended={isAIRecommended(style)}
                rank={recommended.findIndex((item) => normalize(item) === normalize(style)) + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultPage;