// import PostList from "../components/Post/PostList";
import { Link } from "react-router-dom";
import logo from '../assets/logoSmall.png';
import './Profile.css'
import { useParams } from "react-router";

export default function Profile({currentUser, posts, handlePostDelete, user}){
    console.log(currentUser.id)
    const { id } = useParams()
    console.log(posts)
    console.log(user)

   let newUsers =[]
    posts.map((post) =>(
        newUsers.push(post.user.id)
    ))
    console.log(newUsers);
   const newId = newUsers.find(element => element === parseInt(id))

    console.log(newId)


    return(
    <div>
        {currentUser.id === parseInt(id) ? (
        <div>    
            <img className="profileImg" src={currentUser.picture} alt="userPicture"/> 
            <Link className="logoOverlap" to='/'><img src={logo} alt="Co-Lab"/></Link>
            <div className="userInfo">
            <h1>{currentUser.username}</h1> 
            <Link to ='/create'><button>Create</button></Link> 
            {
            posts.map((post) =>(
                <div key={post.id} className='posts'>
                {currentUser?.id === post.user_id && (
                    <div>
                    <p>{post.message}</p>
                    <img className="imgPost" src={post.picture} />
                    <h3>user: {post.user_id}</h3>                  
                        <div className="editDelete"> 
                            <Link to={`/posts/${post.id}/edit`}>
                                <button>Edit</button>
                            </Link>                       
                            <button onClick={() => handlePostDelete(post.id)}>Delete</button>
                        </div> 
                    </div>)}              
                </div>
            ))}
            </div> 
        </div>  
        ) : (
            <div>  
         <h1>Not user</h1>  
            <img className="profileImg" src={newId.picture} alt="userPicture"/> 
            {/* <Link className="logoOverlap" to='/'><img src={logo} alt="Co-Lab"/></Link>
            <div className="userInfo">
            <h1>{currentUser.username}</h1> 
            <Link to ='/create'><button>Create</button></Link> 
            {
            posts.map((post) =>(
                <div key={post.id} className='posts'>
                {currentUser?.id === post.user_id && (
                    <div>
                    <p>{post.message}</p>
                    <img className="imgPost" src={post.picture} />
                    <h3>user: {post.user_id}</h3>                  
                        <div className="editDelete"> 
                            <Link to={`/posts/${post.id}/edit`}>
                                <button>Edit</button>
                            </Link>                       
                            <button onClick={() => handlePostDelete(post.id)}>Delete</button>
                        </div> 
                    </div>)}              
                </div>
            ))}
            </div>  */}
        </div> )

        }
    </div>
    );
}