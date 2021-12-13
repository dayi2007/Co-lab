import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { input } from 'materialize-css';

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
    <form onSubmit={(e)=> {
      e.preventDefault();
      handleLogin(formData);
    }}>
    <div className="input-field">
        <input
          id="username"
          class="validate"
          type='text'
          data-length="10"
          name='username'
          value={username}
          onChange={handleChange}/>
        <label for="username">Username </label>
      </div>
      <br />
      <div className="input-field">      
        <input
          id="password"
          class="validate"
          type='password'
          name='password'
          value={password}
          onChange={handleChange} />
        <label for="password">Password </label>
      </div>
      <br/>
      <br/>
      <div>
      <button>Co-Lab</button>
      </div>
    </form>
    <br />
    <Link to='/singup'>SignUp</Link>
  </div>
  );
}
