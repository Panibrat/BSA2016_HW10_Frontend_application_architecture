var Marionette = require('backbone.marionette');
var template = require("../../templates/user/user-one.hbs");

UserView = Marionette.ItemView.extend({
    template: template,
    tagName: 'tr',
    events: {
    },
    modelEvents: {
        'change': 'render'
    }

});

module.exports = UserView;