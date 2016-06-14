(function(){

    'use strict';

    var clients = function(datacontext){

        var vm = this;

        vm.head =  'Client List';
        vm.clients = [];
        function init(){
            
            vm.clients =  datacontext.client.getAll();

        }

        init();

    };

    clients.$inject = ['datacontext'];

    angular
        .module('app.clients')
            .controller('Clients',clients);

}());