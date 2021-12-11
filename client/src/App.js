import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import PostList from "./components/PostList";
// import UserProfile from "./components/UserProfile";
import { getAllPosts } from "./services/post.js";
// import { getAllPosts } from "./services/api-config.js";
import {  loginUser, registerUser, verifyUser, removeToken } from './services/auth';

function App() {

  const [posts, setPosts] =useState([]);
  // const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const posts = await getAllPosts();
      setPosts(posts);
      console.log(posts);
    };
    fetchPost();
  }, [])

  // useEffect(() => {
  //   const handleVerify = async () => {
  //     const userData = await verifyUser();
  //     setCurrentUser(userData);
  //   };
  //   handleVerify();
  // }, []);

  // const handleLogin = async (formData) => {
  //   const userData = await loginUser(formData);
  //   setCurrentUser(userData);
  //   // history.push('/');
  // };

  // const handleRegister = async (formData) => {
  //   const userData = await registerUser(formData);
  //   setCurrentUser(userData);
  //   // history.push('/');
  // };
  // const handleLogout = () => {
  //   setCurrentUser(null);
  //   localStorage.removeItem('authToken');
  //   removeToken();
  // };


  return (
    <main>
  {/* <Layout currentUser={currentUser} handleLogout={handleLogout}> */}
        {/* <Switch> */}
        <Link to="/">
          <h1>Posts</h1>
        </Link>
        <Route exact path="/">
          <PostList
            posts={posts}
          />
        </Route>
          {/* <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path='/register'>
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path='/'>
            <MainContainer currentUser={currentUser}/>
          </Route> */}
        {/* </Switch> */}
      {/* </Layout> */}
      <footer>
        <p>&copy; CodeDiamonds Co.</p>
      </footer>
      </main>

      

  );
}

export default App;
