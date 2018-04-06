/*Update venues table to add street addresses.  Then the query searches for any record that contain
'street' at the end */
UPDATE venues
SET street_address = '901 Chestnut Street'
WHERE venue_id = 1;

UPDATE venues
SET street_address = '1498 Alabama Street'
WHERE venue_id = 2;

UPDATE venues
SET street_address = '888 Elm Way'
WHERE venue_id = 3;

UPDATE venues
SET street_address = '1831 E Wesleigh Avenue'
WHERE venue_id = 4;

SELECT name, street_address FROM venues WHERE street_address ILIKE '%street';