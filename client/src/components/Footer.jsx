import { Link } from "react-router-dom"

export default function Footer({currentUser}){
   return(
     <div>
    <footer className="footer">
      {currentUser ? (
          <div className="currentUser">
            <Link to={`/users/${currentUser.id}`}>
              <div className="userName">
            <h5 >Welcome, {currentUser.username}</h5></div>
            <div className="profilePicBorder">
                <div className="profileWhite">
                    <img className="profilePicture" src={currentUser.picture} alt="user-picture"/> 
                </div>
            </div>
            </Link>
          </div>
        ) : (
          <div className="profilePicBorder">
            <div className="profileWhite">
              <Link className="loginLink" to='/login'>Login</Link>
            </div>
          </div>          
        )}
    </footer>
    </div>
    );
}