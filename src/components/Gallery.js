import React from 'react'
import Thumbnails from "../components/Thumbnails"
import "../styles/Gallery.css"
const Gallery = ({imgs}) => {
    return (
        <div className="gallery">
           {imgs.map((photo) =>
            <Thumbnails photo={photo} key={photo.id}/>
         ) }
        </div>
    )
}

export default Gallery
