import {useState, useEffect} from 'react';


function GalleryItems() {
    return (
        <ul>
        {
        galleryItems.map((galleryItems) => {
          console.log(galleryItems);
          return <li key={galleryItems.id} >
            {galleryItems.description} likes: {galleryItems.likes}
            <img src={galleryItems.path} />
            </li>

        })
       }
        </ul>
    );
    }
    
export default GalleryList;