require('dotenv').config()
var password = process.env.password
var mysql = require("mysql");
var inquirer = require("inquirer");

//  mysql connection
var connection = mysql.createConnection({
    host : "localhost",
    port:3306,
    user : "root",
    password : password,
    database : "Bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  table();
});


var table = function (){
	connection.query("SELECT * FROM products", function (err, res){
		//console.log(res);
		for(var i=0; i<res.length; i++){
			console.log(res[i].item_id + " || " +
				res[i].product_name+ " || " + 
				res[i].department_name+ " || " +
				res[i].price+ " || " +
				res[i].stock_quantity+ " \n");
		}
	userSelect();
	})
}

var userSelect = function (){
	inquirer.prompt([{
		name: "choice",
		type: "input",
		message: "What would you like to buy? [Quit with Q]"
	}]).then(function(answer){
		connection.query("SELECT * FROM products", function (err, res){
		var correct = false;
			for (var i = 0; i <res.length; i ++){
				if (res[i].product_name == answer.choice){
					correct = true;
					var product = answer.choice;
					var id = i;
					inquirer.prompt({
						name:"quant",
						type: "input",
						message: "How many would you like to buy?",
						validate: function(value){
							if(isNaN(value)== false){
								return true;
							}else{
								return false;
							}
						}
					}).then(function(answer){
						// if((res[id].stock_quantity=answer.quant)>0){
						// connection.query("UPDATE products SET stock_quantity= " + 
						// 	(res[id].stock_quantity=answer.quant) , function (err, res){
											

						console.log("Product Bought!");
						table();
						//})
					//}//second if
				})//second then
			}//big if
		}//for loop
	})			
})
}

// var start = function(){
// 	inquirer.prompt([{
// 		name: "Item",
// 		type: "rawlist",
// 		message: "What are you looking for?",
// 		choices:["animals", "jewelry", "electronics", "accessories", "kitchen", "books"]
// 	}]).then(function(answer){
// 		switch (answer.Item){
// 			case "animals":
// 				animals();
// 			break;

// 			case "jewelry":
// 				jewelry();
// 			break;

// 			case "electronics":
// 				electronics();
// 			break;

// 			case "accessories":
// 				accessories();
// 			break;

// 			case "kitchen":
// 				kitchen();
// 			break;

// 			case "books":
// 				books();
// 			break;
// 		}

// 	});
		
// };

// var animals = function () {
// 	inquirer.prompt([{
// 		name:"animals",
// 		type: "input",
// 		message: "What animal would you like to search for?"
// 	}]).then(function(answer){
// 		var query = "SELECT item_id, product_name FROM products WHERE ? ";
// 		connection.query(query, {animals:answer.animals}, function (err, res){
// 			console.log("it worked");
// 			// for (var i = 0; i < res.length; i ++){
// 			// }
// 			start();
// 		})
// 	})
// }
