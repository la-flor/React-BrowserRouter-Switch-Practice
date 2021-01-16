import React from 'react';
import {useParams} from 'react-router-dom';
import './FilteredColor.css';

function FilteredColor({rgb}) {
    const {color} = useParams();

    if(color) {
        const currentColor = rgb.find(
            c => c.toLowerCase() === color.toLowerCase()
        );
        return (
            <div className="FilteredColor" style={{backgroundColor:`${currentColor}`}}>
                <h1>{currentColor}</h1>
            </div>
        )
    }
    return null;
}

export default FilteredColor;