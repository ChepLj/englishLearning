import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonToggle } from "@ionic/react";

import { createOutline, musicalNotesOutline } from "ionicons/icons";
import { useLocation } from "react-router-dom";
import "./Menu.css";
import { useContext } from "react";
import { MAIN_CONTEXT } from "../App";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}



//const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();
  const { data } = useContext<any>(MAIN_CONTEXT);
  const appPages: AppPage[] = [
    {
      title: "Create",
      url: "/folder/Create",
      iosIcon: createOutline,
      mdIcon: createOutline,
    }
  ];
  if (data) {
    const songsObj = data.SONGS;
    const songsArray: AppPage[] = [];

    for (const key in songsObj) {
      const obj = {
        title: songsObj[key]?.name,
        url: `/folder/${songsObj[key]?.key}`,
        iosIcon: musicalNotesOutline,
        mdIcon: musicalNotesOutline,
      };
      songsArray.push(obj);

    }
    Array.prototype.push.apply(appPages, songsArray.reverse());
  }
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Song List</IonListHeader>
          <IonItem>
            <IonNote>50 songs</IonNote>
            <IonToggle  checked={true}>Dark mode</IonToggle>
          </IonItem>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? "selected" : ""} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} color={appPage.title == "Create" ? "danger" : ""} />
                  <IonLabel color={appPage.title == "Create" ? "danger" : ""}>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
