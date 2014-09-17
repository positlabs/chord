/*
    
    This is mainly to satisfy 3rd party module dependencies. You probably don't need to modify this file. 

    Use ES6 imports, instead.

*/

require.config({
    paths: {

        // used in Gruntfile requirejs task
    	"traceur-runtime":"../../node_modules/grunt-traceur/node_modules/traceur/bin/traceur-runtime",

        "jquery": "../../bower_components/jquery/dist/jquery",
        "underscore": "../../bower_components/underscore/underscore",
        // "backbone": "../../bower_components/backbone/backbone",
        // "LayoutManager": "node_modules/backbone.layoutmanager/backbone.layoutmanager",

    },

});
