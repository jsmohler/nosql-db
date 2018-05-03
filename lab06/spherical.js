//location would need to have the { type: <location field>, coordinate: [x, y]} format
db.cities.createIndex( { location : "2dsphere"} );
