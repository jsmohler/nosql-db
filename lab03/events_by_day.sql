SELECT * FROM crosstab(
  'SELECT extract(week from starts) as week,
    extract(dow from starts) as day, count(*)
  FROM events
  WHERE extract(month from starts) = 2 AND extract(year from starts) = 2018
  GROUP BY week, day
  ORDER BY week, day',
  'SELECT * FROM generate_series(0, 6)')
AS (
  week int, Sun int, Mon int, Tues int, Wed int,
  Thurs int, Fri int, Sat int
) ORDER BY week;
