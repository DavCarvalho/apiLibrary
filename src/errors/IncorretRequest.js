import ErrorBase from './ErrorBase.js';



class IncorretRequest extends ErrorBase {
  constructor(message='one or more data provided is incorrect') {
    super(message, 400);
  }
}

export default IncorretRequest;
/*
more specific errors from the handlerErrors.js file. In this case, they are the CastError errors, which is the incorrect request error, and the ValidationError, which is the validation error.
*/