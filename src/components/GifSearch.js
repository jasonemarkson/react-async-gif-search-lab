import React, { Component } from 'react';

class GifSearch extends Component {

    state = {
        search: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // add in a fetch request
        
        this.props.fetchGiphys(this.state.search)

    }

    handleChange = (event) => {
        this.setState ({
            search: event.target.value
        })
        // this.setState is a function that takes in a new state object as an argument -- no equals sign
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={event => this.handleChange(event)} value={this.state.search}
                ></input>
                <input type="submit"></input>
            </form>
        )
    }
}

export default GifSearch;