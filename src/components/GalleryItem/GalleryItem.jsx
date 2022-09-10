import axios from "axios";
import { useState } from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'; 
import Card from '@mui/material/Card'; 
import CardActions from '@mui/material/CardActions'; 
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography';

function GalleryItem({picture, putGalleryList}) {
    const [toggle, setToggle] = useState (false);
   return (
    <Grid item xs={12} md={6} xl={4}>
        <Card elevation={5}>
            <div onClick={() => 
            setToggle(!toggle)}>
                {toggle ? (<Typography>{picture.description}</Typography>)
                :(<CardMedia component="img" height="800px" image={picture.path}/>)}

            </div>
        </Card>
        <CardActions>
            <Typography>Likes:{picture.likes}</Typography>
            <Button onClick={() =>
            putGalleryList(picture.id)}>Like</Button>
        </CardActions>
    </Grid>
   )
}

export default GalleryItem;