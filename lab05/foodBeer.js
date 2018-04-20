var beerAndFood = {
//$elemMatch : {
name : /e/i, 
famousFor : /food|beer/i
//}
}

db.towns.find(beerAndFood);
