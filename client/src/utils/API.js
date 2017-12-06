import axios from "axios";

export default {
  nytsearch: function(searchTerm, startYear, endYear) {
    const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + searchTerm;

    if ((startYear)) {
      queryURL = queryURL + "&begin_date=" + startYear + "0101";
    }

    if ((endYear)) {
      queryURL = queryURL + "&end_date=" + endYear + "0101";
    } 

    return axios.get(queryURL);
  },

  savedArticles: function()
  {
    return axios.get("/action");
  },

  saveArticle: function(data)
  {
    return axios.post("/action", data)
  },

  deleteArticle: function(data)
  {
    return axios.delete("/action/" + data)
  }
};

