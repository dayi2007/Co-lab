import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logo from '../../assets/logoSmall.png';
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
<<<<<<< HEAD
    setCurrentUser((prevState) =>
      ((user) => {
        return user.id === Number(id) ? newUser : user;
      })
    );
=======
    setCurrentUser(newUser)
>>>>>>> b0826360545af532038c7a2a99dc03f43f22ca84
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
  <div className="card" id="cardUserEdit">
    <Nav/>
    <div>
    <form
     id="labelUserEdit"
      onSubmit={(e) => {
        e.preventDefault();
        handleUserUpdate(id, formData);
      }}
    >
      <label>
        <input type='text' name='username' placeholder="Cange your Username" value={username} onChange={handleChange} />
        <input type='text' name='picture' placeholder="Cange your Picture" value={picture} onChange={handleChange} />
      </label>
      <button className="buttonLogoEdit"><img src={logo}/></button>
    </form>
    </div>
  </div>
  );
}
