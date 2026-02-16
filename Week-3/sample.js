const employees = [
  {
    name: "John",
    salaries: {
      jan: 3000,
      feb: 3200,
      mar: 3100
    }
  },
  {
    name: "Emma",
    salaries: {
      jan: 4000,
      feb: 4200,
      mar: 4100
    }
  },
  {
    name: "Mike",
    salaries: {
      jan: 3500,
      feb: 3600,
      mar: 3700
    }
  }
];
let total=employees.forEach((val)=>{
let totalSalary=Object.values(val.salaries).reduce((sum,val)=>sum+val,0)
console.log(val.name+":"+totalSalary)
      
  })

  const products = [
{ name: "Pen", quantity: 10, price: 5 },
{ name: "Notebook", quantity: 3, price: 20 },
{ name: "Pencil", quantity: 15, price: 2 }
  ];

  let total=products.reduce((sum,val)=>{
return sum+(val.quantity)*(val.price)
  
  },0)
  console.log(total)

  const orders = [
{ customer: "Alice", amount: 250 },
{ customer: "Bob", amount: 400 },
{ customer: "Alice", amount: 150 },
{ customer: "Bob", amount: 100 },
{ customer: "Charlie", amount: 300 }
  ];
  let total=orders.reduce((acc,val)=>{
if(acc[val.customer]){
  acc[val.customer]+=val.amount
}else{
  acc[val.customer]=val.amount
}
return acc
  },{})
  console.log(total)

  const purchases = [
{ customer: "Sara", item: { name: "Pen", price: 10 } },
{ customer: "Ali", item: { name: "Pencil", price: 5 } },
{ customer: "Sara", item: { name: "Notebook", price: 50 } },
{ customer: "Ali", item: { name: "Eraser", price: 3 } },
  ];

 
   let total=purchases.reduce((acc,val)=>{
  if(acc[val.customer]){
    acc[val.customer]+=val.item.price
  }else{
    acc[val.customer]=val.item.price
  }
  return acc
},{})
   console.log(total)
              
  const votes = ["Alice", "Bob", "Alice", "Charlie", "Bob", "Alice"];

  let total=votes.reduce((acc,val)=>{
if(acc[val]){
  acc[val]+=1
}else{
  acc[val]=1
}
return acc
  },{})
  console.log(total)

  const students = [
{ name: "Aisha", marks: 85 },
{ name: "Rahul", marks: 42 },
{ name: "Fatima", marks: 73 },
{ name: "Ali", marks: 35 },
{ name: "Sara", marks: 90 }
  ];

  let newArr=students.filter((val)=>val.marks>=50).map((val)=>val.name)
  console.log(newArr
  )

  const students = [
{ name: "Aisha", marks: 85 },
{ name: "Fatima", marks: 73 },
{ name: "Ali", marks: 35 },
{ name: "Sara", marks: 90 },
{ name: "Rahul", marks: 42 }
  ];

  let stud=students.find((val)=>val.marks<50)
  console.log(stud)

 const students = [
   {
     name: "Aisha",
     subjects: [
       { name: "Math", marks: 85 },
       { name: "English", marks: 78 },
       { name: "Science", marks: 92 }
     ]
   },
   {
     name: "Rahul",
     subjects: [
       { name: "Math", marks: 45 },
       { name: "English", marks: 50 },
       { name: "Science", marks: 40 }
     ]
   },
   {
     name: "Fatima",
     subjects: [
       { name: "Math", marks: 90 },
       { name: "English", marks: 85 },
       { name: "Science", marks: 88 }
     ]
   }
 ];

  let fill=students.map((val)=>{
let total=val.subjects.reduce((acc,val)=>acc+val.marks,0)
let average=total/val.subjects.length
return{
  name:val.name,
  average:average
}
  }).filter((val)=>{
return val.average>=80
  })
  console.log(fill)

 const students = [
   {
     name: "Aisha",
     class: "10A",
     subjects: [
       { name: "Math", marks: 85 },
       { name: "English", marks: 78 },
       { name: "Science", marks: 92 }
     ]
   },
   {
     name: "Rahul",
     class: "10B",
     subjects: [
       { name: "Math", marks: 88 },
       { name: "English", marks: 80 },
       { name: "Science", marks: 75 }
     ]
   },
   {
     name: "Fatima",
     class: "10A",
     subjects: [
       { name: "Math", marks: 90 },
       { name: "English", marks: 85 },
       { name: "Science", marks: 88 }
     ]
   }
 ];

 let total=students.map((val)=>{
   return{
     name:val.name,
     marks:val.subjects[0].marks
   }
 }).filter((val)=>val.marks>85)
 console.log(total)

