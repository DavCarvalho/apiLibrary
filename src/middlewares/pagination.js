import IncorretRequest from '../errors/IncorretRequest.js';

async function pagination(req,res,next) {
  try {
    let {limit = 5, page = 1, ordination = '_id:1'} = req.params;

			let [fieldOrdering, order] = ordination.split(':');

			limit = parseInt(limit);
			page = parseInt(page);
			order = parseInt(order);

      const result = req.result;
			
			if(limit > 0 && page > 0) {
				const resultPage = await result.find()
          .sort({[fieldOrdering] : order})
          .skip((page - 1) * limit)
          .limit(limit)
          .exec();
				
				res.status(200).json(resultPage);
			} else {
				next(new IncorretRequest());
			}
  } catch(error) {
    next(error);
  }
}

export default pagination;

/*
let's take it from the search that we stored in req.result previously (const resultListBooks =  books.find(); in bookController                     req.result = resultListBooks;)

We can use Express middleware to carry out this process, as middleware stores code that runs in every request to our API or in certain requests. In this case, we want to run the pagination middleware only for certain requests.


All middleware has access to the request object. As we registered the result in this property called result in the book listing middleware, it is possible to retrieve this value in the pagination middleware.
*/