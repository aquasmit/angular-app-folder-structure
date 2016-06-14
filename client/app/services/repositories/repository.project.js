(function () {
    'use strict';

    var RepositoryProject = function(){

        return {
            create: createRepo // factory function to create the repository
        };

        function createRepo(){
            var repo = {
                getAll: getAll
            };

            return repo;

            function getAll(){
                var projects  = [
                    {title:'BobTheBuilder',started_on:'June 11, 1995'},
                    {title:'Pokeymon',started_on:'June 12, 1985'},
                    {title:'Chhota Bheem',started_on:'May 18 2012'},
                ];
                return projects;

            }

        }



    };

    //RepositoryClient.$inject = [];

    angular
        .module('app')
            .factory('repository.project', RepositoryProject);
}());