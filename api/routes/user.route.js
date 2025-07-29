import express from 'express';
import { main, test } from '../controllers/user.controller.js';
const router = express.Router();

router.get('/test', test);
router.get('/', main);

export default router;