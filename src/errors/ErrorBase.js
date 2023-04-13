
class ErrorBase extends Error {
  constructor(message = 'Internal server error', status = 500) {
    super();
    this.message = message;
    this.status = status;
  }

  sendAnswer(res){
    res.status(this.status).send({
      message: this.message,
      status: this.status
    });
  }
}

export default ErrorBase;

/*
Refactoring the error handler
This will help us to standardize the error messages we send to the front-end, in addition to reducing the error handler code.
*/