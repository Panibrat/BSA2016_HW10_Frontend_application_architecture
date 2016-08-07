var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var template = require("../../templates/user/user-one-edit.hbs");

UserDetailEdit = Marionette.ItemView.extend({
    template: template,
    tagName: "form",
    events: {
        'submit': 'submitForm',
    },
    submitForm: function (e) {
        e.preventDefault();
        user = this.model;
        name =  $(e.currentTarget).find('input[id="name"]').val();
        lastname =  $(e.currentTarget).find('input[id="lastname"]').val();
        email =  $(e.currentTarget).find('input[id="email"]').val();
        user.set({
            name: name,
            lastname: lastname,
            email:  email,
        });
        if(!user.isValid()){
            alert(user.validationError);
            console.log("ERROR: " +user.validationError);
            return;
        }
        user.save();
        Backbone.history.navigate('/users', {
            trigger: true
        });
    },

});

module.exports = UserDetailEdit;