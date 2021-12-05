 
import React, {useState} from 'react';
import Wavesurfer from 'react-wavesurfer';
 
function Uploaded (){
    const [playing, setPlaying] = useState(false);
    const [pos, setPos] = useState(0);

    let handleTogglePlay = function(){
        setPlaying(!playing);
    }

    let handlePosChange = function(e){
        setPos(e.originalArgs[0]);
    }

    return (
            <Wavesurfer
              audioFile={'http://localhost:3002/SameNameForAnyFileUploaded.mp3'}
              pos={pos}
              onPosChange={handlePosChange}
              playing={playing}
            />
          );
      }
    
  

export default Uploaded;