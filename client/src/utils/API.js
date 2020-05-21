import axios from "axios";

export default {
  getBooks: function (query) {
    return axios.get(`/api/google/${query}`);
  },

  getSavedBooks: function () {
    return axios.get("/api/books");
  },

  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },

  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
};
