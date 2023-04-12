import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    id: {type: String},
    name: {type: String, required: true},
    nacionality: {type: String}
  }, {
    versionKey: false
  }
)

export default authorSchema;