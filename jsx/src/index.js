//<!--Special file -->


//import the react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
//create a react component
//also written as 'const App = function()=>{}


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" commentText="Rainbows and butterflys" avatar={faker.image.image()}/>

            </ApprovalCard>
            <CommentDetail author="Alex" timeAgo="Today at 4:45PM" commentText="I have a bellybutton!" avatar={faker.image.image()}/>
            <CommentDetail author="Charles" timeAgo="Today at 4:45PM" commentText="Hello there nerds!" avatar={faker.image.image()}/>
            
        </div>

    )};

//Take the react component and show on the screen
//this is query selected from public/index.html to start the root
ReactDOM.render(
        <App/>,
        document.querySelector('#root')     
);