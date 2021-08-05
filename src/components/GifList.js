import React from 'react';

function GifList (props) {
    // convert from a class component to a functional component

    return (
        <ul>
            {
            props.gifs.map(element => {
                <li>
                    element.images.original.url
                </li>
            })
            }
        </ul>
    )
}

export default GifList;