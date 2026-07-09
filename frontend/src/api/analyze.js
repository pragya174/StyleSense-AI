import axios from "axios";

const API = "http://127.0.0.1:8000";

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