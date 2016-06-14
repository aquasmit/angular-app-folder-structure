(function(){

    var dashboard = function(){

        var vm = this;

        vm.message = 'Welcome to Dashboard';

    };

    angular
        .module('app.dashboard')
            .controller('Dashboard',dashboard);



}());