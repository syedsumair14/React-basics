import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: "Scorching Summers",
        iconName: "sun"
    },
    winter: {
        text: "Chilly Winters!",
        iconName: "snowflake"
    }
}

const getSeason = (lat, month) => {
    if(month > 2 && month <9){
        return lat > 0 ? "summer" : "winter"
    } else {
        return lat > 0 ? "winter" : "summer"
    }
}


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season]
    console.log(season)

    return (
        <div className={`season-display ${season}`}>
            <i className={` massive ${iconName} icon top-left`}></i>
            <h1>{text}</h1>
            <i className={`massive ${iconName} icon bottom-right`}></i>
        </div>
    )
}

export default SeasonDisplay;