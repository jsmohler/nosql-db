CREATE OR REPLACE FUNCTION takeOrder(userName integer, recipe varchar(30)) RETURNS void AS $$

DECLARE
updateQty integer;
ingredRecord RECORD;
invenRecord RECORD;
mapRecord RECORD;
timeReceived TIMESTAMP:= LOCALTIMESTAMP;

BEGIN

--loop for each ingredient
    FOR invenRecord IN (
    SELECT * FROM inventory i JOIN ingredient_recipe_map m
	ON m.ingred_name =  i.ingred_name
	WHERE m.rec_name = recipe )
	LOOP
        IF (invenRecord.inventory_qty < invenRecord.recipe_qty) THEN
            RAISE EXCEPTION 'Cannot fulfill order: insufficient quantity of %', invenRecord.ingred_name;
        ELSE
            UPDATE inventory SET inventory_qty = invenRecord.inventory_qty - invenRecord.recipe_qty
			WHERE ingred_name = invenRecord.ingred_name;
        END IF;
	END LOOP;


INSERT INTO orders (user_id, time_placed, rec_name) VALUES (userName, timeReceived, recipe);
RAISE NOTICE 'Order Complete!';
RETURN;
END;
$$ LANGUAGE plpgsql;






