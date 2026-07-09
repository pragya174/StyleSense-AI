import os
import uuid
import replicate
from dotenv import load_dotenv
from PIL import Image

load_dotenv()


def prepare_image(image_path: str) -> str:
    os.makedirs("uploads/processed", exist_ok=True)

    image = Image.open(image_path).convert("RGB")

    max_size = 1024
    width, height = image.size

    scale = min(max_size / width, max_size / height, 1)
    new_width = int(width * scale)
    new_height = int(height * scale)

    # FLUX-friendly dimensions: multiple of 16
    new_width = max(64, (new_width // 16) * 16)
    new_height = max(64, (new_height // 16) * 16)

    image = image.resize((new_width, new_height))

    processed_path = f"uploads/processed/{uuid.uuid4()}.jpg"
    image.save(processed_path, "JPEG", quality=92)

    return processed_path


def generate_hairstyle(image_path: str, hairstyle: str):
    token = os.getenv("REPLICATE_API_TOKEN")

    if not token:
        return {
            "success": False,
            "message": "Replicate API token missing"
        }

    processed_image_path = prepare_image(image_path)

    prompt = (
    f"Keep the exact same person and exact same face. "
    f"Preserve facial identity, facial structure, eyes, nose, lips, smile, skin tone, age, pose, hand position, outfit, lighting, room, and background exactly. "
    f"Do not change the face. Do not beautify the face. Do not make the person look like someone else. "
    f"Only change the hair into {hairstyle}. "
    f"Keep the hairstyle realistic and natural. "
    f"The final image must look like the same person with only a different hairstyle."
    )

    try:
        with open(processed_image_path, "rb") as image_file:
            output = replicate.run(
                "black-forest-labs/flux-kontext-pro",
                input={
                    "prompt": prompt,
                    "input_image": image_file,
                }
            )

        generated_image = output[0] if isinstance(output, list) else output

        return {
            "success": True,
            "generated_image": str(generated_image)
        }

    except Exception as e:
        return {
            "success": False,
            "message": str(e)
        }