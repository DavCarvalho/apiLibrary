import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema(
	{
		id: { type: String },
		name: { 
			type: String, 
			required: [true, 'the name of author is mandatory'] 
		},
		nationality: { type: String }
	},
	{
		versionKey: false
	}
);

const authors = mongoose.model('autores', authorSchema);

export default authors;