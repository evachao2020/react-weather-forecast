import React, {Component} from 'react';
import './style.css';

class SearchBar extends Component {
    state = {
        searchCity: ""
    }

    inputHandler = (e) => {
        this.setState({
            searchCity: e.target.value
        })
    }

    formHandle = (event) => {
        event.preventDefault()
        this.props.receCity(this.state.searchCity)
        this.setState({searchCity: ""})
    }

    render() {
        // console.log(this.state.searchCity)
        return (
            <div>
                <form onSubmit={this.formHandle}>
                    <input name="searchCity" type="text" className="searchBar" value={this.state.searchCity} onChange={this.inputHandler}/>
                    <button type="submit" className="searchBtn">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;