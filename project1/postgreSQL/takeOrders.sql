
CREATE OR REPLACE FUNCTION takeOrder (userName integer, recipe varchar(30))
RETURNS void AS $$

DECLARE
--timeReceived time:= SYSDATE;
mapRecord record;
invenRecord record;
_userID integer;

BEGIN

--Get user id 
--SELECT users.user_id INTO _userID FROM users WHERE users.user_id = userName;

FOR mapRecord IN SELECT * FROM ingredient_recipe_map WHERE rec_name = recipe LOOP
	RAISE NOTICE 'selected %', recipe;
	RAISE NOTICE 'userID is %', _userID;
	
	FOR invenRecord IN 
	SELECT * FROM inventory i JOIN ingredient_recipe_map m 
	ON m.ingred_name =  i.ingred_name
	WHERE m.rec_name = recipe LOOP
		RAISE NOTICE 'joined on %', recipe;
	END LOOP;

END LOOP;

END;
$$ LANGUAGE plpgsql;

