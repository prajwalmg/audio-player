import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();
  const [file, setFile] = useState();

  function onChange(event){
    console.log(event.target.files);
    setFile(event.target.files[0]);
  }

  function onSubmit(event){
    event.preventDefault();

    navigate('/uploaded');

    const data = new FormData();
    data.append('file', file);
    axios.post('//localhost:8000/uploaded', data).then((e) => {
      console.log('Success');
    })
    .catch((e) => {
      console.error('Error', e);
    })
  }

  return (
    <div>
      <h1>Welcome to the sensation</h1>
      <form action="#" method="post" onSubmit={onSubmit}>
        <input onChange={onChange} type="file" placeholder="Upload your audio here"></input>
        <button type="submit" name="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home;