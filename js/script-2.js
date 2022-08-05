// for (let i = 5.789; i <= 500; i *= 40) {
//     console.log(i);
// }

// console.log('трататам!')

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 56;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);

//     console.log(`ЗП работника номера ${i} - `);

//     totalSalary += salary;

//     console.log('totalSalary:', totalSalary);
// }


// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//         console.log('нечетное:', i);
//         continue;
//     }
//     console.log('четное:', i);
        
//         total += i;
   
// }

// console.log('total', total);

// let balance = 10000;
// const payment = 2000;

// console.log(`Общая сумма ${payment} кредитов. Проверяем ко-во достопных средств на счету`,);

// if (payment <= balance) {
//     console.log('ok');
//     balance -= payment;

//     console.log(`На счету осталось ${balance} кредитов`);
//     console.log('Спасибо за покупку!')
// } else {
//     console.log('На счету не достаточно средств')
// }

// console.log('Операция завершена');



function checkForSpam(message) {
  let result;
  // Change code below this line
if("spam" || "sale") {
  result = true;
} else {
  result = false;
}
  // Change code above this line
  return result;
}




























