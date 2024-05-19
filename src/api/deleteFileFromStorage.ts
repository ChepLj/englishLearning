import { deleteObject, ref } from "firebase/storage";
import { storage } from "./firebase/firebaseConfig";

export default function deleteFileFromStorage(path:string, callback:Function) {
  // Create a reference to the file to delete
  const desertRef = ref(storage, path);

  // Delete the file
  deleteObject(desertRef)
    .then(() => {
      // File deleted successfully
      callback("delete file successfully");
    })
    .catch((error) => {
      console.log("🚀 ~ deleteFileFromStorage ~ error:", error)
      // Uh-oh, an error occurred!
      callback(" delete file error");
    });
}
