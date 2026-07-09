import cv2
import numpy as np


def detect_skin_tone(image_path):

    image = cv2.imread(image_path)

    if image is None:
        return "Unknown"

    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    avg = np.mean(image, axis=(0, 1))

    r, g, b = avg

    if r > g and r > b:
        return "Warm"

    elif b > r:
        return "Cool"

    else:
        return "Neutral"