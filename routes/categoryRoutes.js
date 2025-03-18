import express from "express"
import { createCategory, deleteCategory, getAllCategory, getCategory, updateCategory } from "../controllers/categoryController.js"

const router = express.Router()

router.post('/create-category', createCategory)

router.get('/all-category', getAllCategory);

router.get('/category/:id', getCategory);

router.put('/category/:id', updateCategory);

router.delete('/category/:id', deleteCategory);

export default router