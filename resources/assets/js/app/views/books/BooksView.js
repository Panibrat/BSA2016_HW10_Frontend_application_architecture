var Marionette = require('backbone.marionette');
var template = require("../../templates/book/template-header-books.hbs");
var BookView = require('./BookView');

BooksView = Marionette.CompositeView.extend({
    template: template,
    childView: BookView,
    tagName: 'table',
    childViewContainer: 'tbody',
    className: 'table',
    modelEvents: {
        'change': 'render'
    },
    collectionEvents: {
        'change': 'render'
    }
});


module.exports = BooksView;