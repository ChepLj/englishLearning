import { useContext, useEffect, useRef, useState } from "react";
import { MAIN_CONTEXT } from "../App";
import { removeTooltip } from "../functions/removeTooltip";
import tooltipInit from "../functions/transcription";
import "./ExploreContainer.css";
import "./style.css";

interface ContainerProps {
  keySong: string;
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
  audioRef?.current?.pause();

  useEffect(() => {
    if (data?.SONGS[keySong]) {
      setContent(data.SONGS[keySong]);
      // initialise tooltips
      tooltipInit();
    } else {
      window.location.replace("/")
    }
  }, [keySong, data?.SONGS]);

  return (
    <div id="container">
      <audio ref={audioRef} id="audio" controls src={content?.songURL}></audio>
      <div dangerouslySetInnerHTML={{ __html: content?.lyrics }} onClick={removeTooltip}></div>
    </div>
  );
};

export default ExploreContainer;
