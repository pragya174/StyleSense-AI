from fastapi import APIRouter, UploadFile, File
import shutil
import os

from services.generate_hairstyle import generate_hairstyle

router = APIRouter()

@router.post("/try-hairstyle")
async def try_hairstyle(
    hairstyle: str,
    file: UploadFile = File(...)
):
    os.makedirs("uploads", exist_ok=True)

    filepath = f"uploads/{file.filename}"

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = generate_hairstyle(filepath, hairstyle)

    return {
        "success": result["success"],
        "hairstyle": hairstyle,
        "generated_image": result.get("generated_image"),
        "message": result.get("message")
    }