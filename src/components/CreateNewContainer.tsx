import { IonAlert, IonButton, IonGrid, IonInput, IonItem, IonRow, IonTextarea } from "@ionic/react";
import postDataToStorage from "../api/postDataToStorage";
import "./CreateNewContainer.css";
import postDataToDB from "../api/postDataToDB";
import { useRef, useState } from "react";
import getDataFromDB from "../api/getDataFromDB";
import { ref } from "firebase/storage";
interface ContainerProps {
  name: string;
}

const CreateNewContainer: React.FC<ContainerProps> = ({ name }) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [html, setHtml] = useState("");
  const songNameRef = useRef<HTMLIonInputElement>(null);
  const fileRef = useRef<HTMLIonInputElement>(null);
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
      const uploadAll = (result, url) => {
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

          postDataToDB(uploadContainer, ()=>setIsAlertOpen(true));
        } else {
          alert("Upload Failed");
          console.log(url);
        }
      };
      //! upload file first
      postDataToStorage(file, "test", songName, uploadAll);
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
          <IonTextarea ref={lyricsRef} label="lyrics" labelPlacement="floating" fill="outline" placeholder="Enter text" autoGrow></IonTextarea>
          {/* <textarea id="textInput"></textarea> */}
        </IonItem>
      </IonRow>
      <IonRow>
        <IonItem>
          <IonButton expand="full" style={{ width: "100%" }} onClick={upload}>
            Upload
          </IonButton>
        </IonItem>
        <IonAlert isOpen={isAlertOpen} header="Upload Successfully" subHeader="" message="Back to home page" buttons={["Back"]} onDidDismiss={() => setIsAlertOpen(false)}></IonAlert>
      </IonRow>
    </IonGrid>
  );
};

export default CreateNewContainer;
