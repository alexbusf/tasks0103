//Написать модуль, который способен выполнять операции с числами любой длины.

/*
BigInt – это специальный числовой тип, 
который предоставляет возможность работать с целыми числами произвольной длины.
*/

//сложение чисел любой длины
function sum(a, b) {	
  return BigInt(a) + BigInt(b);
}

//вычитание чисел любой длины
function sub(a, b) {	
  return BigInt(a) - BigInt(b);
}

//умножение чисел любой длины
function mul(a, b) {	
  return BigInt(a) * BigInt(b);
}

//деление чисел любой длины, берет только целую часть от деления
function div(a, b) {	
  return BigInt(a) / BigInt(b);
}

export {sum, sub, mul, div}


