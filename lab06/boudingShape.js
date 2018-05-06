db.cities.find({
    location : {
    $geoWithin : {$center : [ [51.50853, -0.12574], 50] }
    }
})
