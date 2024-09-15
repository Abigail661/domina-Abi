//So sorry for submitting late Sir,1st assignment on array
let Students = [
    {
    name :'Abigail',
    age :'16',
    grade :'A'
},
{ 
    name :'Abi',
    age :'11',
    grade :'B',
},
{
    name :'Love',
    age :'10',
    grade :'C'
},
{
    name :'peace',
    age :'15',
    grade :'A'
},
{
    name :'Joy',
    age :'16',
    grade :'A'
}
]
function filterByGrade(Students,grade){
    return Students.filter(Students => Students.grade===grade);
}
//console.
function averageAge(Students){
return Students.reduce((a,b) =>  a+b.age,0)/Students.length;
}
console.log(filterByGrade(Students,'A'));
console.log(averageAge(Students));
