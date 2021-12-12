import { Link } from 'react-router-dom';
import logo from '../assets/logoSmall.png';
import './Layout.css';

export default function Layout({ currentUser, handleLogout, children }) {
  return (
    <main>
      {/* <header> */}
        <Link to='/'><img src={logo} alt="Co-Lab"/></Link>
        {currentUser ? (
          <div>
            <div className="profilePicBorder">
                <div className="profilePic">
                    <img className="profilePicture" src={currentUser.picture} alt="user-picture"/>
                </div>
            </div>
            <p>Welcome, {currentUser.username}</p>
          </div>
        ) : (
          <Link to='/login'>Login/Register</Link>
        )}
        {currentUser && (
          <nav>
            <Link to='/create'>|Star-create|</Link>
          </nav>
        )}
      {/* </header> */}
      {children}
      <div className="profilePicBorder">
        <div className="profilePic">
          {/* <img className="profilePicture" src={currentUser.picture} alt="user-picture"/> */}
        </div>
      </div>
      <footer>
        <p>&copy; CodeDiamonds Co.</p>
      </footer>
    </main>
  );
}
