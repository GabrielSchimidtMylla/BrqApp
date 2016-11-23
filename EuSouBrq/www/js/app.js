
angular.module('brqApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
}).constant("locationConst",{
  "login": "http://private-88aa2-apieusoubrq.apiary-mock.com/autenticar"
}).constant("applicationConst",{
  "storageUser": "_OAuthBRQ"
});


