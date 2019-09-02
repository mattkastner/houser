CREATE TABLE houses (
  house_id SERIAL PRIMARY KEY NOT NULL,
  name varchar(200) NOT NULL,
  address text NOT NULL,
  city text NOT NULL,
  state varchar(2) NOT NULL,
  zipcode int NOT NULL,
  image_url text NOT NULL,
  mortgage numeric NOT NULL,
  rent numeric NOT NULL
);