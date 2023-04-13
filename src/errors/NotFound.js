/* eslint-disable no-irregular-whitespace */

import ErrorBase from './ErrorBase.js';


class NotFound extends ErrorBase {
  constructor(){
    super('Page not found', 404);
  }
}

export default NotFound;

/*
To make this error handling more centralized, let's make the handler404 middleware forward the error to the error handlerErros. After all, in this file the treatments are already standardized and centralized.
*/