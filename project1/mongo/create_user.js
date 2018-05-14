var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pizza');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	var addressSchema = mongoose.Schema({
		lineOne: {type: String, required: true},
		lineTwo: {type: String, required: false},
		city: {type: String, required: true},
		state: {type: String, required: true},
		zip: {type: String, required: true}
	})

	var userSchema = mongoose.Schema({
			email: {type: String, required: true},
			name: {
				firstName: {type: String, required: true},
				lastName: {type: String, required: true}
			},
			phone: {type: String, required: true},
			address: addressSchema
	});

	var User = mongoose.model('User', userSchema);

	// var user = new User({
	// 	name: {firstName:'Bob',lastName: 'Smith'},
	// 	email: 'bob@pizzaria.com',
	// 	phone: '+1 (303) 123-4567',
	// 	address: {
	// 		lineOne: '1234 Pizza Street',
	// 		city: 'Denver',
	// 		state: 'CO',
	// 		zip: 80210
	// 	}
	// });
	//
	// user.save(function (err, user) {
  //   if (err) return console.error(err);
	// 	console.log('added');
  // })

});
