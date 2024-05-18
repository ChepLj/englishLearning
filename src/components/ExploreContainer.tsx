import { useContext, useDebugValue, useEffect, useRef, useState } from "react";
import { MAIN_CONTEXT } from "../App";
import "./ExploreContainer.css";
import "./style.css";
import tooltipInit from "../functions/transcription";

interface ContainerProps {
  keySong: string;
}
interface ITF_SongData {
  isFavorite: boolean;
  karaokeURL: string;
  key: string | number;
  lyrics: string;
  name: string;
  songURL: string;
}
const initSong = {
  isFavorite: "",
  karaokeURL: "",
  key: "",
  lyrics: "",
  name: "",
  songURL: "",
};
const ExploreContainer: React.FC<ContainerProps> = ({ keySong }) => {
  const [content, setContent] = useState(initSong);
  const { data } = useContext<any>(MAIN_CONTEXT);
  const audioRef = useRef<HTMLAudioElement>(null);

    
  audioRef?.current?.pause()


  
  useEffect(() => {
    if (data?.SONGS) {
      setContent(data.SONGS[keySong]);
      // initialise tooltips
      tooltipInit()
    }
  }, [keySong ,data?.SONGS]);

  
  return (
    <div id="container">

      <audio ref={audioRef} id="audio" controls src={content.songURL} key={'keySong'}></audio>
      <div dangerouslySetInnerHTML={{ __html: content.lyrics }}></div>
    </div>
  );
};
  

export default ExploreContainer;
