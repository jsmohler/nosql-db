var beerAndFood = {
name : /e/i, 
famousFor : /food|beer/i
}

db.towns.find(beerAndFood);
