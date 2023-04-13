/* eslint-disable no-irregular-whitespace */
import IncorretRequest from './IncorretRequest.js';


class ValidationError extends IncorretRequest {
  constructor(error) {
    const errorMessage = Object.values(error.errors).map(erro => erro.message).join('; '); //JavaScript's own method to iterate over objects.
    
    super({message: `The following errors were found ${errorMessage}`});
  }
}

export default ValidationError;

/*
this class will inherit from the IncorretRequest class, because the validation error has the same status as the incorrect request, 400. In fact, an incorrect request was made when a validation error occurs.
*/
//validation error
  /*
  we want to catch all possible errors that appear in this object that we print and format the error message in a more interesting way for the Front-End.
  erro.errors - precisely the properties  whose values ​are the errors: Object.values(erro.errors).

 Object.values(error.errors) returns an array of values of all the properties of the errors object of mongoose.Error.ValidationError. Each property of this object represents a validation error that has occurred while validating the user input, and its value is an object containing information about the error, such as the error message.

  the value of ValidationError is  Path `nome` is required
  */