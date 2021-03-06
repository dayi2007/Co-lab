import './Layout.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
// import { Link } from "react-router-dom"
// import logo from '../assets/logoClear.png';

export default function Layout({ currentUser, handleLogout, children }) {
  
  return (
    <main>
      {/* <Link className="logoTop" id="noShow" to='/'><img src={logo} alt="Co-Lab"/></Link> */}
      <Nav currentUser={currentUser} handleLogout={handleLogout}/>      
        {children}
      <Footer currentUser={currentUser}/>
      
      <p className="copy">&copy; CodeDiamonds Co.</p>
      {/* <div>
        <button onClick={handleLogout}>Logout</button>
      </div> */}
    </main>
  );
}
