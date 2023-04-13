import NotFound from '../errors/NotFound.js';
import { authors } from '../models/index.js';

class AuthorController {
	static listAuthors = async (req, res) => {
		const resultAuthors = await authors.find();
		res.status(200).json(resultAuthors);
	};

	static listAuthorPerId = async(req, res,next) => {
		try {
			const id = req.params.id;
			const resultAuthors = await authors.findById(id);

			if(resultAuthors !== null) {
				res.status(200).send(resultAuthors);
			} else {
				next(new NotFound('Id not localized'));
			}
		}catch(error){																			
			next(error);
		}
		
	};

	static createAuthor= async (req, res,next) => {
		
		try {
			let author = new authors(req.body);

			const resultAuthor = await author.save();

			if(resultAuthor !== null) {
				res.status(201).send(resultAuthor.toJSON());
			} else {
				next(new NotFound('id not localizes'));
			}

			
		}catch(error) {
			next(error);
		}
		
	};

	static updateAuthor = async(req, res,next) => {
		try {
			const id = req.params.id;
			
			const resultAuthor = await authors.findByIdAndUpdate(id, {$set: req.body});

			if(resultAuthor !== null) {
				res.status(200).send({message: 'Livro cadastrado com sucesso'});
			}else {
				next(new NotFound('id not localizes'));
			}

		}catch(error) {
			next(error);
		}
	};

	static deleteAuthor = async(req, res, next) => {
		try {
			const id = req.params.id;

			const resultAuthor = await authors.findByIdAndDelete(id);

			if(resultAuthor !== null) {
				res.status(200).send({message: 'Book deleted with sucess'});
			} else {
				next(new NotFound('id not localizes'));
			}
		}catch(error) {
			next(error);
		}
	};
}

export default AuthorController;