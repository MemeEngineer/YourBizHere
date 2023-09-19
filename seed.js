require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Breakfast', sortOrder:10},
    {name: 'Desserts', sortOrder: 20},
    {name: 'Diner', sortOrder:30},
    {name: 'Drinks', sortOrder: 40},
    {name: 'Italian', sortOrder: 50},
    {name: 'Mexican', sortOrder: 60},
    {name: 'Sandwiches', sortOrder: 70},
    {name: 'Seafood', sortOrder: 80},
    {name: 'Sides', sortOrder: 90},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Hamburger', emoji: '🍔', category: categories[2], price: 5.95},
    {name: 'Noodles', emoji: '🍜',  category: categories[2], price: 11.95},
    {name: 'Fried Rice', emoji: '🍘', category: categories[2], price: 9.95},
    {name: 'Jollof Rice', emoji: '🍛', category: categories[2], price: 9.95},
    {name: 'Veggy Brochette', emoji: '🍢', category: categories[8], price: 3.95},
    {name: 'Sushi', emoji: '🍣', category: categories[2], price: 5.95},
    {name: 'Beef', emoji: '🍖', category: categories[2], price: 9.95},
    {name: 'Croissant', emoji: '🥐', category: categories[0], price: 5.95},
    {name: 'Fried Egg', emoji: '🍳', category: categories[0], price: 5.95},
    {name: 'Doughnut', emoji: '🍩', category: categories[0], price: 5.95},
    {name: 'Turkey Sandwich', emoji: '🥪', category: categories[0], price: 6.95},
    {name: 'Hot Dog', emoji: '🌭', category: categories[2], price: 3.95},
    {name: 'Crab Plate', emoji: '🦀', category: categories[7], price: 14.95},
    {name: 'Soft drink', emoji:'🥤', category: categories[3], price: 2.95},
    {name: 'Fried Shrimp', emoji: '🍤', category: categories[7], price: 13.95},
    {name: 'Whole Lobster', emoji: '🦞', category: categories[7], price: 25.95},
    {name: 'Taco', emoji: '🌮', category: categories[5], price: 1.95},
    {name: 'Burrito', emoji: '🌯', category: categories[5], price: 4.95},
    {name: 'Pizza Slice', emoji: '🍕', category: categories[4], price: 3.95},
    {name: 'Spaghetti', emoji: '🍝', category: categories[4], price: 7.95},
    {name: 'Garlic Bread', emoji: '🍞', category: categories[4], price: 1.95},
    {name: 'French Fries', emoji: '🍟', category: categories[8], price: 2.95},
    {name: 'Popcorn', emoji: '🍿', category: categories[8], price: 2.95},
    {name: 'French Fries', emoji: '🥨', category: categories[2], price: 2.95},
    {name: 'Sweet Potato', emoji: '🍠', category: categories[8], price: 2.95},
    {name: 'Green Salad', emoji: '🥗', category: categories[4], price: 3.95},
    {name: 'Ice Cream', emoji: '🍨', category: categories[1], price: 1.95},
    {name: 'Cup Cake', emoji: '🧁', category: categories[1], price: 0.95},
    {name: 'Custard', emoji: '🍮', category: categories[1], price: 2.95},
    {name: 'Strawberry Shortcake', emoji: '🍰', category: categories[1], price: 3.95},
    {name: 'Stuffed Flatbread', emoji: '🥙', category: categories[5], price: 9.95},
    {name: 'Milk', emoji: '🥛', category: categories[3], price: 0.95},
    {name: 'Coffee', emoji: '☕', category: categories[3], price: 0.95},
    {name: 'Mai Tai', emoji: '🍹', category: categories[3], price: 8.95},
    {name: 'Beer', emoji: '🍺', category: categories[3], price: 3.95},
    {name: 'Wine', emoji: '🍷', category: categories[3], price: 7.95},
    {name: 'Fried Chicken', emoji: '🍗', category: categories[2], price: 9.95},
    {name: 'Pancakes', emoji: '🥞', category: categories[0], price: 7.95},
    {name: 'Bacon', emoji: '🥓', category: categories[0], price: 3.95},
    {name: 'Tea', emoji: '🍵', category: categories[3], price: 2.95},
  ]);

  console.log(items)

  process.exit();

})();