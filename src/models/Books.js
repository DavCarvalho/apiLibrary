import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
	id: {type: String},
	title: {
		type: String , 
		required: [true, 'the title of book is mandatory']
	},
	author: {
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'authors' ,
		required: [true, 'the author is mandatory']
	},
	company: {
		type: String, 
		required: [true, 'the company is mandatory']
	},
	numberPages: {
		type: Number,
		validate: {
			validator: (valor) => {
				return valor >= 10 && valor <= 5000;
			},
			message: 'The number of pages must be between 10 and 5000. Value provided: {VALUE}'
		}
	}
});

const books = mongoose.model('books', bookSchema);

export default books;

