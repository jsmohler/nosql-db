var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pizza');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	var recipeSchema = mongoose.Schema({
		description: {type: String, required: true},
		name: {type: String, required: true},
		ingredients: [{name: {type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'}, quantity: {type: Number, required: true}}],
		instructions: [String]
	});

	var Recipe = mongoose.model('Recipe', recipeSchema);

	// var recipe = new Recipe({
	// 	description: 'Plain cheese pizza',
	// 	name: 'Cheese',
	// 	ingredients: [
	// 		{name: '5afa35a3425a91de2226b066', quantity: 3},
	// 		{name: '5afa35a3425a91de2226b065', quantity: 1},
	// 		{name: '5afa35a3425a91de2226b067', quantity: 1}
	// 	],
	// 	instructions: ["Flatten dough", "Spread sauce", "Cover with cheese", "Bake", "Enjoy"]
	// });
	//
	// recipe.save(function (err, recipe) {
	// 	if (err) return console.error(err);
	// 	console.log('added');
	// })

});
