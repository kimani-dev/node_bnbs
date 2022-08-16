import axios from "axios";

const apiClient = new axios.create({
  baseURL: "http://localhost:5000/",
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
