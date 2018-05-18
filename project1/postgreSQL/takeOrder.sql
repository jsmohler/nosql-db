
CREATE OR REPLACE FUNCTION takeOrder(userName integer, recipe varchar(30)) RETURNS boolean AS $$


DECLARE
_userID INTEGER;
updateQty integer;
ingredRecord RECORD;
invenRecord RECORD;
mapRecord RECORD;
timeReceived time:= SYSDATE;


BEGIN

--Get user id 

--find recipe record in mapPQ
FOR mapRecord IN SELECT * FROM ingredient_recipe_map WHERE rec_name = recipe
LOOP
	RAISE NOTICE 'selected %', recipe;
	RAISE NOTICE 'userID is %', userName;
	
--loop for each ingredient	
	FOR invenRecord IN 
	SELECT * INTO ingredRecord FROM inventory i JOIN ingredient_recipe_map m 
	ON m.ingred_name =  i.ingred_name
	WHERE m.rec_name = recipe
	LOOP
	
		IF(invenRecord.inventory_qty < ingredRecord.recipe_qty)THEN
			RAISE EXCEPTION 'Cannot fulfill order: insufficient quantity of %', m.ingred_name;
		ELSE 
			updateQty := ingredRecord.inventory_qty - ingredRecord.recipe_qty;
			--Decrement quantity
			UPDATE inventory SET inventory_qty = updateQty 
			WHERE ingred_name = ingredRecord.ingred_name;

		RAISE NOTICE 'joined on %', recipe;
		RAISE NOTICE 'ingredient is %', i.ingred_name;
	END LOOP;

END LOOP;

RETURN passed;
END;
$$ LANGUAGE plpgsql;

