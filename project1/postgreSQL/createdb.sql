
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY NOT NULL,
    email varchar(50) UNIQUE NOT NULL,
    fname varchar(20) NOT NULL,
    lname varchar(20) NOT NULL,
    phone varchar(15) NOT NULL,
    addr_line1 varchar(40) NOT NULL,
    addr_line2 varchar(40),
    city varchar(40) NOT NULL,
    state varchar(2) NOT NULL,
    zip varchar(10) NOT NULL
);

CREATE TABLE inventory(
    ingred_name varchar(30) PRIMARY KEY NOT NULL,
    ingred_descr varchar(60) NOT NULL,
    inventory_qty integer NOT NULL
);

CREATE TABLE recipes (
    rec_name varchar(30) PRIMARY KEY NOT NULL,
    rec_descr varchar(80) NOT NULL
);

CREATE TABLE ingredient_recipe_map (
	rec_name varchar(30) REFERENCES recipes,
	ingred_name varchar(30) REFERENCES inventory,
	recipe_qty integer NOT NULL
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY NOT NULL,
    user_id SERIAL REFERENCES users NOT NULL,
    time_placed time NOT NULL,      
    rec_name varchar(30) REFERENCES recipes NOT NULL 
);
