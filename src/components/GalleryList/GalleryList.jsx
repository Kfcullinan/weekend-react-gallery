
import {useState, useEffect} from 'react';
import GalleryItem from "../GalleryItem/GalleryItem";
import Grid from "@mui/material/Grid";



function GalleryList({galleryList, putGalleryList}) {
    return (
        <Grid container spacing={4}>
            {galleryList.map((picture) => {
                return <GalleryItem key={picture.id} picture={picture} putGalleryList = {putGalleryList} />
            })}
        </Grid>
    )
}
    
    
export default GalleryList;

