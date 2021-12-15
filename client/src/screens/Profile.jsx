import { Link } from "react-router-dom";
import logo from '../assets/logoClear.png';
import './Profile.css'
import { useParams } from "react-router";
import edit from '../assets/edit.png';
import trash from '../assets/binPaper.png';
import create from '../assets/messagesAdd.png';
import logout from '../assets/logout.png';
import update from '../assets/update.png';
import like from '../assets/favorite.png';
import add from '../assets/star.png';
import classes from '../assets/classes.png';

export default function Profile({currentUser, posts, handlePostDelete, handleLogout }){
    const { id } = useParams()
    let newUsers =[]
    let userData =[]
    let userPosts =[]
    window.scrollTo(0, 0)
    posts.map((post) =>(
        newUsers.push(post.user.id)
    ))
   const newId = newUsers.find(element => element === parseInt(id))

    posts.map((post) => (
        newId === post.user.id && (
          userData.push(post.user.picture, post.user.username) &&
          userPosts.push(post)
        )))
  
    let userPicture = userData[0]
    let userUsername = userData[1]

return(
<div className="profileContainer">
    {
    currentUser.id === parseInt(id) ? (
    <div> 
        <div>   
        <img className="profileImg" src={currentUser.picture} alt="userPicture"/> 
        <Link className="logoOverlap" to='/'><img src={logo} alt="Co-Lab"/></Link>
        </div>
        <div className="userInfo">
            <div className="classesUser">
                <div>
                    <h1 className="nameUserProfile">{currentUser.username}</h1>
                </div>
                <div>
                    <h5 className="classesh5">Classes:</h5> 
                    <img className="classesImg" src={classes} alt="classes"/>
                </div>
            </div>
            <div className="profileButtons">
                <div>
                    <Link to ='/create'><button><img src={create} alt="create"/></button></Link> 
                    <Link to={`/users/${newId}/edit`}> <button><img src={update} alt="update"/></button></Link>
                </div>
                <div>
                    <button onClick={handleLogout}><img src={logout} alt="logout"/></button>
                </div>
            </div>
            <div className='postsOutter'>        
                {
                userPosts.map((post) =>(
                    currentUser?.id === post.user_id && (
                    <div key={post.id} className='card'>
                        <div className="profileLink">
                        <div className="linkProfile">
                            <img  className="imgPostUser" src={post.user.picture} alt="UserImage"/>
                            <h7>{post.user.username}</h7>
                        </div>
                        </div>
                        <div className="messagePicture">
                            <p className="message">{post.message}</p>
                            <img className="imgPost" src={post.picture} alt="Post Img"/>  
                        </div>  
                        <div className="editDelete"> 
                            <Link to={`/posts/${post.id}/edit`}>
                                <button><img src={edit}/></button>
                            </Link>                       
                            <button onClick={() => handlePostDelete(post.id)}><img src={trash}/></button>
                        </div> 
                    </div>
                    )
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
            <div className="classesUser">
                <div>
                    <h1 className="nameUserProfile">{userUsername}</h1>
                </div>                
                <div>
                <button className="addUser"><img src={add} alt="add"/> </button>
                    <h5 className="classesh5">Classes:</h5> 
                    <img className="classesImg" src={classes} alt="classes"/>
            </div>
            </div>
        <div className='postsOutterUser'>                
            {
            userPosts.map((post) =>( 
                <div key={post.id}className="card">
                    <div className="profileLink">
                        <div className="linkProfile">
                            <img  className="imgPostUser" src={post.user.picture} alt="UserImage"/>
                            <h7>{post.user.username}</h7>
                        </div>
                    </div>
                    <div className="messagePicture">
                        <p className="message">{post.message}</p>
                        <img className="imgPost" src={post.picture} alt="Post Img"/>  
                            <div className="iconsCard"> 
                                <button><img src={like} alt="like"/></button>  
                            </div>
                    </div>  
                </div> 
            ))
            }
        </div>
        </div>
    </div> 
    )


    }
</div>
);
}