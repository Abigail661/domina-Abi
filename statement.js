const person1 = {
    name: 'love',
    age: '15',
    gender:'M'
}
const person2 = {
    name: 'hope',
    age: '20',
    gender:'F'
}
const person3 = {
    name: 'Great',
    age: '19',
    gender:'bgthj'
}
const person4 = {
    name: 'Abigail',
    age: '45',
    gender:'M'
}

const checkGender = (person) => {
    if (person.gender === 'M') {
        console.log('This is a male')
    } else if (person.gender === 'F'){
        console.log('This is a female')
    }else  {
        console.log('unknown')
    }
}
checkGender(person4)
checkGender(person3)
checkGender(person2)
checkGender(person1)

const checkNumber = (num)=>{
    const numType = typeof num;
    if (numType ==='number'){
        console.log('This is a number')
 } else {
    console.log('This is not a number')
}
} 
checkNumber(4)
checkNumber(3.00)
checkNumber(true)
checkNumber('s')






//(person.gender === 'F')
