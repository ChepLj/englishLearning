import { IonAlert, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { trashOutline } from "ionicons/icons";
import { useContext, useState } from "react";
import { useParams } from "react-router";
import { MAIN_CONTEXT } from "../App";
import CreateNewContainer from "../components/CreateNewContainer";
import ExploreContainer from "../components/ExploreContainer";
import "./Page.css";
import deleteFileFromStorage from "../api/deleteFileFromStorage";
import { ITF_SongData, ITF_UploadContainer } from "../interface/interface";
import postDataToDB from "../api/postDataToDB";
import { removeTooltip } from "../functions/removeTooltip";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { data, setRefresh } = useContext<any>(MAIN_CONTEXT);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [isAlertDeleteFileErrorOpen, setIsAlertDeleteFileErrorOpen] = useState(false);
  const songs = data?.SONGS;
  let title = "Create"
  if (songs) {
    title = songs[name]?.name || "Create";
  }

  //TODO:  callback delete file from storage
  const callbackDeleteFileFromStorage = (result: string) => {
    if (result === "delete file successfully") {
      const uploadContainer: ITF_UploadContainer[] = [
        {
          ref: `SONGS/${name}`,
          data: null,
        },
      ];
      const callback = (result) => {
        if (result == "post successfully!") {
          setIsAlertOpen(true);
          setRefresh(Math.random());
        } else {
          alert("delete Failed");
        }
      };
      postDataToDB(uploadContainer, callback);
    } else {
      setIsAlertDeleteFileErrorOpen(true);
    }
  };
  //TODO_END:  callback delete file from storage

  //TODO: handle delete
  const handleDelete = () => {
    //get song obj
    const songCurrent: ITF_SongData = songs[name];

    if (songCurrent.songURL) {
      deleteFileFromStorage(songCurrent.songURL, callbackDeleteFileFromStorage);
    } else {
      callbackDeleteFileFromStorage("delete file successfully");
    }
  };
  //TODO_END: handle delete

  return (
    <IonPage>
      <IonHeader>
        <IonAlert
          isOpen={isAlertDeleteFileErrorOpen}
          header="The audio file delete failed ! if you still want to delete Lyrics song. Click Force delete"
          buttons={[
            {
              text: "Cancel",
              role: "cancel",
              handler: () => {
                // console.log('Alert canceled');
              },
            },
            {
              text: "Force delete",
              role: "confirm",
              handler: () => {
                console.log("Alert Force delete confirmed");
                callbackDeleteFileFromStorage("delete file successfully");
              },
            },
          ]}
          onDidDismiss={() => setIsAlertDeleteFileErrorOpen(false)}
        ></IonAlert>
        <IonAlert
          isOpen={confirmDelete}
          header="Delete this song will unable restore"
          buttons={[
            {
              text: "Cancel",
              role: "cancel",
              handler: () => {
                // console.log('Alert canceled');
              },
            },
            {
              text: "Delete",
              role: "confirm",
              handler: () => {
                handleDelete();
              },
            },
          ]}
          onDidDismiss={() => setConfirmDelete(false)}
        ></IonAlert>
        <IonAlert isOpen={isAlertOpen} header="Delete song Successfully" subHeader={""} message="Open the menu to view song list" buttons={["ok"]} onDidDismiss={() => setIsAlertOpen(false)}></IonAlert>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle color="secondary">{title}</IonTitle>
          {title === "Create" ? (
            ""
          ) : (
            <IonButtons slot="end">
              <IonButton onClick={() => setConfirmDelete(true)}>
                <IonIcon slot="icon-only" icon={trashOutline} color="medium"></IonIcon>
              </IonButton>
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {title === "Create" ? <CreateNewContainer name={title} /> : <ExploreContainer keySong={name} key={name} />}
      </IonContent>
    </IonPage>
  );
};

export default Page;
