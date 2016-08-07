var Marionette = require('backbone.marionette');
var template = require("../../templates/user/user-one-detail.hbs");

UserDetailView = Marionette.ItemView.extend({
    template: template,
});


module.exports = UserDetailView;