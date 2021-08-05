import React from 'react';

function GifList (props) {
    // convert from a class component to a functional component

    return (
        <ul>
            {
            props.gifs.map(element => {
                return (<li>
                    <img src={element.images.original.url} alt="giphy"/>
                </li>)
            })
            }
        </ul>
    )
}

export default GifList;