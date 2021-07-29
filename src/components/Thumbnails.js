import {React, useContext} from 'react'
import { ImageContext } from '../context/Contextprovider'
import "../styles/Gallery.css"
const Thumbnails = ({photo,key}) => {
    const {setImageinfo} = useContext(ImageContext);
    return (
        <div className="thumbs">
            <img src={photo.urls.small}  key={key} onClick={() =>setImageinfo(photo)}/>
        </div>
    )
}

export default Thumbnails;
