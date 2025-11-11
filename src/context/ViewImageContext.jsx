import React, {createContext, useContext} from 'react';

const ImageContext = createContext();

export const ViewImageContext = ({children}) => {
    const [images, setImages] = React.useState([]);
    const [index, setIndex] = React.useState(0);
    const [showImages, setShowImages] = React.useState(false);


    return (
        <ImageContext.Provider value={{ images, setImages, index, setIndex, showImages, setShowImages }}>
            {children}
        </ImageContext.Provider>
    );
};

export const useImageContext = () => useContext(ImageContext)