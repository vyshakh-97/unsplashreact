import React, { useState } from 'react'
import Gallery from '../components/Gallery';
import Navbar from '../components/Navbar'
import get from "../network/get"

const Home = () => {
    const [imgs, setImg] = useState([]);
    async function callasync(){
        const apidata=await get()
        setImg(apidata.data);
     }
     callasync();
    return (
        <div>
            <Navbar />
            <Gallery imgs={imgs} />
        </div>
    )
}

export default Home
