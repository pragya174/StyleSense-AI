from fastapi import APIRouter, UploadFile, File
import shutil
import os

from services.face_detector import detect_face
from services.face_shape import detect_face_shape
from services.skin_tone import detect_skin_tone
from services.stylist import get_style_recommendation

router = APIRouter()

@router.post("/analyze")
async def analyze(file: UploadFile = File(...)):

    os.makedirs("uploads", exist_ok=True)

    filepath = f"uploads/{file.filename}"

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    face = detect_face(filepath)

    if not face["face_detected"]:
        return face

    shape = detect_face_shape(filepath)
    skin = detect_skin_tone(filepath)

    recommendation = get_style_recommendation(shape, skin)

    return {
       "face_detected": True,
       "face_shape": shape,
       "skin_tone": skin,
       "recommendation": recommendation
    }