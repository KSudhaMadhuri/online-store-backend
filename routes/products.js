const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/', async (req, res) => {
  try {
    console.log('Fetching all products...');
    const products = await Product.find();
    console.log(`Found ${products.length} products`);
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ 
      message: 'Error fetching products', 
      error: error.message 
    });
  }
});

// POST new product
router.post('/', async (req, res) => {
  try {
    console.log('Creating new product:', req.body);
    
    const { name, description, price, category, image, stock } = req.body;
    
    // Validation
    if (!name || !price) {
      return res.status(400).json({ 
        message: 'Name and price are required' 
      });
    }

    const product = new Product({
      name,
      description,
      price: parseFloat(price),
      category,
      image,
      stock: parseInt(stock) || 0
    });

    const savedProduct = await product.save();
    console.log('Product created successfully:', savedProduct._id);
    
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(400).json({ 
      message: 'Error creating product', 
      error: error.message 
    });
  }
});

// DELETE product by ID
router.delete('/:id', async (req, res) => {
  try {
    console.log('Deleting product:', req.params.id);
    
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    console.log('Product deleted successfully:', deletedProduct._id);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ 
      message: 'Error deleting product', 
      error: error.message 
    });
  }
});

module.exports = router;


