import React from "react";
// import { Link } from "react-router-dom";

const PostList = (props) => {
    return(
        <div>
        {
            console.log(props.posts)}{
            props.posts.map(post =>(
                <div key={post.id} className='posts'>
                 <p>{post.message}</p>
                 <h3>user: {post.user_id}</h3>   
                </div>
            ))
        }
        </div>
    )
}
export default PostList;