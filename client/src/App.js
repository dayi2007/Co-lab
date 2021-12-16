import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, Route, useHistory } from "react-router-dom";
import PostList from "./components/Post/PostList";
import PostCreate from "./components/Post/PotsCreate";
import PostEdit from "./components/Post/PostEdit";
import UserEdit from "./components/User/UserEdit";
import LogIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";
import Profile from './screens/Profile';
import {  loginUser, registerUser, verifyUser, removeToken } from './services/auth';
import { getAllPosts, postPost, putPost, deletePost } from './services/post';

function App() {

  const [posts, setPosts] =useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();
  const[toggleFetch, setToggleFetch] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      const posts = await getAllPosts();
      setPosts(posts);
    };
    fetchPost();
  }, [toggleFetch])

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
    history.push('/');
  };
  const handlePostCreate = async (formData) => {
    const newPost = await postPost(formData);
    setPosts((prevState) => [...prevState, newPost]);
    history.push('/');
  };
  const handlePostUpdate = async (id, formData) => {
    const newPost = await putPost(id, formData);
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? newPost : post;
      }),
    );
    history.push('/');
  };
  const handlePostDelete = async (id) => {
    await deletePost(id);
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };
  posts.sort(function (a, b) {
    let time1 = new Date(a.created_at);
    let time2 = new Date(b.created_at);
    return time2 - time1;
  });

  return (
    <div> 
        <Link to="/">
        </Link>
          <Route exact path="/">
            <PostList currentUser={currentUser} posts={posts} handlePostDelete={handlePostDelete} handleLogout={handleLogout}/>
          </Route>
          <Route path='/login'>
            <LogIn handleLogin={handleLogin} />
          </Route>
          <Route path='/singup'>
            <SignUp handleSignUp={handleSignUp} />
          </Route>
          <Route exact path='/create'>         
            <PostCreate handlePostCreate={handlePostCreate} toggleFetch={toggleFetch} setToggleFetch={setToggleFetch} /> 
          </Route>
          <Route path='/posts/:id/edit'>
            <PostEdit posts={posts} currentUser={currentUser} handlePostUpdate={handlePostUpdate} />
          </Route>
          <Route path='/users/:id/edit'>
            <UserEdit currentUser={currentUser} setCurrentUser={setCurrentUser} />
          </Route>
          <div className="App">
          <Route exact path='/users/:id'>
            <Profile currentUser={currentUser} posts={posts} handlePostDelete={handlePostDelete} handleLogout={handleLogout} />
          </Route>
          </div>
    </div> 
  );
}

export default App;
