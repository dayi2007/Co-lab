import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logo from '../../assets/logoSmall.png';
import { putUser } from '../../services/auth';
import {  useHistory } from "react-router-dom";

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
      prevState.map((user) => {
        return user.id === Number(id) ? newUser : user;
      })
    );
    history.push('/users/:id');
  };

  useEffect(() => {
    const prefillFormData = () => {
      const userItem = users.find((user) => user.id === Number(id));
      setFormData({ name: userItem.name });
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUserUpdate(id, formData);
      }}
    >
    <h3>Co-Lab</h3>
      <label>
        <input type='text' name='username' value={username} onChange={handleChange} />
        <input type='text' name='picture' value={picture} required autoFocus onChange={handleChange} />
      </label>
      <button className="buttonLogo"><img src={logo}/></button>
    </form>
  );
}
