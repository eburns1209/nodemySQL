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
    database : "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  table();
});


var table = function (){
	connection.query("SELECT * FROM products2", function (err, res){
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
		connection.query("SELECT * FROM products2", function (err, res){
		var correct = false;
			for (var i = 0; i <res.length; i ++){
				if (res[i].product_name == answer.choice){
					correct = true;
					//console.log(answer.choice);
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
						//console.log(res[id]);
						if((res[id].stock_quantity-answer.quant)> 0){
							
							connection.query("UPDATE products2 SET stock_quantity= ' "
								+ (res[id].stock_quantity-answer.quant) + " ' WHERE product_name= ' "
								+ product + " ' ", function (err, res2){
									//console.log(res);
									console.log("product bought");
									table();
								})
						 //}
						}
											

						
					//	})
					//}//second if
				})//second then
			}//big if
		}//for loop
	})			
})
}

