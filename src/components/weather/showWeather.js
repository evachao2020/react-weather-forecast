import React from "react";

const Showweather = (props) => {
    return (
        <div>
            <h1><p className="locationStyle" align="center">{props?.weatherdisplay?.location?.name}</p></h1>
            <div className="weatherDispaly">
                <div className="weatherPic"><img src={props?.weatherdisplay?.current?.weather_icons[0]} alt="weatherpic" id="weatherimg"></img></div>
                <div className="weatherContent">
                    <p>Time is : {props?.weatherdisplay?.location?.localtime}</p>
                    <p>Temperature is : {props?.weatherdisplay?.current?.temperature}</p>
                    <p>Feelslike is : {props?.weatherdisplay?.current?.feelslike}</p>
                    <p>Weather Descriptions : {props?.weatherdisplay?.current?.weather_descriptions[0]}</p>
                    <p>Wind Speed : {props?.weatherdisplay?.current?.wind_speed}</p>
                    <p>Pressure : {props?.weatherdisplay?.current?.pressure}</p>
                </div>
            </div>
        </div>

    )
}

export default Showweather