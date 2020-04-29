import axios from "axios";

// http://64.227.122.221/api
const BASE_URL = String(process.env.REACT_APP_API_URL);

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 3000
});

export default client;