import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

export default {
  // Gets all saved articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  // Deletes a saved article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  }
};
