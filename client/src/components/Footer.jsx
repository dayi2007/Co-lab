import { Link } from "react-router-dom"

export default function Footer({currentUser}){
   return(
    <footer>
      {currentUser ? (
          <div className="currentUser">
            <Link to={`/users/${currentUser.id}`}>
            <div className="profilePicBorder">
                <div className="profileWhite">
                  
                    <img className="profilePicture" src={currentUser.picture} alt="user-picture"/>  
                      
                </div>
                <p className="userName">{currentUser.username}</p>
            </div>
            </Link>
            {/* <p>Welcome, {currentUser.username}</p> */}
          </div>
        ) : (
          <div className="profilePicBorder">
            <div className="profileWhite">
              <Link className="loginLink" to='/login'>Login</Link>
            </div>
          </div>          
        )}
    </footer>
    );
}