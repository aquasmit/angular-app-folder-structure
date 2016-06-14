(function(){

    'use strict';

    var datacontext = function($injector){
        var repoNames = ['client','project'];
        var service = {};

/*
        factory.getClients = function(){
            var clients  = [
                {firstname:'John',lastname:'papa'},
                {firstname:'dan',lastname:'whalin'},
                {firstname:'bob',lastname:'alice'},
            ];
            return clients;

        };

        factory.getProjects = function(){
            var projects  = [
                {title:'BobTheBuilder',started_on:'June 11, 1995'},
                {title:'Pokeymon',started_on:'June 12, 1985'},
                {title:'Chhota Bheem',started_on:'May 18 2012'},
            ];
            return projects

        };

        */

        init();

        return service;

        function init() {

            defineLazyLoadedRepos();

        }

        function defineLazyLoadedRepos() {

            repoNames.forEach(function(name) {
//alert('repository.' + name.toLowerCase())
                Object.defineProperty(service, name, {
                    configurable: true, // will redefine this property once
                    get: function() {
                        //console.log('yyyyyyyyy');
                        // The 1st time the repo is request via this property,
                        // we ask the repositories for it (which will inject it).
                        var repo = getRepo(name);

                        // Rewrite this property to always return this repo;
                        // no longer redefinable
                        Object.defineProperty(service, name, {
                            value: repo,
                            configurable: false,
                            enumerable: true
                        });
                        return repo;
                    }
                });

            });
        }

        // Get named Repository Ctor (by injection), new it, and initialize it
        function getRepo(repoName) {

            var fullRepoName = 'repository.' + repoName.toLowerCase();
            var factory = $injector.get(fullRepoName);

            return factory.create();
        }

    };


    datacontext.$inject = ['$injector'];
    angular
        .module('app')
            .factory('datacontext', datacontext);

}());