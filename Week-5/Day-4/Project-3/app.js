const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname)));

const products=[
    {name:'Lipstick',price:'4000',image:'./images/lipstick.jpeg'},
    {name:'Blush',price:'3000',image:'./images/blush.jpeg'},
    {name:'Foundation',price:'7000',image:'./images/foundation.jpeg'}
]

app.get('/products', (req, res) => {
  res.render('products', { products });
});

app.listen(3015, () => {
  console.log('http://localhost:3015/products');
});
