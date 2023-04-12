import express from "express";
import BookController from "../controllers/bookController.js";

const router = express.Router();

router 
  .get('/books', BookController.listBooks)
  .get('/books/search', BookController.listBookPerCompany)
  .get('/books/:id', BookController.listBookPerId)
  .post('/books', BookController.createBook)
  .put('/books/:id',BookController.updateBook)
  .delete('/books/:id', BookController.deleteBook)

export default router;