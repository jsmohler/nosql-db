INSERT INTO recipes (rec_name, rec_descr) 
VALUES 
('26', 'Recipe with mult ingred'),
('27', 'Recipe that will exceed inv_qty');

INSERT INTO ingredient_recipe_map (rec_name, ingred_name, recipe_qty) 
VALUES 
('26', 'Onions', 2),
('26', 'Pineapple', 4),
('26', 'Basil', 1),
('27', 'Black Olives', 50);



