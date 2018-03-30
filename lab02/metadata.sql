7dbs=# \d
                  List of relations
 Schema |        Name         |   Type   |   Owner   
--------+---------------------+----------+-----------
 public | cities              | table    | vfernalld
 public | countires           | table    | vfernalld
 public | events              | table    | vfernalld
 public | events_event_id_seq | sequence | vfernalld
 public | venues              | table    | vfernalld
 public | venues_venue_id_seq | sequence | vfernalld
(6 rows)

7dbs=# \d events;
                                       Table "public.events"
  Column  |            Type             |                         Modifiers                         
----------+-----------------------------+-----------------------------------------------------------
 event_id | integer                     | not null default nextval('events_event_id_seq'::regclass)
 title    | text                        | 
 starts   | timestamp without time zone | 
 ends     | timestamp without time zone | 
 venue_id | integer                     | 
Indexes:
    "events_pkey" PRIMARY KEY, btree (event_id)
    "events_starts" btree (starts)
    "events_title" hash (title)
Foreign-key constraints:
    "events_venue_id_fkey" FOREIGN KEY (venue_id) REFERENCES venues(venue_id)

7dbs=# \d venues
                                        Table "public.venues"
     Column     |          Type          |                         Modifiers                         
----------------+------------------------+-----------------------------------------------------------
 venue_id       | integer                | not null default nextval('venues_venue_id_seq'::regclass)
 name           | character varying(255) | 
 street_address | text                   | 
 type           | character(7)           | default 'public'::bpchar
 postal_code    | character varying(9)   | 
 country_code   | character(2)           | 
Indexes:
    "venues_pkey" PRIMARY KEY, btree (venue_id)
Check constraints:
    "venues_type_check" CHECK (type = ANY (ARRAY['public'::bpchar, 'private'::bpchar]))
Foreign-key constraints:
    "venues_country_code_fkey" FOREIGN KEY (country_code, postal_code) REFERENCES cities(country_code, postal_code) MATCH FULL
Referenced by:
    TABLE "events" CONSTRAINT "events_venue_id_fkey" FOREIGN KEY (venue_id) REFERENCES venues(venue_id)

7dbs=# \d cities
              Table "public.cities"
    Column    |         Type         | Modifiers 
--------------+----------------------+-----------
 name         | text                 | not null
 postal_code  | character varying(9) | not null
 country_code | character(2)         | not null
Indexes:
    "cities_pkey" PRIMARY KEY, btree (country_code, postal_code)
Check constraints:
    "cities_postal_code_check" CHECK (postal_code::text <> ''::text)
Foreign-key constraints:
    "cities_country_code_fkey" FOREIGN KEY (country_code) REFERENCES countires(country_code)
Referenced by:
    TABLE "venues" CONSTRAINT "venues_country_code_fkey" FOREIGN KEY (country_code, postal_code) REFERENCES cities(country_code, postal_code) MATCH FULL

7dbs=# \d countires
    Table "public.countires"
    Column    | Type | Modifiers 
--------------+------+-----------
 country_code | text | not null
 country_name | text | not null
Indexes:
    "countires_pkey" PRIMARY KEY, btree (country_code)
    "unique1" UNIQUE CONSTRAINT, btree (country_name)
Referenced by:
    TABLE "cities" CONSTRAINT "cities_country_code_fkey" FOREIGN KEY (country_code) REFERENCES countires(country_code)

