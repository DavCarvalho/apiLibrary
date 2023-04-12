import mongoose from "mongoose";

mongoose.connect("mongodb+srv://dawwi:davi2003@node-express.hjt0uqu.mongodb.net/node-alura");

let db = mongoose.connection;

mongoose.set('strictQuery', true);

export default db
