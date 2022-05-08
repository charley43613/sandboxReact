import React from 'react';

//Section 3:Communicating with props:Contains parent/child passing of data in react POC using 'props'
const CommentDetail = (props)=>{



    return(
   
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">{props.commentText}</div>
            </div>

        </div>

    )
}

export default CommentDetail;