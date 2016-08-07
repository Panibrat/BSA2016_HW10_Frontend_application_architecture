var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var myRouter = require('./routers/myRouter');


App = new Backbone.Marionette.Application();

App.addRegions({
    content: "#container",
    mainRegion: "#main-region"
});

App.addInitializer(function(options){
    Backbone.history.start();
    new myRouter();
});

$(document).ready(function(){
    App.start();
});

module.exports = App;