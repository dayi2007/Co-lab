import { useState } from 'react';
import Nav from '../components/Nav';
import './SignUp.css';
import logo from '../assets/forButton.png';

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    picture: '',
  });
  const { username, email, password, picture } = formData;
  const { handleSignUp } = props;

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
    <div className="card" id="cardSignUp">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSignUp(formData);
      }}
    >
      <label class="blue-text text-darken-2">
        Profile Picture:
        <input
          type='text'
          name='picture'
          value={picture}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label class="blue-text text-darken-2">
        Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label class="blue-text text-darken-2">
        Email:
        <input
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label class="blue-text text-darken-2">
        Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <button className="signupButton"><img src={logo} alt="Co-Lab"/></button>
    </form>
    </div>
    </div>
  );
}
