CREATE RULE delete_venue AS ON DELETE TO venues
DO INSTEAD
UPDATE venues
SET  active = false
WHERE venue_id = OLD.venue_id;