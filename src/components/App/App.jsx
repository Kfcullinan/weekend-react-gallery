import {useState, useEffect} from 'react';
import React from 'react';
import './App.css';
import axios from 'axios'; 
import GalleryList from '../GalleryList/GalleryList';
import Container from '@mui/material/Container';

function App() {
//          GETTER      SETTER - CREATE VARIABLES USING USESTATE AS BELOW
  const [galleryItems, setGalleryItems] = useState ([

  ]);

  const likeImage = (id) => {
    console.log('in likeImage');
}
 
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

  const putGalleryList = (pictureId) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${pictureId}`,
    }).then(response => {
      console.log(response);
      fetchGallery();
    }).catch(error => {
      console.log(error);
      alert('something went wrong!');
    });
  }

    return (
      <Container className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryList={galleryItems}
        putGalleryList={putGalleryList}
       />
      </Container>
    );
}

export default App;
