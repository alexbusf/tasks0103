//Написать модуль, который способен выполнять операции с числами любой длины.

// Без использования BigInt 


//сложение чисел любой длины
function sum(a, b){
  let result = '';
  let carry = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || carry) {
    carry += ~~a.pop() + ~~b.pop();  
    result = carry % 10 + result;
    carry = carry > 9;
  }
  return result
}


//вычитание чисел любой длины
function sub(a, b) {
      a = a.split('').reverse();
	  b = b.split('').reverse();
      a.push(0);
      let len = a.length;
      let result = [];
	  let c = 0;
	  let d = 0;
      for (let i = 0; i < len; i++) {
          c = +a[i] + (+b[i] || 0) + d;
          result[i] = c > 9 ? (d = (c/10|0), c % 10) : (d = 0, c);
      }
      return result.reverse().join('').substr(1,9999);
}





//умножение чисел любой длины
function mul(a, b) {
  a = a.split('').reverse();
  b = b.split('').reverse();

  let result = [];

  //перемножение каждого элемента
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      let m = a[i] * b[j];
      result[i + j] = (result[i + j]) ? result[i + j] + m : m;
    }
  }

  //образобка результата
  //перенос цфифр в разряды выше, чтобы в каждом элементе массива оставалось только по одной цифре
  for (let i = 0; i < result.length; i++) {
    let num = result[i] % 10;
    let move = Math.floor(result[i] / 10);
    result[i] = num;

    if (result[i + 1])
      result[i + 1] += move;
    else if (move != 0)
      result[i + 1] = move;
  }
  return result.reverse().join(''); //конвертация массива в строку
}



//деление чисел любой длины, возвращает частное и остаток от деления
function div(a, b) {
  let quotient = ""; //частное
  let remainder = ""; //остаток
  let partialDividend = "";

  for (let i = 0; i < a.length; i++) {
    partialDividend += a[i];
    let partialQuotient = Math.floor(+partialDividend / +b);
    quotient += String(partialQuotient);
    let partialRemainder = +partialDividend % +b;
    partialDividend = String(partialRemainder);
  }

  remainder = partialDividend;

  return [quotient, remainder];
}


export {sum, sub, mul, div}