const students = [
  {
    name: "Aisha",
    class: "10A",
    subjects: [
      { name: "Math", marks: 85 },
      { name: "English", marks: 78 },
      { name: "Science", marks: 92 }
    ]
  },
  {
    name: "Rahul",
    class: "10B",
    subjects: [
      { name: "Math", marks: 88 },
      { name: "English", marks: 80 },
      { name: "Science", marks: 75 }
    ]
  },
  {
    name: "Fatima",
    class: "10A",
    subjects: [
      { name: "Math", marks: 90 },
      { name: "English", marks: 85 },
      { name: "Science", marks: 88 }
    ]
  }
];

let total=students.filter((val)=>{
 return val.subjects.every((val)=>{ return val.marks>80})
}).map((val)=>{
  return{
    name:val.name,
    class:val.class
  }
})
console.log(total)

const students = [
  {
    name: "Aisha",
    class: "10A",
    subjects: [
      { name: "Math", marks: 85 },
      { name: "English", marks: 78 },
      { name: "Science", marks: 92 }
    ]
  },
  {
    name: "Rahul",
    class: "10B",
    subjects: [
      { name: "Math", marks: 88 },
      { name: "English", marks: 80 },
      { name: "Science", marks: 75 }
    ]
  },
  {
    name: "Fatima",
    class: "10A",
    subjects: [
      { name: "Math", marks: 90 },
      { name: "English", marks: 85 },
      { name: "Science", marks: 88 }
    ]
  }
];

let total=students.filter((val)=>{
 return val.subjects.some((val)=>{
   return val.marks<80
  })
}).map((val)=>{
  return{
    name:val.name,
    subjects:val.subjects.filter((val)=>{
      return val.marks<80
    }).map((val)=>{return val.name})
}})
console.log(total)

const results = {
  Aisha: { Math: 85, English: 78, Science: 92 },
  Rahul: { Math: 88, English: 80, Science: 75 },
  Fatima: { Math: 90, English: 85, Science: 88 },
  Arjun: { Math: 70, English: 65, Science: 60 }
};

let total=Object.entries(results)
.filter(([name,subj])=>{
  let scores=Object.values(subj)
  let sum=scores.reduce((sum,val)=>sum+val,0)
  let average=sum/scores.length
  return average<=80
}).map((val)=>val.name)
 console.log(total)

const person = {
  name: "Sara",
  age: 25,
  city: "Delhi",
  skills: ["JS", "React"]
};

let {...personCopy}=person;
personCopy.country='india'
console.log(personCopy)

const {name,skills}=person

let c=structuredClone(personCopy)
c.skills.push("node.js")
console.log(person)

const user = {
  id: 101,
  info: {
    name: "Riya",
    email: "riya@example.com",
    address: {
      city: "Mumbai",
      pin: 400001
    }
  },
  role: "admin"
};

let {
  info:{
    name,
    address:{
      city
    }
  },role
}=user
console.log(city)

let {id,...vere}=user
console.log(id)

const profile = {
  id: 1,
  personal: {
    name: "Diya",
    contact: {
      email: "diya@example.com",
      phone: "1234567890"
    },
    address: {
      city: "Bangalore",
      zip: 560001
    }
  },
  role: "user",
  status: "active"
};

let {
  personal:{
    name,
    contact:{
      email
    },
    address:{
      city,
    }
  }
}=profile
console.log(city)

let {personal,role,...remain}=profile
console.log(remain)

const data = {
  user: "Asha",
  hobbies: ["reading", "painting", "traveling"],
  education: {
    degree: "BSc",
    marks: [88, 91, 95]
  }
};

let {
  hobbies:[,frist],
  education:{
    marks:[zero,,second]
  }
}=data
console.log(frist)

const company = {
  name: "TechGrow",
  location: {
    country: "India",
    city: "Kochi",
    office: {
      floor: 5,
      room: "A501"
    }
  },
  departments: ["Engineering", "Marketing", "HR"],
  founded: 2015,
  ceo: "Anil"
};

let {
  location:{
    city,
    office:{
      room
    }
  },
  departments:[first]
}=company
console.log(city)
console.log(room)
console.log(first)

