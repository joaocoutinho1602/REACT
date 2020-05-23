import axios from "axios";

const url = "localhost:4000/";

export default axios.create({
  baseURL: url,
});
