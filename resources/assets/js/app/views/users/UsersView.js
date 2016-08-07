var Marionette = require('backbone.marionette');
var template = require("../../templates/user/template-header-users.hbs");
var UserView = require("./UserView");

UsersView = Marionette.CompositeView.extend({
    template: template,
    childView: UserView,
    tagName: 'table',
    childViewContainer: 'tbody',
    className: 'table',
});




module.exports = UsersView;