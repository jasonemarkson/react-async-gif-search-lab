import React, { Component } from 'react';

class GifListContainer extends Component {
    componentDidMount() {
        const baseURL = `https://api.giphy.com/v1/gifs/search?q=birds&api_key=HSw8GBKxrMNwdQPML3izHMhx6FU4n1uo&rating=g`

        fetch(baseURL)
        .then(response => response.json())
        .then(data => {
            const imgContainer = document.createElement('div')
            document.body.append(imgContainer)

            data.data.slice(0, 3).forEach(e => {
                imgContainer.innerHTML += `<img src=${e.embed_url}><br>`
                }
            )
        })
    }

    render() {
        return (
            <button onClick={this.componentDidMount()}
            >Click Me!</button>
        )
    }
}

export default GifListContainer;