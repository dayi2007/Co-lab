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
  const [users, setUsers] =useState([]);

  const handleUserUpdate = async (id, formData) => {
    const newUser = await putUser(id, formData);
    setCurrentUser((prevState) =>
      ( (user) => {
        return user.id === Number(id) ? newUser : user;
      })
    );
    history.push('/');
  };

  useEffect(() => {
    const prefillFormData = () => {
      const userItem = users.find((user) => user.id === Number(id));
      setFormData({ username: userItem.username, picture: userItem.picture });
    };
    if (users.length) prefillFormData();
  }, [users, id]);

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
      onSubmit={(e) => {
        e.preventDefault();
        handleUserUpdate(id, formData);
      }}
    >
      <label>
        <input type='text' name='username' placeholder="Cange your Username" value={username} onChange={handleChange} />
        <input type='text' name='picture' placeholder="Cange your Picture" value={picture} onChange={handleChange} />
      </label>
      <button className="buttonLogo"><img src={logo}/></button>
    </form>
    </div>
  </div>
  );
}
