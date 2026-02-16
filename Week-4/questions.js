//FLATTENING ARRAY
const arr = [1, [2, [3]]]
function flatten(arr){
    let result=[]
    for(let item of arr){
    if(Array.isArray(item)){
       result=result.concat(flatten(item))
    }else{
        result.push(item)
    }
    }
    return result;
}
console.log(flatten(arr))


//PROMISE.ALL
const p1=Promise.resolve("p1")
const p2=Promise.resolve("p2")
const p3=Promise.reject("p3")

function promiseAll(pn){
    return Promise.all(pn)
}
promiseAll([p1,p2,p3])
.then((val)=>{console.log(val)})
.catch((val)=>{console.log(val)})



//DEEP CLONING
function deepClone(value){
//handling value
    if(value===null||typeof value!=="object"){
        return value;
    }
//handling array
    if(Array.isArray(value)){
        const result=[]
        for(i=0;i<value.length;i++){
            result.push(deepClone(value[i]))
        }
        return result;
    }
//handling object
    const object={}
    for(let key in value){
        if(value.hasOwnProperty(key)){
            object[key]=deepClone(value[key])
        }
    }
    return object;
}

//EXAMPLE
const original = {
  name: "Hiba",
  info: {
    age: 25,
    skills: ["JS", "HTML"]
  }
};
const res=deepClone(original)
res.address="hassan"
console.log(res)
console.log(original)


//THROTTLE
function throttle(func,delay){
    let last=0
    return function(...args){
        const now=Date.now()
        if(now-last>=delay){
            last=now
            func.apply(this,args)
        }
    }
}


//GENERATOR FUNCTION
function* generator(start,end){
   for(i=start;i<end;i++){
    yield i;
   }
}
const gen=generator(1,6)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())


//CURRYING
function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(sum(2)(4)(6))


// Write two functions that return the square of a number:
// Using function declaration
// Using function expression

function func(num){
    return num*2
}
func(3)
const varr=func(3)
console.log(varr)

//MAKING FIRST LETTER CAPITAL
const sentence = "JavaScript is a powerful programming language.";
const ress=sentence.split(" ").map((val)=>{return val[0].toUpperCase()+val.slice(1)}).join(" ")
console.log(ress)


const numbers = [3, 6, 9, 12, 15, 18];
// Create a new array with numbers that are greater than 10
// From that array, create another array with each number multiplied by 2
// Finally, return the sum of all numbers in the second array
const fin=numbers.filter((val)=>{
    return val>10
}).map((val)=>{
    return val*2
}).reduce((acc,val)=>{
    return acc+val
})
console.log(fin)
     

const sntce = "   I love    JavaScript and coding!   ";
// Trim the extra spaces
// Replace multiple spaces between words with a single space
// Convert the whole string to lowercase
// Count how many words are in the cleaned string
const a=sntce.trim().replace(/\s+/g, " ").toLowerCase().length
console.log(a)
