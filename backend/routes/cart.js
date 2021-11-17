import express from 'express'
import { addToCart, listToCart } from '../controller/cart'
const router = express.Router();
router.get('/cart',listToCart);
router.post('/cart',addToCart);
module.exports = router;