import api from './api-config';

export const loginUser = async (loginData) => {
    const resp = await api.post('/auth/login', {authentication: loginData });
    localStorage.setItem('authToken', resp.data.token);  
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
};

export const registerUser = async (registerData) => {
    const resp = await  api.post('users/', {user: registerData});
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
};

export const putUser = async (id, registerData) => {
    const resp = await  api.put(`users/${id}`, {user: registerData});
    // localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
};

export const verifyUser = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const resp = await api.get('/auth/verify');
      return resp.data;
    }
    return null;
  };

export const removeToken = () => {
    api.defaults.headers.common.authorization = null;
};

export const getOneUser = async (id) => {
    const resp = await  api.get(`users/${id}`);
    // localStorage.setItem('authToken', resp.data.token);
    // api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
};