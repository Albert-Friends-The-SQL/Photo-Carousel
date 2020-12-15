

-- DROP DATABASE IF EXISTS adidas;

-- CREATE DATABASE adidas;



DROP TABLE IF EXISTS carousel_listings CASCADE;
DROP TABLE IF EXISTS carousel_imgs CASCADE;



Create Table carousel_imgs (
  id SERIAL,
  link text,
  PRIMARY KEY (id)
);

Create Table carousel_listings (
  id SERIAL,
  Productimg integer REFERENCES carousel_imgs(id),
  Listingnum integer,
  colorway varchar(10),
  PRIMARY KEY (id)
);










COPY carousel_imgs(id, link)
FROM '/tmp/imgs.csv'
DELIMITER ','
CSV HEADER;

COPY carousel_listings(id, Productimg, Listingnum, colorway)
FROM '/tmp/sqllistings.csv'
DELIMITER ','
CSV HEADER;




COPY users(user_name)
FROM '/public/users.csv'
DELIMITER ','
CSV HEADER;

COPY reviews(product_id, review_title, description, review_date, verified, size, width, comfort, quality, value, helpfulY, helpfulN, recommended, user_id)
FROM '/tmp/reviews.csv'
DELIMITER ','
CSV HEADER;



-- Create Table Comp_look (
--   id integer,
--   link text,
--   PRIMARY KEY (id)
-- );



-- Create Table Comp_listings (
--   id integer,
--   Listingnum integer,
--   imgid1 REFERENCES Comp_look (id),
--   imgid2 REFERENCES Comp_look (id),
--   imgid3 REFERENCES Comp_look (id),
--   imgid4 REFERENCES Comp_look (id),
--   PRIMARY KEY (id)
-- );




-- Create Table Recommended (
--   id integer,
--   link text,
--   PRIMARY KEY (id)
-- );



-- Create Table Recommended_listings (
--   id integer,
--   Listingnum integer,
--   imgid1 REFERENCES Recommended (id),
--   imgid2 REFERENCES Recommended (id),
--   imgid3 REFERENCES Recommended (id),
--   imgid4 REFERENCES Recommended (id),
--   imgid5 REFERENCES Recommended (id),
--   imgid6 REFERENCES Recommended (id),
--   imgid7 REFERENCES Recommended (id),
--   imgid8 REFERENCES Recommended (id),
--   imgid9 REFERENCES Recommended (id),
--   imgid10 REFERENCES Recommended (id),
--   imgid11 REFERENCES Recommended (id),
--   imgid12 REFERENCES Recommended (id),
--   PRIMARY KEY (id)
-- );