import { useState } from 'react';
import logo from '../assets/logoSmall.png';

export default function PostCreate({ handlePostCreate }) {
  const [formData, setFormData] = useState({
    name: '',
  });
  const { message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostCreate(formData);
      }}
    >
      <h3>Create Food</h3>
      <label>
        Co-Lab:
        <input type='text' name='message' value={message} onChange={handleChange} />
      </label>
      <button className="buttonLogo"><img src={logo}/></button>
    </form>
  );
}
