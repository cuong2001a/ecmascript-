import express from 'express'
import { requireSignin, isAuth, isAdmin } from '../controller/auth';

import { create, edit, findOneCategory, list, remove } from '../controller/category'
import { findUserByID } from "../controller/user";
const router = express.Router();

router.post('/category/create', requireSignin, isAuth, isAdmin, create)
router.get('/category', list)
router.get('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, findOneCategory);
router.delete('/category/:categoryId', requireSignin, isAuth, isAdmin, remove)
router.put('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, edit);
router.param("userId", findUserByID)
module.exports = router;