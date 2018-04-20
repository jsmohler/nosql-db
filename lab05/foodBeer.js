//Note to Jordan: I feel like I should include the commented out section, but I error when I include that.  And the code as is runs and gets the right stuff.  Thoughts?

var beerAndFood = {
//$elemMatch : {
name : /e/i, 
famousFor : /food|beer/i
//}
}

db.towns.find(beerAndFood);
