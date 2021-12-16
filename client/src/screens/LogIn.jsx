import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import './LogIn.css'
import logo from '../assets/forButton.png';

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { username, password} = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
  <div>
    <Nav />
    <div  className="card" id="cardLogin">
    <form onSubmit={(e)=> {
      e.preventDefault();
      handleLogin(formData);
    }}>
      <label class="blue-text text-darken-2">
        <input
          id="username"
          type='text'
          name='username'
          value={username}
          onChange={handleChange}/>
          Username
      </label>
      <br />
      <label class="blue-text text-darken-2">      
        <input
          id="password"
          type='password'
          name='password'
          value={password}
          onChange={handleChange} />
        Password </label>
      <br/>
      <br/>
      <div>
      <button className="loginButton"><img src={logo} alt="Co-Lab"/></button>
      </div>
    </form>
    <br />
    <Link className="singupLink" to='/singup'>SignUp</Link>
    </div>
  </div>
  );
}
