import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lat: null,
        }
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition( success => {this.setState({lat: success.coords.latitude})},
        err => {this.setState({errorMessage:err.message})})
     }

    render() {
       if(this.state.lat && !this.state.errorMessage){
           return <SeasonDisplay lat={this.state.lat}/>
       }
       return <div>Error, Permission denied.</div>
    }
}


ReactDOM.render(<App />,document.getElementById('root'))