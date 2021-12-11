import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useHistory } from "react-router-dom";
import PostList from "./components/PostList";
import PostCreate from "./components/PotsCreate";
import LogIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";
// import UserProfile from "./components/UserProfile";
import { getAllPosts } from "./services/post.js";
import {  loginUser, registerUser, verifyUser, removeToken } from './services/auth';
import { getAllPost, postPost, putPost, deletePost } from './services/post';

function App() {

  const [posts, setPosts] =useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchPost = async () => {
      const posts = await getAllPosts();
      setPosts(posts);
      console.log(posts);
    };
    fetchPost();
  }, [])

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleSignUp = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };
  const handlePostCreate = async (formData) => {
    const newFood = await postPost(formData);
    setPosts((prevState) => [...prevState, newFood]);
    history.push('/');
  };

  return (
    <main>
  {/* <Layout currentUser={currentUser} handleLogout={handleLogout}> */}
        {/* <Switch> */}
        <Link to="/">
          <h1>Posts</h1>
        </Link>
          <Route exact path="/">
            <PostList posts={posts} />
          </Route>
          <Route path='/login'>
            <LogIn handleLogin={handleLogin} />
          </Route>
          <Route path='/singup'>
            <SignUp handleSignUp={handleSignUp} />
          </Route>
          <Route path='/create'>
          <PostCreate handlePostCreate={handlePostCreate} />
          </Route>

          {/* <Route path='/'>
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
