ALTER TABLE houses
ADD COLUMN zipcode int NOT NULL,
ADD COLUMN image_url text NOT NULL,
ADD COLUMN mortgage numeric NOT NULL,
ADD COLUMN rent numeric NOT NULL;