import React, {useState, useEffect} from 'react';

import axios from 'axios';
import Post from '../Post/Post';
import Header from '../Header/Header';
import NewPost from '../NewPost/NewPost';
import {Route} from 'react-router-dom';
import Home from '../Home/Home';

const Blog = (props) => {

    const [received, setReceived] = useState(['']);
    const [newTitle, setNewTitle] = useState("");
    const [newBody, setNewBody] = useState("");
    const [newAuthor, setNewAuthor] = useState("");
    const [post, setNewPost] = useState('');

    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          setReceived(response.data.slice(0, 20));
        });
    });
  
    const posts = received.map(post => {
    return (
      <Post title={post.title} body={post.body} author={"Author: Internet"}/>
      ); 
    });


    const onChangeTitle = (event) => {
        return setNewTitle(event.target.value);
    };

    const onChangeText = (event) => {
        return setNewBody(event.target.value);
    };

    const onChangeAuthor = (event) => {
        return setNewAuthor(event.target.value);
    };

    const onClickHandler = () => {
        return setNewPost({
            title: newTitle,
            body: newBody,
            author: newAuthor
        });
    };

    return (
        <div>
            <Header/>
            <Route path="/" exact>
                <h1>Your Posts</h1>
                <Home title={post.title} body={post.body} author={post.author}/>
            </Route>
            <Route path="/posts">
                {posts}
            </Route>
            <Route path="/new-post">
                <NewPost changeTitle={onChangeTitle}
                changeText={onChangeText} 
                changeAuthor={onChangeAuthor}
                click={onClickHandler}/>
            </Route>
        </div>
    );
  
};

export default Blog;

