var Backbone = require('backbone');

UserModel = Backbone.Model.extend({
    defaults: {
        name: '',
        lastname: '',
        email: ''
    },
    urlRoot: '/users'
});

module.exports = UserModel;