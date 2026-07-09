import cv2
import mediapipe as mp

mp_face_mesh = mp.solutions.face_mesh


def detect_face_shape(image_path):

    image = cv2.imread(image_path)

    if image is None:
        return "Unknown"

    rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    with mp_face_mesh.FaceMesh(
        static_image_mode=True,
        max_num_faces=1,
        refine_landmarks=True
    ) as face_mesh:

        result = face_mesh.process(rgb)

        if not result.multi_face_landmarks:
            return "Unknown"

        landmarks = result.multi_face_landmarks[0].landmark

        face_width = abs(landmarks[454].x - landmarks[234].x)
        face_height = abs(landmarks[152].y - landmarks[10].y)

        ratio = face_height / face_width

        if ratio > 1.55:
            return "Oval"

        elif ratio > 1.35:
            return "Round"

        elif ratio > 1.20:
            return "Square"

        else:
            return "Heart"