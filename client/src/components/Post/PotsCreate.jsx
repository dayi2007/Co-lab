import { useState } from 'react';
import logo from '../../assets/forButton.png';
import Nav from '../Nav';
import './PostCreate.css';

export default function PostCreate({ handlePostCreate, toggleFetch, setToggleFetch }) {
  const [formData, setFormData] = useState({
    message: '',
    picture: '',
  });
  const { message, picture } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setToggleFetch(!toggleFetch)
  };

  return (
  <div >
    <Nav/>
    <div className="card" id="cardPostCreate">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostCreate(formData);
      }}
    >
      <label className="blue-text text-darken-2"> Post
        <textarea
        class="blue-text text-darken-2" 
        type='text' 
        name='message' 
        value={message} 
        onChange={handleChange} />
      </label>
      <label className="blue-text text-darken-2"> Picture
        <textarea
        type='text'
        class="blue-text text-darken-2"
        name='picture'
        value={picture}
        onChange={handleChange} />
      </label>
      <button className="buttonLogo" id="buttonPostCreate"><img src={logo} alt="logo"/></button>
    </form>
  </div>
  </div>
  );
}
