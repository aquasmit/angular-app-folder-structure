(function () {
    'use strict';

    var RepositoryClient = function(){

        return {
            create: createRepo // factory function to create the repository
        };

        function createRepo(){
            var repo = {
                getAll: getAll
            };

            return repo;

            function getAll(){
                var clients  = [
                    {firstname:'John',lastname:'papa'},
                    {firstname:'dan',lastname:'whalin'},
                    {firstname:'bob',lastname:'alice'},
                ];
                return clients;

            }

        }



    };

    //RepositoryClient.$inject = [];

    angular
        .module('app')
            .factory('repository.client', RepositoryClient);
}());