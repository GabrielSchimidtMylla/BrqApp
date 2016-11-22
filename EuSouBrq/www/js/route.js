(function () {

    "use strict";

    angular.module("brqApp")
        .config(configuration);

    configuration.$inject = ["$stateProvider", "$urlRouterProvider"];

    function configuration($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider.state("menu", {
            url: "/menu",
            templateUrl: "templates/menu.html",
            controller: "menuController",
            controllerAs: "vm"
        }).state("home", {
            url: "/home",
            templateUrl: "templates/home.html",
            controller: "homeController",
            controllerAs: "vm"
        });
    }
})();