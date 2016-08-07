var Backbone = require('backbone');
var UserModel = require('../models/UserModel');
UsersCollection = Backbone.Collection.extend({
    model: UserModel,
    url: '/users'
});

module.exports = UsersCollection;