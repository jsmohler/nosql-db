CREATE TYPE user AS OBJECT (
    user_id NUMBER,
    email varchar(50),
    fname varchar(20),
    lname varchar(20),
    phone varchar(15),
    addr_line1 varchar(40),
    addr_line2 varchar(40),
    city varchar(40),
    state varchar(2),
    zip varchar(10)
);

DECLARE
_timeReceived time;
_orderID serial 


CREATE FUNCTION takeOrder (u IN user, recipe IN varchar(30))
RETURN boolean
IS
	orderSuccess boolean;
BEGIN
//query map table for every entry where rec_name == recipe; store in array

//iterate through results: for each, query inventory where ingred_name == 


RETURN orderSuccess;
END;

