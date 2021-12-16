import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logo from '../../assets/forButton.png';
import { putUser } from '../../services/auth';
import {  useHistory } from "react-router-dom";
import Nav from '../Nav';
import './UserEdit.css'

export default function UserEdit({ setCurrentUser, currentUser}) {
  const [formData, setFormData] = useState({
    username: '',
    picture: '',
  });
  const { username, picture } = formData;
  const { id } = useParams();
  const history = useHistory();

  const handleUserUpdate = async (id, formData) => {
    const newUser = await putUser(id, formData);
    setCurrentUser(newUser)
    history.push('/');
  };

  useEffect(() => {
    const prefillFormData = () => {
      setFormData({ username: currentUser.username, picture: currentUser.picture });
    };
    if (currentUser) prefillFormData();
  }, [currentUser, id]);

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
    <div className="card" id="cardUserEdit">
    <form
     id="labelUserEdit"
      onSubmit={(e) => {
        e.preventDefault();
        handleUserUpdate(id, formData);
      }}
    >
      <label class="blue-text text-darken-2">Username
        <input type='text' name='username' placeholder="Cange your Username" value={username} onChange={handleChange} />
      </label>
      <br/>
      <label class="blue-text text-darken-2">Picture
        <input type='text' name='picture' placeholder="Cange your Picture" value={picture} onChange={handleChange} />
      </label>
      <button id="buttonLogoEdit"><img src={logo} alt="logo"/></button>
    </form>
    </div>
  </div>
  );
}
