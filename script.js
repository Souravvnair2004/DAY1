a=5;
var a=15;
console.log(a)
let b='15';
console.log(b)
{
let b=50;
console.log(b)

}
console.log(typeof(b));
var st="SOURAV"
console.log(typeof(st));
var d= false
// console.log(typeof(m));
var arr1=['orange','apple',20]
console.log(arr1[0]);
console.log(arr1.length);
arr1.push('pineapple')
console.log(arr1)
// JAVA SCRIPT OBJECT
let person={
name:'SOURAV',
age:19,
location:"TVM"
}
console.log(person.age)
let arr2=[{
    name:'NOBLE',
    age:18,
    location:"TVM"
    },
    {
    name:'ARYA',
    age:20,
    location:"TVM"
    }]
console.log(arr2[1].age)
function add(x,y) {
 var sum=x+y;
 console.log(sum)   
}
add(40,20);
function add1(p,q){
    return p+q;
}
var sum1=add1(10,15)
console.log(sum1);
let m=5;
console.log(m)
let n=m++;
console.log(n,m)

if (a>b) { console.log('a is greater than b')
    
} 
else if(a==b){
    console.log('a is equal to b')
}
else {
    console.log('a is not greater than b')
}

var array=[1,2,3,4,5,6]
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
for (const key in person) {
   
    console.log(person[key])
}

for (const i of array) {
    console.log(i)

}