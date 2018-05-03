db.cities.find({
    location : {
    $geoWithin : {$center : [ [51.5074, 0.1278], 50] }
    }
})