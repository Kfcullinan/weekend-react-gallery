import {useState, useEffect} from 'react';
import React from 'react';
import './App.css';
import axios from 'axios'; //needed?
import GalleryList from '../GalleryList/GalleryList'


function App() {
//          GETTER      SETTER - CREATE VARIABLES USING USESTATE AS BELOW
  const [galleryItems, setGalleryItems] = useState ([

  ]);

  useEffect(() => {
    console.log('useEffect - page load');
    fetchGallery();
  }, []);

  //GET request to our server
  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then(response => {
      setGalleryItems(response.data);
      console.log(response.data);
    }).catch(error => {
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
        <GalleryList/>
      </div>
    );
}

export default App;
