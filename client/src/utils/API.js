import axios from "axios";

const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=";

export default {
	getAPIArticles: function(searchTerm) {
		return axios.get(queryURLBase + searchTerm);
	},

	saveArticle: function(articleData) {
		return axios.post("/api/articles", articleData);
	},

	getSavedArticles: function() {
		return axios.get("/api/articles");
	}

};