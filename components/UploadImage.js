import { useState } from "react";
import { storage, db } from "../lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

export default function UploadImage() {
  const [file, setFile] = useState(null);

  const uploadImage = async () => {
    if (!file) return;

    const storageRef = ref(storage, `images/${file.name}`);

    await uploadBytes(storageRef, file);

    const url = await getDownloadURL(storageRef);

    await addDoc(collection(db, "images"), {
      imageUrl: url,
      createdAt: new Date()
    });

    alert("Upload success");
  };

  return (
    <div>
      <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
      <button onClick={uploadImage}>Upload</button>
    </div>
  );
}