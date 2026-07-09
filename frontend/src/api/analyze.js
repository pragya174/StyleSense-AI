import axios from "axios";

const API = "https://stylesense-ai-backend-qg7n.onrender.com";

export async function analyzeImage(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(`${API}/analyze`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}

export async function tryHairstyle(file, hairstyle) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(
    `${API}/try-hairstyle?hairstyle=${encodeURIComponent(hairstyle)}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
}