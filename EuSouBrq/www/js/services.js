(function() {

    "use strict";

    angular.module("brqApp")
        .service("usuarioService", UsuarioService)
        .service("publicacaoService", PublicacaoService);

    UsuarioService.$inject = ["$http", "$q", "locationConst", "applicationConst"];

    function UsuarioService($http, $q, locationConst, applicationConst) {
        var self = this;

        self.autenticar = function(user, password) {

            if (user != "teste" || password != "teste")
                return $q(function(resolve, reject) { reject("Usuário ou Senha inválido"); });

            return $q(function(resolve, reject) {

                $http.post(locationConst.login, { user: user, password: password })
                    .then(function(data) {

                        var valores = JSON.stringify(data.data);
                        window.localStorage.setItem(applicationConst.storageUser, valores);

                        resolve(true);
                    }).catch(function(error) {
                        reject("Erro ao realizar o login! Verifique sua conexão com a internet.");
                    });
            });
        };

        self.sair = function() {
            window.localStorage.removeItem(applicationConst.storageUser);
        };

        return self;
    }

    PublicacaoService.$inject = ["$http", "$q", "locationConst"];

    function PublicacaoService($http, $q, locationConst)
    {
        var self = this;

        self.listar = function() {
            return $http.get(locationConst.posts)
        }

        return self;
    }

})();