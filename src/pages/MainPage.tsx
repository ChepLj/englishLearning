import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonNote, IonPage, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import { useContext, useEffect, useRef, useState } from "react";

import { ITF_Song } from "../interface/interface";
import { musicalNotesOutline } from "ionicons/icons";
import { MAIN_CONTEXT } from "../App";

const MainPage: React.FC = () => {
  const { data } = useContext<any>(MAIN_CONTEXT);
  const songList = useRef<ITF_Song[]>([]);
  let [results, setResults] = useState<ITF_Song[]>([]);
  // Get song

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
        const newSongResults = results.filter((song) => {
          return song.title.toLowerCase().indexOf(query) > -1;
        });
        setResults(newSongResults);
      } else {
        setResults(songList.current);
      }
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle slot="start" color="secondary">
            Song List
          </IonTitle>
          <IonNote slot="end">{`${results.length} songs`}</IonNote>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar debounce={100} onIonInput={(ev) => handleInput(ev)}></IonSearchbar>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonList>
          {results.map((result, index) => {
            return (
              <IonItem key={`${result.title}-${Math.random()}`} className={location.pathname === result?.url ? "selected" : ""} routerLink={result?.url} routerDirection="none" lines="none" detail={false}>
                <IonIcon aria-hidden="true" slot="start" ios={result?.iosIcon} md={result?.mdIcon} />
                <IonLabel>{result?.title}</IonLabel>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default MainPage;
