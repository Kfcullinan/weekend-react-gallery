import axios from "axios";
import {useState, useEffect} from 'react';
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList, likeImage}) {
    return (
        <div>
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
        </div>
    );
    }
    
export default GalleryList;

//<button onClick={() =}. likeImage(gallery.id)}