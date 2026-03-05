import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getPosts() {
  const querySnapshot = await getDocs(collection(db, "posts"));

  const posts = [];

  querySnapshot.forEach((doc) => {
    posts.push({
      id: doc.id,
      ...doc.data()
    });
  });

  return posts;
}