import mongoose from 'mongoose';

mongoose.Schema.Types.String.set('validate', {
  validator: (value) => value !== '',
  message: ({path}) => `The fild  ${path} is empty` 
});

/*
First, to do global validation in mongoose, you need to define the validator configuration before building the author and book models.
(index.js)

how do we actually apply the global validator?
mongoose.Schema.Types.String.set();


As the first parameter the name of the property we want to define.
the second parameter of the set() method will be the value of the validate property.

The value will be an object with a property called validator, which will be the custom validation function
*/