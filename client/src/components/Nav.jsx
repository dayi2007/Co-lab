import logo from '../assets/logoClear.png';
import { Link } from 'react-router-dom';

export default function Nav({currentUser, handleLogout}) {
    return(
      <header>
        <Link className="logoTop" to='/'><img src={logo} alt="Co-Lab"/></Link>
        <div  className="headerDesktop">
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
        {/* {currentUser && (
          <nav>
            <Link to='/create'>|Star-create|</Link>
          </nav>
        )} */}
        </div>
      </header>
);

}