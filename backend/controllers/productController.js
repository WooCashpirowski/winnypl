import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// Fetch all products
// route GET /api/products
// access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// Fetch single product
// route GET /api/products/:id
// access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Nie znaleziono produktu");
  }
});

// Delete product
// route DELETE /api/products/:id
// access Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Produkt usunięty" });
  } else {
    res.status(404);
    throw new Error("Nie znaleziono produktu");
  }
});

// Create product
// route POST /api/products/
// access Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "nazwa",
    price: 0,
    user: req.user._id,
    image: "/assets/img/sample.png",
    brand: "marka",
    category: "kategoria",
    subcategory: "podkategoria",
    countInStock: 0,
    numReviews: 0,
    description: "opis",
    featured: false,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// Update product
// route PUT /api/products/:id
// access Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    subcategory,
    countInStock,
    featured,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.image = image;
    product.description = description;
    product.brand = brand;
    product.category = category;
    product.subcategory = subcategory;
    product.countInStock = countInStock;
    product.featured = featured;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Nie znaleziono produktu");
  }
});

// Create product review
// route POST /api/products/:id/reviews
// access Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const isReviewed = product.reviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );
    if (isReviewed) {
      res.status(400);
      throw new Error("Produkt został już oceniony");
    }
    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };
    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;
    await product.save();
    res.status(201).json({ message: "Dodano ocenę" });
  } else {
    res.status(404);
    throw new Error("Nie znaleziono produktu");
  }
});

export {
  getProductById,
  getProducts,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
};
