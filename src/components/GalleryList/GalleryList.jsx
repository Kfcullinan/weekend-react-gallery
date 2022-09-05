import {useState, useEffect} from 'react';


function GalleryList({galleryList, likeImage}) {
    return (
        <ul>
        {
        galleryList.map((galleryList) => {
          console.log(galleryList);
          return <li key={galleryList.id} >
            {galleryList.description} likes: {galleryList.likes}
            <img src={galleryList.path} 
            likeImage={likeImage} />
            </li>

        })
       }
        </ul>
    );
    }
    
export default GalleryList;

//<button onClick={() =}. likeImage(gallery.id)}