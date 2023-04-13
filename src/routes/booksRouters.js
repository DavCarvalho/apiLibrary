import express from 'express';
import BookController from '../controllers/bookController.js';
import pagination from '../middlewares/pagination.js';

const router = express.Router();

router 
	.get('/books', BookController.listBooks, pagination)
	.get('/books/search', BookController.listBookPerFilter, pagination)
	.get('/books/:id', BookController.listBookPerId)
	.post('/books', BookController.createBook)
	.put('/books/:id',BookController.updateBook)
	.delete('/books/:id', BookController.deleteBook);

export default router;