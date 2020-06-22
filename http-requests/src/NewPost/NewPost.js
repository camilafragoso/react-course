import React, { useState } from 'react';

const NewPost = (props) => {

    return (
        <div>
            <h1>New Post</h1>
            <h3>Title:</h3>
            <input type="text" id="title" onChange={props.changeTitle}></input>
            <h3>Content:</h3>
            <textarea rows="4" id="body" onChange={props.changeText}></textarea>
            <h3>Author:</h3>
            <input type="text" id="author" onChange={props.changeAuthor}></input>
            <button onClick={props.click}>Add Post</button>
        </div>
    );
};

export default NewPost;