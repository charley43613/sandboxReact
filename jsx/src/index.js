//<!--Special file -->


//import the react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
//create a react component
//also written as 'const App = function()=>{}


const App = () => {
    return (<div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.image()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>

            </div>
        </div>

    )};

//Take the react component and show on the screen
//this is query selected from public/index.html to start the root
ReactDOM.render(
        <App/>,
        document.querySelector('#root')     
);