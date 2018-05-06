distinctDegrees = function(cities){
	var number = cities.location.longitude + '',
		i = number.split(".", 1);
	return i[0];
}

db.system.js.save({_id: 'distinctDegrees', value: distinctDegrees})

map = function() {
	var degrees = distinctDegrees(this);
	emit({degrees: degrees}, {count : 1});
}

reduce = function(key, values) {
	var total = 0;
	for (var i = 0; i < values.length; i++) {
		total += values[i].count;
	}
	return { count : values.length };
}

results = db.runCommand({
	mapReduce: 'cities',
	map: map,
	reduce: reduce,
	out: 'cities.report'
})
