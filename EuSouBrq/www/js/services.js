(function () {

    "use strict";

    angular.module("brqApp")
        .service("usuarioService", UsuarioService);

    UsuarioService.$inject = ["$http", "$q", "locationConst"];

    function UsuarioService($http, $q, locationConst) {
        var self = this;

        self.autenticar = function (user, password) {
            if (user != "teste" || password != "teste")
               return $q(function (resolve,reject) { reject("Usuário ou Senha inválido"); });

            return $http.post(locationConst.login, { user: user, password: password });
        }

        return self;
    }

})();