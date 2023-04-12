import mongoose from 'mongoose';

mongoose.connect(process.env.STRING_CONNECTION_DB);

let db = mongoose.connection;

mongoose.set('strictQuery', true);

export default db;
