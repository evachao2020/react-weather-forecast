import React, {Component} from 'react';
import Searchbar from './searchBar';
import './style.css';
import axios from 'axios';
import Showweather from "./showWeather";

class Weather extends Component {

    state = {
        images: "/img/back1.jpg",
        newCity: "toronto",
        loading: true,
        weather: undefined,
        picRandom: 0
    }


    thiscityUpdate = () => {
        const apiKey = '33c50796b1b4a7ab8e6101b4dde0c3c2'
        axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${this.state.newCity}`).then(res => {
            console.log(res.data.success)
            if(res.data.success === false){
                this.setState({newCity: "toronto"})
            }else{
                this.setState({weather: res.data})
            }
        }).catch(werr => {
            console.log(werr)
            this.setState({newCity: "toronto"})
        })
        // setTimeout(
        // console.log('run1')
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: this.state.newCity,
                page:1,
                per_page: 10
            },
            headers: {
                Authorization: 'Client-ID DGc62apQ1xE4VOLQ8tqfK1Z6Q14h5dT0KNJS6b8wNaw',
            }
        })
            .then(res => {
                console.log(res.data)
                console.log(res.data.results[this.state.picRandom].urls["regular"])
                this.setState({loading: false, images: res.data.results[this.state.picRandom].urls["regular"]})

                // this.props.recvImages(this.state.images)
            })
            .catch(err => {
                console.log(err)
                this.setState({loading: false})
            })
    }

    componentDidMount() {
        this.thiscityUpdate()

    }

    receiveCity = (city) => {
        this.setState({newCity: city})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevState.newCity !== this.state.newCity){
            this.setState({newCity: this.state.newCity, picRandom: Math.floor(Math.random()*10+1)})

            this.thiscityUpdate()
        }
    }


    render() {
        // console.log('===========++++++', this.state.images)
        return (
            <div className="container">
                <div className="showPic" style={{backgroundImage: `url(${this.state.images})`}}></div>
                <div className="showContext">
                    <Searchbar receCity={city => this.receiveCity(city)}/>
                    <Showweather weatherdisplay={this.state.weather}></Showweather>
                </div>

            </div>
        );
    }
}

export default Weather;
