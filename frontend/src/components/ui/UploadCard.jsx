import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImagePreview from "./ImagePreview";
import { analyzeImage } from "../../api/analyze";

function UploadCard() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const inputRef = useRef();

  const handleImage = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    setFile(selectedFile);

    const imageURL = URL.createObjectURL(selectedFile);
    setImage(imageURL);
  };

  const removeImage = () => {
    setImage(null);
    setFile(null);
  };

  return (
    <div className="rounded-3xl border-2 border-dashed border-slate-700 bg-slate-900 p-12 text-center">
      {image ? (
        <ImagePreview
          image={image}
          file={file}
          analyzeImage={analyzeImage}
          navigate={navigate}
          onRemove={removeImage}
        />
      ) : (
        <>
          <div className="text-6xl">📷</div>

          <h2 className="mt-6 text-2xl font-semibold">
            Drag & Drop Your Selfie
          </h2>

          <p className="mt-3 text-slate-400">
            PNG, JPG or JPEG
          </p>

          <button
            onClick={() => inputRef.current.click()}
            className="mt-8 rounded-xl bg-pink-600 px-8 py-3 hover:bg-pink-700 transition"
          >
            Browse Files
          </button>

          <input
            type="file"
            accept="image/*"
            hidden
            ref={inputRef}
            onChange={handleImage}
          />
        </>
      )}
    </div>
  );
}

export default UploadCard;