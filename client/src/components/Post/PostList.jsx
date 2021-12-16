import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../screens/Layout";
import './PostList.css';
import edit from '../../assets/edit.png';
import trash from '../../assets/binPaper.png';
import like from '../../assets/favorite.png';
import Classes from '../Classes'

const PostList = ({ posts, handlePostDelete, currentUser, handleLogout }) => {    window.scrollTo(0, 0)
    return(
    <div>
       <Layout currentUser={currentUser} handlePostDelete={handlePostDelete} handleLogout={handleLogout}>
        <Classes />
        <div className='postsOutter'>
        {
             posts?.map((post) =>(
                <div key={post.id}className="card">
                    <div className="profileLink">
                        <Link to={`/users/${post.user_id}`} className="linkProfile">
                        <img className="imgPostUser" src={post.user.picture} alt="UserImage"/>
                        <h6>{post.user.username}</h6> </Link>
                    </div>
                    <div className="messagePicture">
                        <p className="message">{post.message}</p>
                        <img className="imgPost" src={post.picture} alt="Post Img"/>  
                        <div className="iconsCard"> 
                        <button><img src={like} alt="like"/></button> 
                        {currentUser?.id === post.user_id && (
                            <div className="editDelete"> 
                                <Link to={`/posts/${post.id}/edit`}>
                                    <button className="buttonEdit"><img src={edit} alt="edit"/></button>
                                </Link>                       
                                <button className="buttonDelete" onClick={() => handlePostDelete(post.id)}><img src={trash} alt="trash"/></button>
                            </div>                               
                        )} 
                        </div>
                    </div>  
                </div>
            ))   
        }
        </div>
       <Link to ={currentUser ? '/create' : '/login'}>
        <button>Create</button></Link> 
      </Layout>
    </div>
    )
}
export default PostList;