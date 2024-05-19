import { IonAlert, IonButton, IonGrid, IonHeader, IonInput, IonItem, IonProgressBar, IonRow, IonTextarea, IonTitle, IonToolbar } from "@ionic/react";
import postDataToStorage from "../api/postDataToStorage";
import "./CreateNewContainer.css";
import postDataToDB from "../api/postDataToDB";
import { useContext, useRef, useState } from "react";
import getDataFromDB from "../api/getDataFromDB";
import { ref } from "firebase/storage";
import { MAIN_CONTEXT } from "../App";
interface ContainerProps {
  name: string;
}
interface ITF_InputElm extends HTMLIonInputElement {
  clearTextInput:Function
}

const CreateNewContainer: React.FC<ContainerProps> = ({ name }) => {
  const {setRefresh} = useContext<any>(MAIN_CONTEXT);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [html, setHtml] = useState("");
  const [progress, setProgress] = useState(0);
  const songNameRef = useRef<ITF_InputElm>(null);
  const lyricsRef = useRef<HTMLIonTextareaElement>(null);

  const upload = () => {
    const fileElm = document.getElementById("file") as HTMLInputElement;
    const file = fileElm.files?.[0];
    const songName = songNameRef.current?.value;
    const lyrics = lyricsRef.current?.value;
    const condition1 = songName ? true : false;
    const condition2 = file ? true : false;
    const condition3 = lyrics ? true : false;

    // go Upload
    const goUpload = () => {
      //TODO: upload all
      const uploadAll = (result, url, progress) => {
        if (result === "Upload completed successfully") {
          const key = Date.now();
          const dataObj = {
            key: key,
            name: songName,
            lyrics: lyrics,
            isFavorite: false,
            songURL: url,
            karaokeURL: "",
          };

          const uploadContainer = [
            {
              ref: `SONGS/${key}`,
              data: dataObj,
            },
          ];
          const handelUploadCallback = (result:string) => {

            if(result =="post successfully!"){
              setRefresh(Math.random())
              const elm =  document.getElementsByClassName('native-textarea')[0] as HTMLInputElement

              elm.value = ''
              fileElm.value = ''
              songNameRef.current?.clearTextInput()
              setIsAlertOpen(true)
            }else {
              alert("Upload Failed");
            }
          }
          postDataToDB(uploadContainer, handelUploadCallback);
        } else {
          alert("Upload audio file Failed");
          console.log(url);
        }
      };
      //! upload file first
      const handleProgressCallback = (obj)=>{
        const progressCurrentValue = (obj.bytesTransferred/obj.totalBytes)
        setProgress(progressCurrentValue)
      }
      postDataToStorage(file, "SONGS/", songName, uploadAll, handleProgressCallback);
    };
    //TODO_END: upload all
    // validate
    if (condition1) {
      if (condition2) {
        if (condition3) {
          goUpload();
        } else {
          alert("lyrics is missing !");
        }
      } else {
        alert("audio file is missing !");
      }
    } else {
      alert("Song Name is missing !");
    }
  };

  return (
    <IonGrid>
      {progress > 0 && progress < 1 ? (
        <div id="uploadProgress">
          <h4>uploading...</h4>
          <IonProgressBar value={progress}></IonProgressBar>
        </div>
      ) : (
        ""
      )}

     
      <IonRow>
        <IonItem>
          <IonButton expand="full" style={{ width: "100%" }} onClick={upload}>
            Upload
          </IonButton>
        </IonItem>
        <IonAlert isOpen={isAlertOpen} header="Upload Successfully" subHeader={`${songNameRef.current?.value}`} message="Open the menu to view new song" buttons={["ok"]} onDidDismiss={() => setIsAlertOpen(false)}></IonAlert>
      </IonRow>
      <IonRow>
        <IonItem>
          <IonInput ref={songNameRef} label="Song Name" labelPlacement="floating" color="danger"></IonInput>
        </IonItem>
      </IonRow>
      <IonRow>
        <IonItem>
          <input type="file" id="file" accept="audio/*"></input>
        </IonItem>
      </IonRow>
      <IonRow>
        <IonItem>
          <IonTextarea ref={lyricsRef} label="lyrics" labelPlacement="floating" fill="outline" placeholder="Enter text" autoGrow key={1}></IonTextarea>
          {/* <textarea id="textInput"></textarea> */}
        </IonItem>
      </IonRow>

    </IonGrid>
  );
};

export default CreateNewContainer;
