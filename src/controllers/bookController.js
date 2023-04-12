import books from "../models/Books.js";

class BookController {
  static listBooks = (req, res) => {
    books.find()
     .populate('author')
     .exec((err, books) => {
      res.status(200).json(books);
    })
  }

  static listBookPerId = (req, res) => {
    const id = req.params.id;

    books.findById(id) 
    .populate('author', 'name')
    .exec((err, books) => {
      if(err) {
        res.status(400).send({message: `${err.message} id not localized`})
      } else {
        res.status(200).send(books)
      }
    })
  }

  static createBook = (req, res) => {
    let book = new books(req.body);

    book.save(err => {
      if(err) {
        res.status(500).send({message: `${err.message} = failed create a new book`});
      } else {
        res.status(201).send(book.toJSON());
      }
    })
  }

  static updateBook = (req, res) => {
    const id = req.params.id; 

    books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err){
        res.status(200).send({message: `Livro cadastrado com sucesso`})
      } else {
        res.status(500).send(`${err.message} - failed update book`)
      }
    })
  }

  static deleteBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndDelete(id, (err) => {
      if(!err) {
        res.status(200).send({message: "Book deleted with sucess"})
      } else {
        res.status(500).send({message: `${err.message} failed delete book`})
      }
    })
  }

  static listBookPerCompany = (req, res) => {
    const company = req.query.company

    books.find({'company': company}, {}, (err, books) => {
      res.status(200).send(books)
    })
  }
}


export default BookController;