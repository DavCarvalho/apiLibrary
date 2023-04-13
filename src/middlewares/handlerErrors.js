/* eslint-disable no-irregular-whitespace */
import mongoose from 'mongoose';
import ErrorBase from '../errors/ErrorBase.js';
import IncorretRequest from '../errors/IncorretRequest.js';
import ValidationError from '../errors/ValidationError.js';
import NotFound from '../errors/NotFound.js';

// eslint-disable-next-line no-unused-vars
function handlerErrors(error,req, res, next) {
  if(error instanceof mongoose.Error.CastError){//we passed an invalid string and it doesn't match what mongoose expected 

    new IncorretRequest().sendAnswer(res);
  } 
  else if(error instanceof mongoose.Error.ValidationError){
    new ValidationError().sendAnswer(res);
  } 
  else if(error instanceof NotFound) {
      error.sendAnswer(res);
  }
  else {
    new ErrorBase().sendAnswer(res);//es.status(500).send({message: 'internal server error'});
  }
}

export default handlerErrors;

	//The CastError is an internal Mongoose error that we can access and check if the error we get is an instance of CastError. 

  