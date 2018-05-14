var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pizza');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	var ingredientSchema = mongoose.Schema({
		description: {type: String, required: true},
		name: {type: String, required: true},
		quantity: {type: Number, required: true},
	});

	var Ingredient = mongoose.model('Ingredient', ingredientSchema);

	// var cheese = new Ingredient({
	// 	name: 'Cheese',
	// 	description: 'funky fun taste',
	// 	quantity: 1,
	// });
	//
	// cheese.save(function (err, cheese) {
  //   if (err) return console.error(err);
	// 	console.log('added');
  // })

});
