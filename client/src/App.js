import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";

function App() {

  const [posts, setPosts] =useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const posts = await getAllPosts();
      setPosts(posts)
    }

  }, [])


  return (
    <div className="App">

      
    </div>
  );
}

export default App;
