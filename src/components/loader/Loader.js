import React from 'react';
import './Loader.css'
import { BiLoaderAlt } from 'react-icons/bi' ;

const Loader = ({loaderStyle}) => {
    return (
        <BiLoaderAlt style={loaderStyle} className="loader"/>
    )
}

export default Loader
