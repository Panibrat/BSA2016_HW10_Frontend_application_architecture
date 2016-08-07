var Marionette = require('backbone.marionette');
var template = require("../../templates/book/template-header-usersbooks.hbs");
var BookView = require("BookView");



UsersBooksView = Marionette.CompositeView.extend({
    template: template,
    childView: BookView,
    tagName: 'table',
    childViewContainer: 'tbody',
    className: 'table',
});

module.exports = UsersBooksView;