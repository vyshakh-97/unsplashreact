import { useState, createContext, useMemo } from 'react';

const ImageContext = createContext(); 

const ImageContextProvider = (props) => {
    const [imageinfo, setImageinfo] = useState('');

const value = useMemo(
   () => ({imageinfo, setImageinfo}),[imageinfo])


    return (
        <ImageContext.Provider
            value={value}
        >
            {props.children}
        </ImageContext.Provider>
    );
}
export { ImageContext, ImageContextProvider };
