import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 7THW1Zlckt5L8TFL6tRlALTbNLeerqfdPAAGw8c6fgw",
  },
});
