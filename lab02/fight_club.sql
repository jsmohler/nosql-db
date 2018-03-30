select countires.country_name 
from events,
countires JOIN venues
ON countires.country_code = venues.country_code
where events.title = 'Fight Club'
AND events.venue_id = venues.venue_id;
 country_name  
---------------
 United States
(1 row)

