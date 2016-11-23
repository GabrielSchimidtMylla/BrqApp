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

            navigator.notification.confirm("Deseja mesmo sair do aplicativo?", function (result) {
                if (result === 1) {
                    $ionicLoading.show();
                    setTimeout(function () {
                        $state.go("login");
                        $ionicLoading.hide();
                    }, 2000);
                }
            }, "Logout", ["Sim", "Cancelar"]);
        }
        // $ionicPopup.confirm({
        //     title: "Sair",
        //     template: "Deseja mesmo sair do aplicativo?"
        // }).then(function (res) {
        //     if (res) {
        //         $ionicLoading.show();
        //         setTimeout(function () {
        //             $state.go("login");
        //             $ionicLoading.hide();
        //         }, 2000);
        //     }
        // });
    }


    LoginController.$inject = ["usuarioService","$state","applicationConst"];

    function LoginController(usuarioService, $state, applicationConst) {
        var vm = this;

        vm.login = login;
        vm.rememberPass = rememberPass;
        vm.dados = {};

        function login() {
            if (vm.formLogin.$valid) {

                usuarioService.autenticar(vm.dados.usuario, vm.dados.senha)
                              .then(function(data){
                                  
                                  var valores = JSON.stringify(data.data);
                                  window.localStorage.setItem(applicationConst.storageUser,valores);

                                  $state.go("menu.home");
                              })
                              .catch(function(error){
                                    navigator.notification.alert(error, function () { });
                              });
            }
        }

        function rememberPass() {

        }
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