function calculate(a,b,operation){
    if(operation==='add')return a + b;
    if(operation==='subtraction ')return a - b;
    if(operation==='multiply')return a * b;
    if(operation==='divide')return a !== 0 ? a / b:
    undefined;
}
console.log(calculate(2,5, 'add'))
console.log(calculate(10,2, 'subtraction'))
console.log(calculate(4,9, 'multiply'))
console.log(calculate(8,6, 'divide'))
