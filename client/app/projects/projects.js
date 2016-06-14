(function(){

    'use strict';

    var projects = function(datacontext){

        var vm = this;

        vm.head =  'Project List';
        vm.projects = [];
        function init(){

            vm.projects =  datacontext.project.getAll();

        }

        init();

    };

    projects.$inject = ['datacontext'];

    angular
        .module('app.projects')
        .controller('Projects',projects);

}());