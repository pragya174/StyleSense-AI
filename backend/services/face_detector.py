import cv2
import mediapipe as mp

mp_face_mesh = mp.solutions.face_mesh


def detect_face(image_path):

    image = cv2.imread(image_path)

    if image is None:
        return {
            "face_detected": False,
            "message": "Image not found"
        }

    rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    with mp_face_mesh.FaceMesh(
        static_image_mode=True,
        max_num_faces=1,
        refine_landmarks=True,
        min_detection_confidence=0.5
    ) as detector:

        result = detector.process(rgb)

        if result.multi_face_landmarks:
            return {
                "face_detected": True
            }

        return {
            "face_detected": False,
            "message": "No face detected"
        }