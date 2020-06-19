import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [received, setReceived] = useState(['']);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setReceived(response.data.slice(0, 9));
        console.log(received);
      });
  });
  
  const posts = received.map(post => {
  return <p>{post.title}</p>
  })

  return (
    <div className="App">
      <p>oi</p>
      {posts}
    </div>
  );
}

export default App;
