import axios from "axios";

const token = localStorage.getItem('token');

export async function sendSnap({photo, duration, email}) {
    const rep = await fetch(photo)
    const file = new File([rep.blob()], "capture.png", {
        type: 'image/png'
    });

    const formData = new FormData();
    formData.append('duration', duration);
    formData.append('to', email);
    formData.append('image', file);

    await axios.post('http://snapi.epitech.eu/snap', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'token': token,
        },
    })
}