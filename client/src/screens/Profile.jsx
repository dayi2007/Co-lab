import { Link } from "react-router-dom";
import logo from '../assets/logoClear.png';
import './Profile.css'
import { useParams } from "react-router";

export default function Profile({currentUser, posts, handlePostDelete, handleLogout }){
    console.log(currentUser.id)
    const { id } = useParams()

   let newUsers =[]
    posts.map((post) =>(
        newUsers.push(post.user.id)
    ))
   const newId = newUsers.find(element => element === parseInt(id))

    let userData =[]
    posts.map((post) => (
        newId === post.user.id && (
          userData.push(post.user.picture, post.user.username)
        )))
  
    let userPicture = userData[0]
    let userUsername = userData[1]

return(
<div>
        {currentUser.id === parseInt(id) ? (
    <div>    
            <img className="profileImg" src={currentUser.picture} alt="userPicture"/> 
            <Link className="logoOverlap" to='/'><img src={logo} alt="Co-Lab"/></Link>
        <div className="userInfo">
                <h1>{currentUser.username}</h1> 
                <Link to ='/create'><button>Create</button></Link> 
                <div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            <div className='postsOutter'>
        
            {
            posts.map((post) =>(
                <div key={post.id} className='card'>
                {currentUser?.id === post.user_id && (
                    <div>
                    <p>{post.message}</p>
                    <img className="imgPost" src={post.picture} alt="userPicture"/>
                    <h3>user: {post.user_id}</h3>                  
                        <div className="editDelete"> 
                            <Link to={`/posts/${post.id}/edit`}>
                                <button>Edit</button>
                            </Link>                       
                            <button onClick={() => handlePostDelete(post.id)}>Delete</button>
                        </div> 
                    </div>)}              
                </div>
            ))
            }
            </div>
        </div> 
    </div>  
        ) : (
            <div>  
                <img className="profileImg" src={userPicture} alt="userPicture"/>
                <Link className="logoOverlap" to='/'><img src={logo} alt="Co-Lab"/></Link>
                <div className="userInfo">
                    <h1>{userUsername}</h1>
                </div>
            </div> )

        }
</div>
);
}