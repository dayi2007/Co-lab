import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useHistory } from "react-router-dom";
import PostList from "./components/PostList";
import PostCreate from "./components/PotsCreate";
import PostEdit from "./components/PostEdit";
import Layout from "./components/Layout";
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
    const newPost = await postPost(formData);
    setPosts((prevState) => [...prevState, newPost]);
    history.push('/');
  };
  const handlePostUpdate = async (id, formData) => {
    const newPost = await putPost(id, formData);
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? newPost : post;
      })
    );
    history.push('/posts');
  };
  const handlePostDelete = async (id) => {
    await deletePost(id);
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };

  console.log(currentUser)
  // const image = currentUser.picture
  // const img = image.toString()
  // console.log(img)

  return (
 
    <Layout currentUser={currentUser} handleLogout={handleLogout}>
        {/* <Switch> */}
        <Link to="/">
        </Link>
          <Route exact path="/">
            <PostList currentUser={currentUser} posts={posts} handlePostDelete={handlePostDelete}/>
          </Route>
          <Route path='/login'>
            <LogIn handleLogin={handleLogin} />
          </Route>
          <Route path='/singup'>
            <SignUp handleSignUp={handleSignUp} />
          </Route>
          <Route exact path='/create'>
          <PostCreate handlePostCreate={handlePostCreate} />
          </Route>
          <Route exact path='/posts/:id/edit'>
          <PostEdit posts={posts} handlePostUpdate={handlePostUpdate} />
          </Route>
          {/* <Route  path="/posts/:id">
            <Post currentUser={currentUser} posts={posts} handlePostDelete={handlePostDelete}/>
          </Route> */}
        {/* </Switch> */}
 
      {/* <footer>
        <p>&copy; CodeDiamonds Co.</p>
      </footer> */}
      </Layout>
  

      

  );
}

export default App;
