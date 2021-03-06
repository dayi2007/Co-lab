import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logo from '../../assets/forButton.png';
import Nav from '../Nav';
import './PostEdit.css'

export default function PostEdit({ posts, handlePostUpdate, currentUser }) {
  const [formData, setFormData] = useState({
    message: '',
    picture: '',
  });
  const { message, picture } = formData;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const postItem = posts.find((post) => post.id === Number(id));
      setFormData({ message: postItem.message, picture: postItem.picture });
    };
    if (posts.length) prefillFormData();
  }, [posts, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
  <div>
    <Nav/>
    <div className="card" id="cardPostEdit">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostUpdate(id, formData);
      }}
    >
      <label> Post
        <input type='text' name='message' value={message} onChange={handleChange} />
      </label>
      <label> Picture
        <input type='text' name='picture' value={picture} required autoFocus onChange={handleChange} />
      </label>
      <button className="buttonLogo" id="buttonLogoPostEdit"><img src={logo} alt="logo"/></button>
    </form>
    </div>
  </div>
  );
}
