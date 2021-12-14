import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logo from '../../assets/logoSmall.png';
import Layout from '../../screens/Layout'
import './PostEdit.css'

export default function PostEdit({ posts, handlePostUpdate }) {
  const [formData, setFormData] = useState({
    message: '',
    picture: '',
  });
  const { message, picture } = formData;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const postItem = posts.find((post) => post.id === Number(id));
      setFormData({ message: postItem.message });
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
    <Layout>
    <div className="card" id="cardPostEdit">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostUpdate(id, formData);
      }}
    >
      <label>
        <input type='text' name='message' value={message} onChange={handleChange} />
        <input type='text' name='picture' value={picture} required autoFocus onChange={handleChange} />
      </label>
      <button className="buttonLogo"><img src={logo}/></button>
    </form>
    </div>
    </Layout>
  </div>
  );
}
