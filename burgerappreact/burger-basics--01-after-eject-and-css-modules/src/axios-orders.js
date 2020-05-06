import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://react-myburger-d515d.firebaseio.com/'
})


export default instance;
