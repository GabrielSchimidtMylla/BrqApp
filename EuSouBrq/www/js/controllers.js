(function() {

    "use strict";

    angular.module("brqApp")
        .controller("loginController", LoginController)
        .controller("menuController", MenuController)
        .controller("homeController", HomeController)
        .controller("pontoController", PontoController);

    MenuController.$inject = ["$ionicPopup", "$state", "$ionicLoading", "usuarioService"];

    function MenuController($ionicPopup, $state, $ionicLoading, usuarioService) {
        var vm = this;
        vm.sair = sair;

        function sair() {

            navigator.notification.confirm("Deseja mesmo sair do aplicativo?", function(result) {
                if (result === 1) {
                    usuarioService.sair();
                    $state.go("login");
                }
            }, "Logout", ["Sim", "Cancelar"]);
        }
    }


    LoginController.$inject = ["usuarioService", "$state", "applicationConst", "$ionicPopup", "$scope"];

    function LoginController(usuarioService, $state, applicationConst, $ionicPopup, $scope) {
        var vm = this;

        vm.login = login;
        vm.rememberPass = rememberPass;
        vm.loading = false;
        vm.dados = {};
        $scope.emailRemember = "";

        function login() {
            if (vm.formLogin.$valid) {
                vm.loading = true;
                usuarioService.autenticar(vm.dados.usuario, vm.dados.senha)
                    .then(function(data) {
                        if (data)
                            $state.go("menu.home");
                    }).catch(function(error) {
                        navigator.notification.alert(error, function() { });
                    }).finally(function() {
                        vm.loading = false;
                    });
            }
        }

        function rememberPass() {

            $ionicPopup.show({
                template: '<div class="list"><label class="item item-input"><input type="email" ng-model="emailRemember" placeholder="E-mail"></label></div>',
                title: 'Relembrar Senha',
                subTitle: "Insira seu e-mail cadastrado",
                scope: $scope,
                buttons: [
                    { text: 'Cancelar' },
                    {
                        text: '<b>Confirmar</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            navigator.notification.alert("Verifique seu e-mail!", function() { });
                        }
                    }
                ]
            });
        }
    }

    HomeController.$inject = ["publicacaoService", "$state"];

    function HomeController(publicacaoService, $state) {
        var vm = this;
        vm.loading = true;
        vm.dados = [];

        publicacaoService.listar()
            .then(function(data) {
                vm.dados = data.data;
            }).catch(function(error) {
                console.log(error);
                navigator.notification.alert("Falha ao sincronizar! Verifique sua conexão com a internet.", function() { });
            }).finally(function() {
                vm.loading = false;
            });
    }

    PontoController.$inject = [];

    function PontoController() {
        var vm = this;
    }

})();