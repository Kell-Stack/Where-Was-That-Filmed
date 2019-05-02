CREATE TABLE media
(
  actor_1 varchar(1000) default null,
  actor_2 varchar(1000) default null,
  actor_3 varchar(1000) default null,
  director varchar(1000) default null,
  distributor varchar(1000) default null,
  fun_facts varchar(1000) default null,
  locations varchar(1000) default null,
  production_company varchar(1000) default null,
  releaseyear varchar(1000) default null,
  title varchar(1000) default null,
  writer varchar(1000) default null
);

\COPY media FROM '~/Dev/WWTF/data/sffilmdata.csv' WITH (format csv);

ALTER TABLE media ADD COLUMN lat FLOAT;

ALTER TABLE media ADD COLUMN lng FLOAT;

ALTER TABLE media ADD COlUMN id SERIAL PRIMARY KEY;