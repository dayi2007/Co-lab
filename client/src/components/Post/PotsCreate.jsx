import { useState } from 'react';
import logo from '../../assets/logoSmall.png';

export default function PostCreate({ handlePostCreate }) {
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
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostCreate(formData);
      }}
    >
      <h3>Co-Lab</h3>
      <label>
        <input type='text' name='message' value={message} onChange={handleChange} />
        <input type='text' name='picture' value={picture} onChange={handleChange} />
      </label>
      <button className="buttonLogo"><img src={logo}/></button>
    </form>
  );
}
