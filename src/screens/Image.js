import {React, useContext} from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ImageContext } from '../context/Contextprovider'
import "../styles/Gallery.css"
const Image = () => {
    const {imageinfo} = useContext(ImageContext);
    console.log(imageinfo);
    return (
        <>
        <Navbar />
        <div className="imagedisplay">
        <img src={imageinfo.urls.regular} />
        <div className="user">
        
        <a href={imageinfo.user.links.html}>
        
            <img src={imageinfo.user.profile_image.small} />
            <span className="usertext">
             { imageinfo.user.username}
             </span>
             </a>
        </div>
        </div>
        </>
    )
}

export default Image
