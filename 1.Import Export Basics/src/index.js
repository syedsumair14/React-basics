import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    return( 
        <div>
            <label htmlFor="name">Name: </label>
            <input id="name" type="text"></input>
            <button style={{background: 'dodgerblue', color:'white'}}>
            {changedText()}
            </button>         
        </div>
    )
};
ReactDOM.render(<App />, document.querySelector('#root'))