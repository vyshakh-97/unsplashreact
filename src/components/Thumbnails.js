import {React, useContext} from 'react'
import { ImageContext } from '../context/Contextprovider'
import "../styles/Gallery.css"
import {Link} from 'react-router-dom';
const Thumbnails = ({photo,key}) => {
    const {setImageinfo} = useContext(ImageContext);
    return (
        <div className="thumbs">
         <Link to="/image" style={{color:"black",textDecoration: 'none' }}>
              <img src={photo.urls.small}  key={key} onClick={() =>setImageinfo(photo)}/>
         </Link>
        </div>
    )
}

export default Thumbnails;
