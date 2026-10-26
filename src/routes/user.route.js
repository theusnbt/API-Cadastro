import express from 'express';
import controller from '../controllers/user.controller.js';

const router = express.Router();

router.post('/', controller.create);
router.get('/:id', controller.findById);
router.get('/', controller.readAll);

export default router;