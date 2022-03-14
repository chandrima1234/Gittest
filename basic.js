console.log("hello")
let mark =[12,14,17,20];
let total= mark.reduce((sum,marks)=>sum+marks,0)
console.log(total)
var scores =[12,13,15,17,18]
var evenscore=[];
for(let i=0;i<scores.length;i++){
   if(scores[i]%2 ==0)
   {
       evenscore.push(scores[i])
   }
}
console.log(evenscore)
//array function
let newFilterEvenScores = scores.filter(score=>score%2==0) // score is the new variable to store the first value
console.log(newFilterEvenScores)
let mappedArray = newFilterEvenScores.map(scores=>scores*3)
console.log(mappedArray)
let totalVal= mappedArray.reduce((sum,val)=>sum+val,0)
console.log(totalVal)
// create new chain of function in a single line 
var scores1 =[12,13,15,17,18]
let NewArray = scores1.filter(score=>score%2==0).map(scores=>scores*3).reduce((sum,val)=>sum+val,0)
console.log("chain of array", NewArray)
let fruits= ['bananna','apple','pineapple','mango']
console.log(fruits.sort())
console.log(fruits.reverse())
let number = [12,20,3,25,8]
console.log(number.sort((a,b)=>(a-b))) //bubble sort
let sum = (c,d)=>c+d
console.log(sum(5,6))
let Quoteday ="Friday is Funday"
let QuoteCount = Quoteday.indexOf("day")
console.log(QuoteCount)
let count=0
while(QuoteCount!== -1){
    count ++
    QuoteCount= Quoteday.indexOf("day",QuoteCount+1)
}
console.log(count)
let person={
    firstname :'tim',
    lastname :'joe',
    age:24,
    fullname: function(){
       return this.firstname+this.lastname
},
}
console.log(person.fullname())
/*console.log(person.firstname) //dot notation
console.log(person['lastname']) //array like notation
person.firstname= 'timdate'
console.log(person.firstname)
person.gender= 'male'
console.log(person)
delete person.gender
console.log(person)
*/

for(let key in person){
    console.log(person[key]) //person[firstname]
}

