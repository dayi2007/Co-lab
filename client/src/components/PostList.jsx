import React from "react";
import { Link } from "react-router-dom";

const PostList = ({ posts, handlePostDelete, currentUser }) => {
    return(
        <div>
        {
            // console.log(props.posts)}{
            posts.map((post) =>(
                <div key={post.id} className='posts'>
                    <p>{post.message} ID {post.id}</p>
                    <img src={post.picture} />
                    <h3>user: {post.user_id}</h3> 
                    {currentUser?.id === post.user_id && (
                        <div className="editDelete"> 
                         <Link to={`/posts/${post.id}/edit`}>
                           <button>Edit</button>
                        </Link>                       
                        <button onClick={() => handlePostDelete(post.id)}>Delete</button>
                </div>                
                    )}  
            </div>
            ))   
        }
       <Link to='/create'>
        <button>Create</button>
      </Link>
        </div>
    )
}
export default PostList;