import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer LgqVT5u3RF-P1645dx-iQ6W5pdph36RiTihCZuSuCOJVQBItAyriWCrXl4zWmMKWOQBcWDt-eM-dkd0-My4uqYWbk3CX-uZcF3SMTRvz8OKr3JB5W_z9sSiSEJ6LXnYx",
  },
});
