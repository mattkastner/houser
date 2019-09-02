INSERT INTO houses
(name, address, city, state, zipcode, image_url, mortgage, rent)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8);

SELECT *
FROM houses;