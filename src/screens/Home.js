import React, { useState, useEffect, useContext } from 'react'
import Gallery from '../components/Gallery';
import Navbar from '../components/Navbar'
import get from "../network/get"
import { ImageContext } from '../context/Contextprovider'
const Home = () => {
    const {imageinfo} = useContext(ImageContext);
    const [imgs, setImg] = useState([]);
    async function callasync(){
        const apidata=await get()
        setImg(apidata.data);
     }
     useEffect(() => {
        callasync();
     }, [imageinfo])
    return (
        <div>
            <Navbar />
            <Gallery imgs={imgs} />
        </div>
    )
}

export default Home
