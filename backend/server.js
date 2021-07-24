import express from 'express';
import currentUser from './data/CurrentUser.js';
import category from './data/Category.js';
import products from './data/Products.js';
import shops from './data/shop.js';
import category2 from './data/category2.js';
import variations from './data/variations.js'

const app = express();
app.use(express.json());

app.get('/api/v2/public/myprofile', (req, res) => {
  res.json(currentUser);
});

app.post('/api/v2/public/login', (req, res) => {
  res.json(currentUser);
});

app.post('/api/v2/admin/product', (req, res) => {
  res.json('product added');
});

app.get('/api/v2/admin/getproducts', (req, res) => {
  res.json(products);
});

app.get('/api/v2/admin/getcategory', (req, res) => {
  res.json(category2);
});

app.get('/api/v2/admin/getshop', (req, res) => {
  res.json(shops);
});

app.get('/api/v2/admin/getvariations', (req, res) => {
  res.json(variations);
});

app.listen(5000, console.log('server running'));
