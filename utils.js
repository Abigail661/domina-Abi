//basic syntax
//function demoFunc(){
  //  console.log('hi,there');
//}

//arrow function latest
const demoFunc = () => {
    console.log('hi there 2');
}

const q=2;
let p=4;

const demoFunc2 = (a,b,d) => {
    const c = a+b+2;
    const z =(c/3)+d;
    const y = p+q;
    console.log('p-before:',p);
    
    p = z-y;
    console.log('p+after:',p);
    
    //return z;
}
console.log('p-outside', p);
const k  = demoFunc2(1,3,4);
console.log(k);


//const j = demoFunc();
//const k = demoFunc2(4,5,1);
//console.log(k);

console.log('addition:', demoFunc2(1,3,4));

//console.log(j); // undefined 
//console.log(k); // 9

//console.log('addition:',4+2+5);
//console.log('addition',40+1);

//letter casing
//camelcase = demoFunction e.g forHerLetter
//snakecase = demo_function -python


//demoFunc();
//demoFunc2();