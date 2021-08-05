import React, { Component } from 'react';

class GifSearch extends Component {

    state = {
        search: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // add in a fetch request
        
        // const searchValue = event.target.firstElementChild.value
        
        this.setState ({
            search: event.target.firstElementChild.value
        })

    }

    handleChange = (event) => {
        console.log(event)
        this.setState ({
            search: event.target.value
        })
        // this.setState is a function that takes in a new state object as an argument -- no equals sign
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} value={this.state.search}
                ></input>
                <input type="submit"></input>
            </form>
        )
    }
}

export default GifSearch;