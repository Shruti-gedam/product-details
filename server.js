const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const products = [
  { id: '1', name: 'Vintage typewriter', description: 'A classic mechanical typewriter in working condition.' },
  { id: '2', name: 'Fresh roasted coffee beans', description: 'Single-origin organic coffee beans from Colombia.' }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

app.listen(port, () => {
  console.log(`Product details service listening on port ${port}`);
});
