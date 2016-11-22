(function () {

    "use strict";

    angular.module("brqApp")
        .controller("loginController", LoginController)
        .controller("menuController", MenuController)
        .controller("homeController", HomeController)
        .controller("pontoController", PontoController);

    MenuController.$inject = ["$ionicPopup", "$state", "$ionicLoading"];

    function MenuController($ionicPopup, $state, $ionicLoading) {
        var vm = this;
        vm.sair = sair;

        function sair() {
            $ionicPopup.confirm({
                title: "Sair",
                template: "Deseja mesmo sair do aplicativo?"
            }).then(function (res) {
                if (res) {
                    $ionicLoading.show();
                    setTimeout(function () {
                        $state.go("login");
                        $ionicLoading.hide();
                    }, 2000);
                }
            });
        }
    }

    LoginController.$inject = [];

    function LoginController() {
        var vm = this;
    }

    HomeController.$inject = [];

    function HomeController() {
        var vm = this;
    }

    PontoController.$inject = [];

    function PontoController() {
        var vm = this;
    }

})();