var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pizza');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	var recipeSchema = mongoose.Schema({
		description: {type: String, required: true},
		name: {type: String, required: true},
    ingredients: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'}],
		instructions: [String]
	});

	var Recipe = mongoose.model('Recipe', recipeSchema);

	// var recipe = new Recipe({
	// 	name: 'Cereal and Milk',
	// 	description: 'a classic',
	// 	instructions: [
  //     "Pour cereal into bowl",
  //     "Pour milk into bowl",
  //     "Enjoy!"
  //   ]
	// });
  //
	// recipe.save(function (err, recipe) {
  //   if (err) return console.error(err);
	// 	console.log('added');
  // })

});
