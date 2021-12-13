import { useState } from 'react';
import Nav from '../components/Nav';

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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSignUp(formData);
      }}
    >
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Picture:
        <input
          type='url'
          name='picture'
          value={picture}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Co-Lab</button>
    </form>
    </div>
  );
}
