(function(){

    "use strict";

    angular.module("brqApp")
        .factory("validateUserSession",ValidateUserSession);

        ValidateUserSession.$inject = ["$q", "applicationConst"];

        function ValidateUserSession($q, applicationConst)
        {
            return {
                response: function(response)
                {
                    var oAuth = window.localStorage.getItem(applicationConst.storageUser);
                    var url = response.config.url; 
                    if((url.indexOf("login") < 0 && url.indexOf("autenticar") < 0) && (oAuth == null || oAuth == undefined || oAuth == ""))
                    {
                        window.location.href = "#/login";
                        return $q.reject(response);
                    }

                    return response;
                }
            }
        }

})();