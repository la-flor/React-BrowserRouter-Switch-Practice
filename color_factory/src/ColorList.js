import React from 'react';
import {Link} from 'react-router-dom';

function ColorList({rgb}) {
    return (
        <div className="ColorList">
            <ol>
                {rgb.map(color => (
                    <Link to={`/colors/${color.toLowerCase()}`}>
                        <li>{color}</li>
                    </Link>
                ))}
            </ol>
        </div>
    )
}

export default ColorList;