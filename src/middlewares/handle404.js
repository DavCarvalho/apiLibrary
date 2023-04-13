import NotFound from '../errors/NotFound.js';

// eslint-disable-next-line no-unused-vars
function handle404(req,res,next) {
  const error404= new NotFound();
  next(error404);
}

export default handle404;



/*
Express checks the passed URL and HTTP verb sequentially (ie, from first to last) whenever we make a request to the API, looking for matches to some of the already registered routes and verbs.
If none of these registered routes match, Express will return a 404 HTML page by default.

In other words, Express doesn't throw an error. This is exactly why our error handler doesn't catch any errors and we have a default behavior of an Express 404 page.

That is, this page needs to have a special treatment

Remember that when we execute the next() function passing an error as a parameter, it will stop directly in our handleError. That's what we want to do: shift the responsibility to that middleware.
*/