let {location,departments,...remain}=company
console.log(remain)

function Person(name,age){
  this.name=name,
  this.age=age
}
Person.prototype.greet=function(){
  console.log(this.name+' hello')
}
const obj=new Person('hiba',21)
obj.greet()

console.log(obj.__proto__===Person.prototype)

let product={
  name:'cencia',
  price:220,
  tags:[2,3,4],
  details:{
    brand:'coscos',
    stock:3
  }
}
let string=JSON.stringify(product)
console.log(string)

let object=JSON.parse(string)
console.log(object)

let data = {
  user: "Ammu",
  info: {
    city: "Delhi",
    scores: [85, 90]
  }
};
 let copy={...data}
 copy.info.scores[0]=100

 let deep=structuredClone(data)
 deep.info.scores[1]=200
 console.log(data)

 const students = [
   { name: "Alice", marks: [85, 92, 78] },
   { name: "Bob", marks: [70, 68, 75] },
   { name: "Charlie", marks: [95, 100, 98] },
   { name: "David", marks: [45, 55, 50] },
 ];
 let a=students.filter((val)=>{
   let scores=val.marks
   let total=val.marks.reduce((sum,val)=>sum+val,0)
   let average=total/scores.length
    return average>=80
 }).map((val)=>val.name)
 console.log(a)

const employees = [
  {
    name: "Alice",
    projects: [
      { title: "Inventory System", hours: 120 },
      { title: "POS App", hours: 80 }
    ]
  },
  {
    name: "Bob",
    projects: [
      { title: "E-commerce Site", hours: 200 }
    ]
  },
  {
    name: "Charlie",
    projects: [
      { title: "Chat App", hours: 90 },
      { title: "Admin Panel", hours: 100 },
      { title: "API Backend", hours: 130 }
    ]
  }
];
let hours=employees.map((val)=>{
   let totalHours=val.projects.reduce((acc,val)=>acc+val.hours,0)
   return{name:val.name,totalHours}
}).filter((val)=>val.totalHours>250)
.map((val)=>{
  return val.name+'-'+val.totalHours
 })
 console.log(hours)

const developers = [
  {
    name: "Aisha",
    skills: {
      JavaScript: true,
      Python: false,
      React: true
    }
  },
  {
    name: "Raj",
    skills: {
      Java: true,
      HTML: true,
      CSS: false
    }
  },
  {
    name: "Mina",
    skills: {
      Go: false,
      Rust: false,
      TypeScript: true
    }
  }
];
let obj=developers.map((val)=>{
  return 
})
console.log(obj)





const students = [
  {
    name: "Aisha",
    class: "10A",
    subjects: [
      { name: "Math", marks: 85 },
      { name: "English", marks: 78 },
      { name: "Science", marks: 92 }
    ]
  },
  {
    name: "Rahul",
    class: "10B",
    subjects: [
      { name: "Math", marks: 88 },
      { name: "English", marks: 80 },
      { name: "Science", marks: 75 }
    ]
  },
  {
    name: "Fatima",
    class: "10A",
    subjects: [
      { name: "Math", marks: 90 },
      { name: "English", marks: 85 },
      { name: "Science", marks: 88 }
    ]
  }
];
 
 
 Your Task:
 Create a new array of students from class "10A"
 
 But only include those whose average marks are greater than or equal to 85
 Return their name and average marks

const employees = [
  {
    id: 1,
    name: "John",
    tasks: {
      completed: 5,
      pending: 3,
      overdue: 1
    }
  },
  {
    id: 2,
    name: "Jane",
    tasks: {
      completed: 7,
      pending: 0,
      overdue: 2
    }
  },
  {
    id: 3,
    name: "Mark",
    tasks: {
      completed: 2,
      pending: 4,
      overdue: 0
    }
  }
];
let total=employees.map((val)=>{
  let vall=Object.values(val.tasks)
  let sum=vall.reduce((acc,val)=>acc+val,0)
  return {
    id:val.id,
    name:val.name,
    tasks:sum

  }
})
console.log(total)

const products = [
  {
    id: 101,
    name: "Laptop",
    category: "Electronics",
    ratings: {   object with userId: rating
      user1: 4,
      user2: 5,
      user3: 3
    }
  },
  {
    id: 102,
    name: "Sofa",
    category: "Furniture",
    ratings: {
      user1: 5,
      user2: 4
    }
  },
  {
    id: 103,
    name: "Headphones",
    category: "Electronics",
    ratings: {
      user3: 4,
      user4: 4,
      user5: 5
    }
  }
];

