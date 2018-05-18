db.system.js.save({_id: "createOrder", value: function(user, recipe) {
	var rec = db.recipes.findOne({'_id': recipe});
	var use = db.users.findOne({'_id': user});
	var inventory = db.inventory;

	if (rec == null) {
		throw "Recipe does not exist! No substitutions, our recipes are pefect!";
	} else if (use == null) {
		throw "User unknown. Please enter a valid user id.";
	} else {
		var enough = rec.ingredients.length;
		var count = 0;
		var qs = [];

		//Check ingredient amounts
		rec.ingredients.forEach(function(ingredient){
			var name = ingredient.name;
			var quant = ingredient.quantity;

			var availAmount = inventory.findOne({'name': name}).quantity;
			if (quant <= availAmount) {
				count++;
			}
		});

		if (count != enough) {
			//raise exception
			throw "Not enough ingredients!";
		} else {
			//db.update to change value
			rec.ingredients.forEach(function(ingredient){
				var name = ingredient.name;
				var quant = ingredient.quantity;
				var availAmount = inventory.findOne({'name': name}).quantity;
				var reduce = availAmount - quant;
				inventory.update({'name': name}, {$set:{'quantity': reduce}});
			});

			//create order
			var date = new Date();
			var time = date.toString();
			db.orders.insert({
				'user': user,
				'recipe': recipe,
				'time': time
			});

			return "Order up!";
		}
	}
}});

db.system.js.save({_id: "restock", value: function(name, quantity) {
	var inventory = db.inventory;
	var ingredient = inventory.findOne({"name": name});

	if (ingredient == null) {
		throw "No such ingredient!";
	} else {
		var newAmount = ingredient.quantity + quantity;
		inventory.update({'name': name}, {$set:{'quantity': newAmount}});
	}
}});

db.system.js.save({_id: "throwOut", value: function(name, quantity) {
	var inventory = db.inventory;
	var ingredient = inventory.findOne({"name": name});

	if (ingredient == null) {
		throw "No such ingredient!";
	} else {
		var newAmount = ingredient.quantity - quantity;
		if (newAmount < 0) {
			throw "You don't have that many!";
		} else {
			inventory.update({'name': name}, {$set:{'quantity': newAmount}});
		}
	}
}});
