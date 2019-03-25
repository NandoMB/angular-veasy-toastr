angular.module('app', [
  'veasyToastr'
])
.config(['veasyToastrProvider', function (veasyToastrProvider) {
  const config = {
    width: 300,
    success: { timeout: 5000 },
    error: { timeout: 10000 },
    allowHtml: true
  };
  veasyToastrProvider.setConfig(config);
}])
.controller('appCtrl', ['$scope', 'veasyToastrNotify', function ($scope, veasyToastrNotify) {
  var init = function () {
    $scope.notification = { title: 'Título', message: 'Aqui vai uma mensagem <b>customizada</b>', timeout: 2000 };
  };

  $scope.notifySuccess = function (notification) {
    veasyToastrNotify.success(notification.title, notification.message, notification.timeout);
  };

  $scope.notifyInfo = function (notification) {
    veasyToastrNotify.info(notification.title, notification.message, notification.timeout);
  };

  $scope.notifyWarning = function (notification) {
    veasyToastrNotify.warning(notification.title, notification.message, notification.timeout);
  };

  $scope.notifyError = function (notification) {
    veasyToastrNotify.error(notification.title, notification.message, notification.timeout);
  };

  $scope.notifyDefault = function (notification) {
    veasyToastrNotify.default(notification.title, notification.message, notification.timeout);
  };

  init();
}]);
