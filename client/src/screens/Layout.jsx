import './Layout.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Layout({ currentUser, handleLogout, children }) {
  
  return (
    <main>
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
