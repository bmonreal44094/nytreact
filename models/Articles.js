const	mongoose = require("mongoose"),
		Schema = mongoose.Schema,
		ArticleSchema = new Schema({
			title: {
				type: String,
				required: true
			},
			date: {
				type: Date,
				required: true
			},
			link: {
				type: String,
				required: true
			}
		}),
		Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
