import axios from "../axios";

const token = localStorage.getItem('token');

export async function sendSnap({photo, duration, email}) {
    const rep = await fetch(photo)
    const file = new File([await rep.blob()], "capture.png", {
        type: 'image/png'
    });

    console.log(file)

    const formData = new FormData();
    formData.append('duration', duration);
    formData.append('to', email);
    formData.append('image', file);

    await axios.post('snap', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'token': token,
        },
    })
}

export async function fetchEmails(setEmail) {
    const response = await axios.get('all', {
        headers: {
            'token': token,
        }
    })

    setEmail(response.data.data);
}