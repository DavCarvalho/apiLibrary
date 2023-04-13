import NotFound from '../errors/NotFound.js';
import { books } from '../models/index.js';

class BookController {
	static listBooks = async(req, res, next) => {
		try {
			const resultListBooks = await books.find().populate('author').exec();
			
			res.status(200).json(resultListBooks);
		}catch(error) {
			next(error);
		}
	};

	static listBookPerId = async (req, res,next) => {
		try {
			const id = req.params.id;

      const resultListBook = await books.findById(id) .populate('author', 'name').exec();

			if(resultListBook !== null) {
				res.status(200).send(resultListBook);
			} else {
				next(new NotFound('id book not localized'));
			}
		} catch(error) {
			res.status(400).send({message: `${error.message} id not localized`});
		}
		
	};

	static createBook = async (req, res) => {
		try {
			let book = new books(req.body);

			const resultBook = await book.save();
			res.status(201).send(resultBook.toJSON());
		}catch(error) {
			res.status(500).send({message: `${error.message} = failed create a new book`});
		}
	};

	static updateBook = async (req, res, next) => {
		try {
			const id = req.params.id; 

			const resultLBook = await books.findByIdAndUpdate(id, {$set: req.body});

			if(resultLBook !== null) {
				res.status(200).send({message: 'Livro cadastrado com sucesso'});
			} else {
				next(new NotFound('id not localized'));
			}
		} catch(error) {
			next(error);
		}	
	};

	static deleteBook = async(req, res, next) => {
		try {
			const id = req.params.id;

			const resultBook =	await books.findByIdAndDelete(id);

			if(resultBook !== null) {
				res.status(200).send({message: 'Book deleted with sucess'});
			} else {
				next(new NotFound('id not localized'));
			}
			
		}catch(error) {
			next(error);
		}
	};

	static listBookPerCompany = async (req, res) => {
		try {
			const company = req.query.company;

			const resultBooks = await books.find({'company': company}, {});
			res.status(200).send(resultBooks);
		}catch(error) {
			res.status(400).send({message: `${error.message}  Company not found`});
		}
	};
}


export default BookController;