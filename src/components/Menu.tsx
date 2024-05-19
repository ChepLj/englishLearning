import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonToggle } from "@ionic/react";

import { createOutline, musicalNotesOutline } from "ionicons/icons";
import { useLocation } from "react-router-dom";
import "./Menu.css";
import { useContext, useRef } from "react";
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
  const darkModeRef = useRef<HTMLIonToggleElement>(null)
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
    var songsArray: AppPage[] = [];

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

  // dark mode toggle
  const darkModeToggle = ()=>{
    const elm = document.getElementById('darkMode')
    if(darkModeRef?.current?.checked){
      elm!.removeAttribute("disabled")
    }
    else{
      elm!.setAttribute('disabled', 'disabled')
    } 
  }
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Song List</IonListHeader>
          <IonNote className="no-margin">{`${appPages.length -1} songs`}</IonNote>
          <br></br>
          <IonItem>
            <IonToggle ref={darkModeRef} checked={darkModeRef?.current?.checked} onClick={darkModeToggle}>Dark mode</IonToggle>
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
