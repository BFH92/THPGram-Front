import Cookies from 'js-cookie'
import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:4000/' });



export default class APIManager {
  static async register(email, password) {
    API.interceptors.request.use(({ headers, ...config }) => (
      {
        ...config,
        headers: {
            ...headers,
            'Content-Type': 'application/json',
           Authorization: `Bearer ${headers.Authorization ||  Cookies.get('token')}`,
        },
    }));
      let token;
      const response = await API.post('/signup', { "user":{email, password }});
      token = await response.headers.authorization
      token = token.replace(/Bearer /g, "");
      Cookies.set('token',token)
      return response;
  }
  static async logout() {
  
    const response = await API.delete('/logout');
    return response;
  }
  
  static async login(email, password) {
    API.interceptors.request.use(({ headers, ...config }) => (
      {
        ...config,
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
    }));
  let token;
  const response = await API.post('/login', 
  { "user":{email, password }},);
   token = await response.headers.authorization
   token = token.replace(/Bearer /g, "");
   Cookies.set('token',token)
    return response;
 }
 static async getPosts() {
    const response = await API.get('/posts');
    return response;
 }
}
