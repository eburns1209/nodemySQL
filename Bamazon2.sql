SELECT * FROM bamazon_db.products2;

CREATE TABLE `products2` (
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(45) NOT NULL,
  `department_name` varchar(45) NOT NULL,
  `price` decimal(10,4) NOT NULL,
  `stock_quantity` int(10) NOT NULL,
  PRIMARY KEY (`item_id`)
) 


INSERT INTO `bamazon_db`.`products2`
(`item_id`,
`product_name`,
`department_name`,
`price`,
`stock_quantity`)
VALUES
(<{item_id: }>,
<{product_name: }>,
<{department_name: }>,
<{price: }>,
<{stock_quantity: }>);

