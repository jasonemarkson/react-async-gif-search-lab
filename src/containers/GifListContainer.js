import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    componentDidMount() {
        const baseURL = `https://api.giphy.com/v1/gifs/search?q=birds&api_key=HSw8GBKxrMNwdQPML3izHMhx6FU4n1uo&rating=g`

        fetch(baseURL)
        .then(response => response.json())
        .then(data => {
            this.setState({gifs: data.data.slice(0, 3)})
        })
    }

    render() {
        return (
            <div>
                <GifSearch />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer;