(function() {
    'use strict';

    angular.module('app',[
        
        'app.core',
        'app.widgets',

        /*
        * Feature Modules / areas
         */
        'app.dashboard',
        'app.clients',
        'app.projects'
    ]);

}());