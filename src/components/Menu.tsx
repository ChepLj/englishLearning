import { IonButton, IonButtons, IonCol, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonRow, IonSearchbar, IonToggle, IonToolbar } from "@ionic/react";

import { chevronUpCircle, colorPalette, create, createOutline, globe, logoApple, moon, moonOutline, musicalNotesOutline, settings, settingsSharp } from "ionicons/icons";
import { useLocation } from "react-router-dom";
import "./Menu.css";
import { useContext, useEffect, useRef, useState } from "react";
import { MAIN_CONTEXT } from "../App";
import { ITF_Song } from "../interface/interface";

//const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { data } = useContext<any>(MAIN_CONTEXT);
  const darkModeRef = useRef<HTMLIonButtonElement>(null);
  let [results, setResults] = useState<ITF_Song[]>([]);
  const songList = useRef<ITF_Song[]>([]);
  useEffect(() => {
    if (data) {
      const songsObj = data.SONGS;
      const songTemp: ITF_Song[] = [];
      for (const key in songsObj) {
        const obj = {
          title: songsObj[key]?.name,
          url: `/folder/${songsObj[key]?.key}`,
          iosIcon: musicalNotesOutline,
          mdIcon: musicalNotesOutline,
        };
        songTemp.push(obj);
      }
      songList.current = songTemp.reverse();
      setResults(songList.current);
    }
  }, [data?.SONGS]);
  // END: Get Song
  const handleInput = (ev: Event) => {
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) {
      query = target.value!.toLowerCase();
      if (query) {
        const newSongResults = songList.current.filter((song) => {
          return song.title.toLowerCase().indexOf(query) > -1;
        });
        setResults(newSongResults);
      } else {
        setResults(songList.current);
      }
    }
  };
  // dark mode toggle
  const darkModeToggle = () => {
    const elm = document.getElementById("darkMode");
    if (!isDarkMode) {
      elm!.removeAttribute("disabled");
      setIsDarkMode(true);
    } else {
      elm!.setAttribute("disabled", "disabled");
      setIsDarkMode(false);
    }
  };
  return (
    <IonMenu contentId="main" type="overlay">
      <IonHeader>
        <IonRow>
          <IonCol>
            <IonListHeader><h5>Song List</h5></IonListHeader>
            <IonNote className="no-margin" style={{fontSize: 'small'}}>{`${results.length} songs`}</IonNote>
          </IonCol>

          <IonButtons>
            <IonButton ref={darkModeRef} onClick={darkModeToggle} size="small">
              <IonIcon slot="icon-only" ios={isDarkMode ? moon : moonOutline} md={isDarkMode ? moon : moonOutline} color="tertiary"></IonIcon>
            </IonButton>
            {/* <IonToggle ref={darkModeRef} checked={darkModeRef?.current?.checked} onClick={darkModeToggle} iconOn>Dark mode</IonToggle> */}
          </IonButtons>
        </IonRow>

        <IonToolbar>
          <IonSearchbar debounce={100} onIonInput={(ev) => handleInput(ev)}></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList id="inbox-list">
          {results.map((result, index) => {
            return (
              <IonMenuToggle key={`${result.title}-${Math.random()}`} autoHide={false}>
                <IonItem className={location.pathname === result.url ? "selected" : ""} routerLink={result.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={result.iosIcon} md={result.mdIcon} color={result.title == "Create" ? "danger" : ""} />
                  <IonLabel color={result.title == "Create" ? "danger" : ""}>{result.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton size="small">
            <IonIcon icon={chevronUpCircle}></IonIcon>
          </IonFabButton>
          <IonMenuToggle autoHide={false}>
            <IonFabList side="top">
              <IonFabButton>
                <IonIcon icon={settings}></IonIcon>
              </IonFabButton>
              <IonFabButton routerLink={"/folder/Create"} routerDirection="none">
                <IonIcon icon={create} color="danger"></IonIcon>
              </IonFabButton>
            </IonFabList>
          </IonMenuToggle>
        </IonFab>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
