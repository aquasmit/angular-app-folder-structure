(function(){

    var routes = function($stateProvider,$urlRouterProvider){

        $stateProvider
            .state('pm',{
                url : '/',
                abstract : true,
                template : ''
            });
    };

    routes.$inject = ['$stateProvider','$urlRouterProvider'];

    angular
        .module('app')
            .config(routes);

}());