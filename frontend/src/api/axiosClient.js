import axios from 'axios'
// const user = JSON.parse(localStorage.getItem("token"))
import { isAuthenticated } from '../utils';
const token = isAuthenticated().token;
console.log(token);
export const axiosClient = axios.create({
  baseURL: `http://localhost:4000/api`,
  headers: {
    'Content-Type': 'application/json',
    "Authorization": `Bearer ${token}`
  },
})
