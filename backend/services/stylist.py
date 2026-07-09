def get_style_recommendation(face_shape, skin_tone):
    hairstyle_map = {
        "Oval": [
            "Curtain Bangs",
            "Butterfly Layers",
            "Long Layers",
            "Soft Waves",
            "Wolf Cut",
        ],
        "Round": [
            "Side Swept Layers",
            "Face Framing Layers",
            "Long Layers",
            "Textured Lob",
            "Shag Cut",
        ],
        "Square": [
            "Wispy Bangs",
            "Feather Cut",
            "Soft Waves",
            "Layered Bob",
            "Side Swept Layers",
        ],
        "Heart": [
            "Curtain Bangs",
            "Textured Lob",
            "Feather Cut",
            "Layered Bob",
            "Face Framing Layers",
        ],
    }

    color_map = {
        "Warm": ["Olive", "Brown", "Cream", "Coral"],
        "Cool": ["Blue", "Purple", "Pink", "White"],
        "Neutral": ["Beige", "Black", "Rose", "Navy"],
    }

    return {
        "necklines": ["V Neck", "Sweetheart", "Square Neck"],
        "hairstyles": hairstyle_map.get(face_shape, hairstyle_map["Oval"]),
        "colors": color_map.get(skin_tone, color_map["Neutral"]),
        "accessories": ["Hoop Earrings", "Cat Eye Sunglasses"],
        "style": "Minimal Chic",
    }