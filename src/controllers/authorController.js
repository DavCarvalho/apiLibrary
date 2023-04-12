import mongoose from 'mongoose';
import authors from '../models/Author.js';

class AuthorController {
	static listAuthors = async (req, res) => {
		const resultAuthors = await authors.find();
		res.status(200).json(resultAuthors);
	};

	static listAuthorPerId = async(req, res) => {
		try {
			const id = req.params.id;
			const resultAuthors = await authors.findById(id);

			if(resultAuthors !== null) {
				res.status(200).send(resultAuthors);
			} else {
				res.status(400).send({message: 'id not localized'});
			}
		}catch(error){																			
			if(error instanceof mongoose.Error.CastError){ //we passed an invalid string and it doesn't match what mongoose expected
																									
				res.status(400).send({message: 'one or more data provided is incorrect'});
			} else {
				res.status(500).send({message: 'internal server error'});
			}
		}
		
	};
	//The CastError is an internal Mongoose error that we can access and check if the error we get is an instance of CastError. 
	static createAuthor= async (req, res) => {
		
		try {
			let author = new authors(req.body);

			const resultAuthor = await author.save();
			res.status(201).send(resultAuthor.toJSON());
		}catch(error) {
			res.status(500).send({message: `${error.message} = failed create a new author`});
		}
		
	};

	static updateAuthor = async(req, res) => {
		try {
			const id = req.params.id; 

			await authors.findByIdAndUpdate(id, {$set: req.body});
			res.status(200).send({message: 'Livro cadastrado com sucesso'});
		}catch(error) {
			res.status(500).send(`${error.message} - failed update book`);
		}
	};

	static deleteAuthor = async(req, res) => {
		try {
			const id = req.params.id;

			await authors.findByIdAndDelete(id);
			res.status(200).send({message: 'Book deleted with sucess'});
		}catch(error) {
			res.status(500).send({message: `${error.message} failed delete book`});
		}
	};
}

export default AuthorController;