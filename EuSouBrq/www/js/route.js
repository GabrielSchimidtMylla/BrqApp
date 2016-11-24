(function () {

    "use strict";

    angular.module("brqApp")
        .config(configuration);

    configuration.$inject = ["$stateProvider", "$urlRouterProvider", "$httpProvider", "$ionicConfigProvider"];

    function configuration($stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider) {

        //Performace scroll
        // if (!ionic.Platform.isIOS()) {
        //     $ionicConfigProvider.scrolling.jsScrolling(false);
        // }

        $httpProvider.interceptors.push("validateUserSession");

        $urlRouterProvider.otherwise("/menu/home");

        $stateProvider.state("login", {
            url: "/login",
            templateUrl: "templates/login.html",
            controller: "loginController",
            controllerAs: "vm"
        }).state("menu", {
            url: "/menu",
            templateUrl: "templates/menu.html",
            controller: "menuController",
            controllerAs: "vm"
        }).state("menu.home", {
            url: "/home",
            views: {
                'menuContent': {
                    templateUrl: "templates/home.html",
                    controller: "homeController",
                    controllerAs: "vm"
                }
            }
        }).state("menu.ponto", {
            url: "/ponto",
            views: {
                'menuContent': {
                    templateUrl: "templates/ponto.html",
                    controller: "pontoController",
                    controllerAs: "vm"
                }
            }
        });
    }
})();