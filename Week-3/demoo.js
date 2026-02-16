//You are given an array of product objects. Each product has a sales object showing units sold in different regions.
const products = [
  {
    name: "Laptop",
    sales: {
      north: 120,
      south: 100,
      east: 90,
      west: 80
    }
  },
  {
    name: "Mobile",
    sales: {
      north: 200,
      south: 150,
      east: 180,
      west: 170
    }
  },
  {
    name: "Tablet",
    sales: {
      north: 90,
      south: 80,
      east: 70,
      west: 60
    }
  }
];
// ❓ Your Tasks:
// 1)Print the total sales for each product using reduce().
// 2)Create a new array where each object contains the product name and its total sales. 

let total=products.map((val)=>{
    let values=Object.values(val.sales).reduce((acc,val)=>acc+val,0)
    return{
        name:val.name,
        total:values
}})
console.log(total)