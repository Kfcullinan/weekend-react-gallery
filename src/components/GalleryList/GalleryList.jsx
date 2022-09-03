import {useState, useEffect} from 'react';


function GalleryList() {
    return (
        {      
            <li> 
               { galleryList.map(items => {
                    return <GalleryItems key={item.id} item={item}/> 
                    </li>   
            })}
            
            
        
    )
}
export default GalleryList;