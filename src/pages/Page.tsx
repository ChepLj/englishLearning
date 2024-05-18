import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useParams } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import "./Page.css";
import CreateNewContainer from "../components/CreateNewContainer";
import { useContext } from "react";
import { MAIN_CONTEXT } from "../App";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { data } = useContext<any>(MAIN_CONTEXT);
  const songs = data?.SONGS

  if(songs){
    var title = songs[name]?.name || "Create"   
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle color="secondary">{title}</IonTitle>
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
