CREATE DATABASE Bamazon_db;
use Bamazon_db;

CREATE TABLE products(
	item_id INTEGER (11) auto_increment NOT NULL,
    product_name VARCHAR (100) not null,
    department_name VARCHAR (100) not null,
    price DECIMAL (10, 2) not null,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);
SELECT * FROM products;
INSERT INTO products (product_name, department_name, price, stock_quantity)	VALUES("dog", "pets", 40.70, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity)	VALUES("cat", "pets", 39.70, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES("Vita Coco Coconut Water", "Beauty, Health & Grocery", 225.00, 3116);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES("Garmin 235", "Electronics & computers", 250.99, 34390);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES("Brooks Ghost 9", "Athletic Shoes", 128.70, 390);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES("Saucony Ride 10", "Athletic Shoes", 128.75, 343);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES("Huma Gel", "Fitness & Nutrition", 2.25, 90);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES("Fitbit Wireless Wristband", "Electronics & computers", 250.99, 3390);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES("Toshiba Laptop", "Electronics & computers", 189.99, 390);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES("Tom Tom Spark", "Electronics & computers", 200.99, 3430);

select * from products;