import express from 'express'
const router = express.Router();

import { signin, signout, signup } from '../controller/auth';
router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signout', signout)
module.exports = router;