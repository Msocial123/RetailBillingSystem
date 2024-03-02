/*const express = require('express');
const mongoose = require('mongoose');
 
const app = express();
const port = 3000;
 
mongoose.connect('mongodb://localhost:27017/retail', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
 
const Product = mongoose.model('Product', {
  name: String,
  quantity: Number,
  cost: Number,
  category: String,
  brand: String
});
 
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
 
app.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.render('index', { products: products });
  } catch (err) {
    console.error('Error fetching products:', err);
    res.send('Error fetching products');
  }
});
 
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.render('products', { products: products });
  } catch (err) {
    console.error('Error fetching products:', err);
    res.send('Error fetching products');
  }
});
 
app.get('/totalCost', async (req, res) => {
  try {
    const products = await Product.find({});
    let totalCost = 0;
    products.forEach(product => {
      totalCost += product.quantity * product.cost;
    });
    res.send(`Total Cost: ${totalCost}`);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.send('Error fetching products');
  }
});
 
app.post('/addProduct', async (req, res) => {
    const { name, quantity, cost, category, brand } = req.body;
    const product = new Product({
      name: name,
      quantity: parseInt(quantity),
      cost: parseFloat(cost),
      category: category,
      brand: brand
    });
    try {
      await product.save();
      console.log('Product added successfully.');
      res.redirect('/success');
    } catch (error) {
      console.error('Error adding product:', error);
      res.send('Error adding product');
    }
  });
 
  app.get('/success', (req, res) => {
    res.render('success');
  });
 
 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});*/
/*const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/retail', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Product = mongoose.model('Product', {
  name: String,
  quantity: Number,
  cost: Number,
  category: String,
  brand: String
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Retry function with exponential backoff
async function retry(fn, retries = 3, delay = 1000) {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) throw error;
    await new Promise(resolve => setTimeout(resolve, delay));
    return retry(fn, retries - 1, delay * 2);
  }
}

app.get('/', async (req, res) => {
  try {
    const products = await retry(() => Product.find({}).maxTimeMS(30000)); // Increase timeout to 30 seconds
    res.render('index', { products: products });
  } catch (err) {
    console.error('Error fetching products:', err);
    res.send('Error fetching products');
  }
});

app.get('/products', async (req, res) => {
  try {
    const products = await retry(() => Product.find({}).maxTimeMS(30000)); // Increase timeout to 30 seconds
    res.render('products', { products: products });
  } catch (err) {
    console.error('Error fetching products:', err);
    res.send('Error fetching products');
  }
});

app.get('/totalCost', async (req, res) => {
  try {
    const products = await retry(() => Product.find({}).maxTimeMS(30000)); // Increase timeout to 30 seconds
    let totalCost = 0;
    products.forEach(product => {
      totalCost += product.quantity * product.cost;
    });
    res.send(`Total Cost: ${totalCost}`);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.send('Error fetching products');
  }
});

app.post('/addProduct', async (req, res) => {
  const { name, quantity, cost, category, brand } = req.body;
  const product = new Product({
    name: name,
    quantity: parseInt(quantity),
    cost: parseFloat(cost),
    category: category,
    brand: brand
  });
  try {
    await product.save();
    console.log('Product added successfully.');
    res.redirect('/success');
  } catch (error) {
    console.error('Error adding product:', error);
    res.send('Error adding product');
  }
});

app.get('/success', (req, res) => {
  res.render('success');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});*/
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb://mongo:27017/retail', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(error => {
  console.error('MongoDB connection error:', error);
});

const Product = mongoose.model('Product', {
  name: String,
  quantity: Number,
  cost: Number,
  category: String,
  brand: String
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.render('index', { products: products });
  } catch (err) {
    console.error('Error fetching products:', err);
    res.send('Error fetching products');
  }
});

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.render('products', { products: products });
  } catch (err) {
    console.error('Error fetching products:', err);
    res.send('Error fetching products');
  }
});

app.get('/totalCost', async (req, res) => {
  try {
    const products = await Product.find({});
    let totalCost = 0;
    products.forEach(product => {
      totalCost += product.quantity * product.cost;
    });
    res.send(`Total Cost: ${totalCost}`);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.send('Error fetching products');
  }
});

app.post('/addProduct', async (req, res) => {
  const { name, quantity, cost, category, brand } = req.body;
  const product = new Product({
    name: name,
    quantity: parseInt(quantity),
    cost: parseFloat(cost),
    category: category,
    brand: brand
  });
  try {
    await product.save();
    console.log('Product added successfully.', product);
    res.redirect('/success');
  } catch (error) {
    console.error('Error adding product:', error);
    res.send('Error adding product');
  }
});

app.get('/success', (req, res) => {
  res.render('success');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});