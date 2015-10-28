angular.module('app', [
  'veasyToastr'
])

  .controller('appCtrl', ['$rootScope', '$scope', '$window', '$timeout', 'veasyToastrNotify', function ($rootScope, $scope, $window, $timeout, veasyToastrNotify) {

    var init = function () {
      $scope.notification = { title: 'Título', message: 'Aqui vai uma mensagem customizada', timeout: 2000 };
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
