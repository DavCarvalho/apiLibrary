
import NotFound from '../errors/NotFound.js';
import { authors, books } from '../models/index.js';

class BookController {
	static listBooks = async(req, res, next) => {
		try {
			const resultListBooks =  books.find(); //the await keyword before books.find(), as we don't want the search to be performed now in the 		database. Our goal is to store it and then send it to the pagination middleware
			
			req.result = resultListBooks;

			next();
			
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
				next(new NotFound('id book not localized'));
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
				next(new NotFound('id book not localized'));
			}
			
		}catch(error) {
			next(error);
		}
	};

	static listBookPerFilter = async (req, res,next) => {
		try {
			
			const search = await processSearch(req.query);

			if(search !== null) {
				const resultBooks = await books.find(search).populate('author');
				
				req.result = resultBooks;

				next();
			} else {
				res.status(200).send([]);
			}
		}catch(error) {
			next(error);
		}

	async function processSearch(params) {
			const {company, title, minPages, maxPages, nameAuthor} = params;

			let search = {};

			if(company) search.company = company;
			if(title) search.title =  {$regex: title, $options: 'i'}; //I or i

			if(minPages || maxPages) {
				search.numberOfPages = {};
			}
			// gte = Greater Than or Equal
			if(minPages) search.numberOfPages.$gte = minPages;
			// lte = Less Than or Equal
			if(maxPages) search.numberOfPages.$lte = maxPages;

			if(nameAuthor) {
				const author = await authors.findOne({name: nameAuthor});

			if(author !== null) {
				search.author = author._id;
			} else {
				search = null;
			}
		}

		return search;
	}
};

	/*
	This syntax of placing several properties in the same object will make us look for a document that meets all these fields. The book must have the same publisher and title sought.

	now we want to be able to filter only by title or publisher

	for this search to be more dynamic we can const regex = new RegExp(titulo, "i");
	or for moongose
	*/
}


export default BookController;

/*
*** pagination When a person requests all registered books, we can only return the first 10 results. If she wants to consult the next 10 elements, we will make a new request to retrieve the next 10 books.
we will use the skip() method to indicate how many books we want to skip.
For example, if the person requests page 2, we'll skip the first 5 books. If she requests page 3, we skip 10 books, and so on.
After the skip(), we will apply the limit() method, passing the limit received as a search parameter. Thus, we will limit the amount of books displayed on the screen. Without it, we'd just skip the first few elements and show the rest of the results all the way down:
-------------------------------------------------------------------------------------------------------------------------------------------------

The **`populate()`** method in Mongoose is used to load references (or nested references) from documents into other collections. When we use **`populate()`** we can specify a reference field in a model and Mongoose will fetch the data from the related document and add it to the main document.

For example, in the provided code, the **`populate('author')`** method is used to load the author data of the book. This means that instead of just getting the author ID from the query result, Mongoose will fetch the author details and add those details to the result. The result will include the full author object instead of just the ID.
*/