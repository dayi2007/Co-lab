import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../screens/Layout";
import Footer from "../Footer";
import './PostList.css';

const PostList = ({ posts, handlePostDelete, currentUser, handleLogout }) => {
    return(
    <div>
        <Layout currentUser={currentUser} handleLogout={handlePostDelete} handleLogout={handleLogout}>
        <div className='postsOutter'>
        {
             posts?.map((post) =>(
                <div key={post.id}className="card">
                    <div className="profileLink">
                        <Link to={`/users/${post.user_id}`} className="linkProfile">
                        <img className="imgPostUser" src={post.user.picture} alt="UserImage"/>
                        <h7>{post.user.username}</h7> </Link>
                    </div>
                    <div className="messagePicture">
                        <p className="message">{post.message}</p>
                        <img className="imgPost" src={post.picture} alt="Post Img"/>    
                        {currentUser?.id === post.user_id && (
                            <div className="editDelete"> 
                                <Link to={`/posts/${post.id}/edit`}>
                                    <button>Edit</button>
                                </Link>                       
                                <button onClick={() => handlePostDelete(post.id)}>Delete</button>
                            </div>                               
                        )} 
                    </div>  
                </div>
            ))   
        }
        </div>
       <Link to ={currentUser ? '/create' : '/login'}>
        <button>Create</button></Link> 
      </Layout>
      {/* <Footer /> */}
    </div>
    )
}
export default PostList;