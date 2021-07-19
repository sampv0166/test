import express from 'express';
import currentUser from './data/CurrentUser.js';
import category from './data/Category.js';
import subcategory from './data/SubCategory.js';
import products from './data/Products.js';

const app = express();
app.use(express.json());

app.get('/api/v2/public/myprofile', (req, res) => {
  res.json(currentUser);
});

app.post('/api/v2/public/login', (req, res) => {
  res.json('ok u can login');
});

app.post('/api/v2/admin/product', (req, res) => {
  res.json('product added');
});

app.get('/api/v2/admin/getproducts', (req, res) => {
  res.json(products);
});

app.listen(5000, console.log('server running'));
