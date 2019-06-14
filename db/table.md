CREATE TABLE houses (
id SERIAL PRIMARY KEY,
name VARCHAR(30),
address VARCHAR(100),
city VARCHAR(100),
state VARCHAR(2),
zip INTEGER,
img TEXT,
mortgage DECIMAL,
rent DECIMAL
)

INSERT INTO houses (name, address, city, state, zip, img, mortgage, rent)
values ('tom', 'address', 'Oakley', 'ID', 83346, 'house.img', 900, 450);