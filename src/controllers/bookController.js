import books from '../models/Books.js';

class BookController {
	static listBooks = async(req, res) => {
		try {
			const resultListBooks = await books.find().populate('author').exec();
			
			res.status(200).json(resultListBooks);
		}catch(error) {
			res.status(500).json({ message: 'Erro interno no servidor' });
		}
	};

	static listBookPerId = async (req, res) => {
		try {
			const id = req.params.id;

      const resultListBook = await books.findById(id) .populate('author', 'name').exec();
			res.status(200).send(resultListBook);
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

	static updateBook = async (req, res) => {
		try {
			const id = req.params.id; 

			books.findByIdAndUpdate(id, {$set: req.body});
			res.status(200).send({message: 'Livro cadastrado com sucesso'});
		} catch(error) {
			res.status(500).send(`${error.message} - failed update book`);
		}	
	};

	static deleteBook = async(req, res) => {
		try {
			const id = req.params.id;

			await books.findByIdAndDelete(id);
			res.status(200).send({message: 'Book deleted with sucess'});
		}catch(error) {
			res.status(500).send({message: `${error.message} failed delete book`});
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