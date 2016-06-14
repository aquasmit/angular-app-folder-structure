(function(){
    'use strict';

    var routes = function($stateProvider,$urlRouterProvider){

        $stateProvider
            .state('projects',{
                url : '/projects',
                abstract : true,
                template: '<ui-view />'
            })

            .state('projects.list',{
                url : '/list',
                templateUrl : 'app/projects/projects.html',
                controller :  'Projects as vm',
                cache : false
            })
    };

    routes.$inject = ['$stateProvider','$urlRouterProvider'];

    angular
        .module('app.projects')
        .config(routes);

}());