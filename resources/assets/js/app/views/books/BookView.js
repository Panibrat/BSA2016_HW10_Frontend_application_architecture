var Marionette = require('backbone.marionette');
var template = require("../../templates/book/book-one.hbs");

BookView = Marionette.ItemView.extend({
    template: template,
    tagName: 'tr',
    events: {
    },
    modelEvents: {
        'change': 'render'
    }

});

module.exports = BookView;