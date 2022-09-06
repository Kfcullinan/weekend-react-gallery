import axios from "axios";
import { useState } from "react";


function GalleryItem({GalleryList}) {
    const [toggle, setToggle] = useState (false);
    return (
            <div>

                <button>
                    <img style={{ width: 300 + 'px' }} src={GalleryList.path} /></button>

                <br />
                <br />

                <button>Like</button>

                <br />
                <br />
                <br />
            </div>
           );    
}

export default GalleryItem;