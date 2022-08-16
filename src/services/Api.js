import axios from "axios";

const apiClient = new axios.create({
  baseURL: "https://ithewakimani-airbnbs.herokuapp.com/",
  credentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getAppartments() {
    return apiClient.get("appartments");
  },
};
