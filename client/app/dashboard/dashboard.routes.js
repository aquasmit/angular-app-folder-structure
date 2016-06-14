(function(){

    var routes = function($stateProvider,$urlRouterProvider){

        $stateProvider
            .state('dashboard',{
                url : '/dashboard',
                //abstract : true,
                templateUrl : 'app/dashboard/dashboard.html',
                controller :  'Dashboard as vm',
                cache : false
            });

        //$urlRouterProvider.otherwise('/');
    };

    routes.$inject = ['$stateProvider','$urlRouterProvider'];

    angular
        .module('app.dashboard')
        .config(routes);

}());