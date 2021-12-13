import logo from '../assets/logoSmall.png';
import { Link } from 'react-router-dom';

export default function Nav({currentUser, handleLogout}) {
    return(
      <header>
        <Link className="logoTop" to='/'><img src={logo} alt="Co-Lab"/></Link>
        {/* {currentUser ? (
          <div>
            <div className="profilePicBorder">
                <div className="profileWhite">
                    <img className="profilePicture" src={currentUser.picture} alt="user-picture"/>
                </div>
              <div>
                <p>{currentUser.username}</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
            <p>Welcome, {currentUser.username} {currentUser.id}</p>
          </div>
        ) : (
          <div className="profilePicBorder">
            <div className="profileWhite">
              <Link className="loginLink" to='/login'>Login</Link>
            </div>
          </div>          
        )}
        {currentUser && (
          <nav>
            <Link to='/create'>|Star-create|</Link>
          </nav>
        )} */}
      </header>
);

}