import { Link } from "react-router-dom"

export default function Footer({currentUser}){
   return(
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
                {/* <h7 className="userName">{currentUser.username}</h7> */}
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