import { ref, update } from "firebase/database";
import { ITF_UploadContainer } from "../interface/interface";
import { database } from "../api/firebase/firebaseConfig"

function postDataToDB(uploadContainer:Array<ITF_UploadContainer>, callback: Function) {

  const updates: any = {};
  for(const item of uploadContainer){
    
    updates[item.ref] = item.data
  }
  const mainRef = ref(database);
  update(mainRef, updates)
    .then(() => {
      console.log("post successfully!");
      callback("post successfully!");
    })
    .catch(() => {
      console.log("post failed!");
      callback("post failed!");
    });
}

export default postDataToDB;
