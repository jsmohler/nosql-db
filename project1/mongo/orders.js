var mongoose = require('mongoose')
require('mongoose-function')(mongoose);
mongoose.connect('mongodb://localhost/pizza');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	var orderSchema = mongoose.Schema({
		user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
		timestamp: {type: Date, default: Date.now},
		recipe: {type: mongoose.Schema.Types.ObjectId, required: true, ref:'Recipe'}
	});

	var Order = mongoose.model('Order', orderSchema);

	var funcSchema = mongoose.Schema({_id: String, value: Function});
	var Func = mongoose.model('Functions', funcSchema, "system.js");

	var createOrder = function(user, recipe) {
			var rec = db.recipes.findOne({'_id': ObjectId(recipe)});
			var use = db.users.findOne({'_id': ObjectId(user)}).name;
			var inventory = db.ingredients;

			var enough = rec.ingredients.length;
			var count = 0;
			var qs = [];

			//Check ingredient amounts
			rec.ingredients.forEach(function(ingredient){
				var name = ingredient.name;
				var quant = ingredient.quantity;

				var availAmount = inventory.findOne({'_id': name}).quantity;
				if (quant <= availAmount) {
					count++;
				}
			});

			if (count != enough) {
				//raise exception
			} else {
				//db.update to change value
				rec.ingredients.forEach(function(ingredient){
					var name = ingredient.name;
					var quant = ingredient.quantity;
					var availAmount = inventory.findOne({'_id': name}).quantity;
					var reduce = availAmount - quant;
					inventory.update({'_id': name}, {$set:{'quantity': reduce}});
				});

				//create order
				db.orders.save({
					'user': user,
					'recipe': recipe
				})
			}

	};

	// var order = new Order;
	// order.user = user;
	// order.recipe = recipe;
	//
	// order.save(function (err, order) {
	// 	if (err) return console.error(err);
	// 	console.log('order added');
	// });
	//
	// Order.findOne({'user': user})
	// .populate('recipe')
	// .populate('user')
	// .exec(function (err, order) {
	// 	if (err) return handleError(err);

	// console.log(rec);
	// console.log(use);
	// console.log(ingred);
// })

	var create = new Func({_id: 'createOrder', value: createOrder});

	create.save(function (err) {
		if (err) return console.error(err);
		console.log('added');
	})
});
