var Marionette = require('backbone.marionette');
var template = require("../../templates/book/book-one-detail.hbs");


BookDetailView = Marionette.ItemView.extend({
    template: template,
    //tagName: 'tr',
    events: {
    },
    modelEvents: {
        'change': 'render'
    }

});

module.exports = BookDetailView;