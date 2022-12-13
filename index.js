'use strict'
 
const express = require('express'); 
const cors = require('cors'); 
const morgan = require('morgan');

const app = express();

//middlewares 

app.use(cors());

//implementem morgan en mode desenvolupament
app.use(morgan('dev'));

//per passar de json en el body a objectes java5cript
app.use(express.json());

//per passar de json url a objectes java5cript
app.use(express.urlencoded({ extended: false }));

//importar l'arxiu de rutes de product.routes

const Products = require('./products/routes/product.routes');
//passem la instancia app
Products.productRoutes(app);
//executem el servidor per escoltar en el puerto 3990 i|la ip localhost——-—>127.0.0.
app.listen(3000, 'localhost', () => {
    console.log('Server listening on port %s', 3000);
})