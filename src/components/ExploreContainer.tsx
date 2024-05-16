import { useEffect, useRef, useState } from 'react';
import './ExploreContainer.css';
import './style.css'
import {data} from '../var'

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const refData = useRef('')
  const [state,setState] = useState(false)
  const [content, setContent] = useState('');
  useEffect(()=>{
    //refData.current = data
    //setState(!state)
    fetch('https://firebasestorage.googleapis.com/v0/b/document-transfer-95c5d.appspot.com/o/1131%2FFILE%2F1715877054474%2Ftext.html?alt=media&token=3a632540-7ce5-4ed0-8ced-1880da1dbb36')
    .then(response => response.text())
    .then(data => {setContent(data);console.log(data)})
    .catch(error => console.error('Error fetching HTML:', error));
  },[])
  return (
    <div id="container" dangerouslySetInnerHTML={ {__html : refData.current}}>
      
    </div>
  );
};



export default ExploreContainer;
