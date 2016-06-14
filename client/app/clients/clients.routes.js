(function(){
    'use strict';

    var routes = function($stateProvider,$urlRouterProvider){
        
        $stateProvider
           .state('clients',{
                url : '/clients',
                abstract : true,
                template: '<ui-view />'
            })

            .state('clients.list',{
                url : '/list',
                templateUrl : 'app/clients/clients.html',
                controller :  'Clients as vm',
                cache : false
            })
    };

    routes.$inject = ['$stateProvider','$urlRouterProvider'];

    angular
        .module('app.clients')
        .config(routes);

}());