var Backbone = require('backbone');
var BookModel = require('../models/BookModel');
BooksCollection = Backbone.Collection.extend({
    model: BookModel,
    url: '/books'
});

module.exports = BooksCollection;
