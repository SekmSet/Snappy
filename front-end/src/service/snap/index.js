import axios from "../axios";

export async function sendSnap({ photo, duration, email }) {
  const rep = await fetch(photo);
  const file = new File([await rep.blob()], "capture.png", {
    type: "image/png",
  });

  const formData = new FormData();
  formData.append("duration", duration);
  formData.append("to", email);
  formData.append("image", file);

  await axios.post("snap", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function getSnaps(setSnaps) {
  const allSnaps = await axios.get("snaps");
  setSnaps(allSnaps.data.data);
}

export async function readSnap(snapId, setSnap) {
  const readSnap = await axios.get(`snap/${snapId}`, {
    responseType: "arraybuffer",
  });
  const convert = Buffer.from(readSnap.data, "binary").toString("base64");
  const imageBase64 = `data:image/png;base64,${convert}`;
  setSnap(imageBase64);
}

export async function seenSnap(idSnap, setSnap) {
  await axios.post("seen", {
    id: idSnap,
  });
  setSnap("");
}

export async function fetchEmails(setEmail) {
  const response = await axios.get("all");
  setEmail(response.data.data);
}
