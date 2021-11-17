import express from "express"
import { requireSignin, isAuth, isAdmin } from "../controller/auth";
import { edit, list, create, remove, findOneProduct, sortPriceAscending, sortPriceDecrease, search, findByCategoryId } from "../controller/products";
import { findUserByID } from "../controller/user";

const router = express.Router();

router.get('/products', list)
router.post('/products/create/:userId', requireSignin, isAuth, isAdmin, create)
router.get('/products/:productId/:userId', findOneProduct)
// router.get('products/:productId', read)
router.delete('/products/:productId', requireSignin, isAuth, isAdmin, remove)
// router.param('/productId', productById)
router.put("/products/:productId/:userId", requireSignin, isAuth, isAdmin, edit)
router.get("/products/search", requireSignin, isAuth, isAdmin, search);
router.get('/products/:categoryId',findByCategoryId)
// router.get("/products/sortPrice", sortPriceDecrease);
router.param("userId", findUserByID);

// router.param("categoryId",cat)
module.exports = router;