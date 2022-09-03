import {useState, useEffect} from 'react';
import React from 'react';
import './App.css';
import axios from 'axios'; //needed?



function App() {

  const [galleryList, galleryItems] = useState ([

  ]);

  useEffect(() => {
    console.log('useEffect - page load');
    fetchGallery();
  }, []);


  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then(response => {
      setGalleryItems(response.data);
      console.log(response.data);
    }).catch(error =>{
      console.log(error);
      alert('something went wrong!');
    });
  }





    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <ul>
       
        </ul>
      </div>
    );
}

export default App;