let a=products.filter((val)=>{
  return val.category==="Electronics"
}).map((val)=>{
  let total=Object.values(val.ratings).reduce((acc,val)=>acc+val,0)
  return {
    id:val.id,
    name:val.name,
    average:total
  }
})
let filter=a[0]
console.log(filter)

const orders = [
  {
    orderId: 1,
    customer: "Alice",
    items: [
      { product: "Laptop", quantity: 1, price: 1200 },
      { product: "Mouse", quantity: 2, price: 20 }
    ]
  },
  {
    orderId: 2,
    customer: "Bob",
    items: [
      { product: "Desk", quantity: 1, price: 300 },
      { product: "Chair", quantity: 4, price: 100 }
    ]
  },
  {
    orderId: 3,
    customer: "Charlie",
    items: [
      { product: "Monitor", quantity: 2, price: 250 }
    ]
  }
];
const library = [
  {
    title: "Book A",
    authors: ["Author1", "Author2"],
    copies: [
      { id: 1, condition: "good" },
      { id: 2, condition: "fair" }
    ]
  },
  {
    title: "Book B",
    authors: ["Author3"],
    copies: [
      { id: 3, condition: "poor" },
      { id: 4, condition: "good" },
      { id: 5, condition: "good" }
    ]
  },
  {
    title: "Book C",
    authors: ["Author1"],
    copies: [
      { id: 6, condition: "fair" }
    ]
  }
];
let book=library.map((val)=>{
  let a=val.copies.filter((val)=>val.condition==='good')
  return{
    title:val.title,
    copies:a.length
  }

})
console.log(book)

function Person(name,age){
  this.name=name;
  this.age=age;
}
function Employee(name,age,position,salary){
  Person.call(this,name,age)
  this.position=position;
  this.salary=salary;
}
Employee.prototype=Object.create(Person.prototype)
Employee.prototype.constructor=Person

Person.prototype.getDetails=function(){
  return this.name+' age '+this.age
}
const a=new Person('hiba',21)
console.log(a.getDetails())

const movies = [
  {
    title: "Inception",
    genres: ["Sci-Fi", "Thriller"],
    ratings: { alice: 5, bob: 4, charlie: 5 }
  },
  {
    title: "The Dark Knight",
    genres: ["Action", "Crime", "Drama"],
    ratings: { alice: 5, bob: 5, charlie: 4, dave: 5 }
  },
  {
    title: "Interstellar",
    genres: ["Sci-Fi", "Drama"],
    ratings: { alice: 4, bob: 5, charlie: 5 }
  },
  {
    title: "Joker",
    genres: ["Crime", "Drama", "Thriller"],
    ratings: { alice: 4, bob: 3, charlie: 4, dave: 4 }
  }
];
let drama=movies.filter((val)=>{
  return gen=val.genres.includes('Drama')
}).map((val)=>{
  let obj=Object.values(val.ratings)
  let total=obj.reduce((acc,val)=>acc+val,0)
  let avg=total/obj.length
  return{
    title:val.title,
    average:avg,
    count:obj.length
  }
})

console.log(drama)

const employees = [
  {
    name: "Alice",
    department: "Engineering",
    projects: [
      { projectName: "Project A", duration: 6, technologies: ["JavaScript", "React"] },
      { projectName: "Project B", duration: 4, technologies: ["Node.js", "MongoDB"] }
    ],
    skills: ["JavaScript", "React", "Node.js"]
  },
  {
    name: "Bob",
    department: "Design",
    projects: [
      { projectName: "Project C", duration: 3, technologies: ["Photoshop", "Illustrator"] }
    ],
    skills: ["Photoshop", "Illustrator", "Figma"]
  },
  {
    name: "Charlie",
    department: "Engineering",
    projects: [
      { projectName: "Project D", duration: 12, technologies: ["Java", "Spring"] },
      { projectName: "Project E", duration: 5, technologies: ["JavaScript", "Angular"] }
    ],
    skills: ["Java", "Spring", "Angular", "JavaScript"]
  }
];
let eng=employees.filter((val)=>{
 return val.department=='Engineering'
}).map((val)=>{
  let duration=val.projects.reduce((acc,val)=>acc+val.duration,0)
  return{
    name:val.name,
    duration:duration,
    
  }
})
console.log(eng)