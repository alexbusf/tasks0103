/*
Создать класс данных “Товар”
С полями
Название
Цена
Количество
Описание
Наполнить массив объектами такого класса.
Написать метод, который получает строку вида
“name-contains-fd&price-=2&quantity->5&description-ends-abc”
“name-starts-fd&quantity=-5”

"NameOfProduct5-contains-fd&300-=2&30->5&DecriptionOfProduct5-ends-abc"
"NameOfProduct5-starts-fd&30=-5"

На выходе возвращает массив, только с подходящими объектами
возможны (contains, starts, ends для строковых и <, =, >, <=, >= для числовых)
*/


class Product {
	
	constructor(name, price, quantity, description){
		this.name = name;
		this.price = price;
		this.quantity = quantity;
		this.description = description;
	}
	
	getInfo(){
		return "\"" + this.name + "-contains-fd&" + this.price
	    + "-=2&" + this.quantity + "->5&" + this.description + "-ends-abc\"\n"
		+ "\"" + this.name + "-starts-fd&" + this.quantity + "=-5\"";
	}
}

let products = [
  new Product("NameOfProduct1", 100, 10, "Decription1OfProduct1"),
  new Product("NameOfProduct2", 150, 15, "DecriptionOfProduct2"),
  new Product("NameOfProduct3", 200, 20, "DecriptionOfProduct3"),
  new Product("NameOfProduct4", 250, 25, "DecriptionOfProduct4"),
  new Product("NameOfProduct5", 300, 30, "DecriptionOfProduct5"),
];

for (let product of products) {
	console.log(product.getInfo());
}
