const express = require('express');
const app = express();
const product=require("./Router/productsRoutes")

app.use("/products",product)

// Starting the server
const PORT = 3009;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
