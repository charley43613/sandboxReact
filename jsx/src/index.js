//<!--Special file -->


//import the react and reactdom libraries
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
//create a react component
//also written as 'const App = function()=>{}





const App = () => {
    const [posts, setPosts] = useState([]);//empty fo rfirst time

    useEffect(() => {
        const url = 'http://localhost:8080/img-service-fm/Blog/'
        fetch(url).then(resp => resp.json())
            .then(resp => setPosts(resp))

    }, [])
    return (
        <div className="ui container comments">

            {
                posts.map(post =>
                    <ApprovalCard>
                        <CommentDetail author={post.author} timeAgo={post.timeago} commentText={post.commentText} avatar={faker.image.image()} />
                    </ApprovalCard>)
            }
        </div>

    )
};

//Take the react component and show on the screen
//this is query selected from public/index.html to start the root
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);