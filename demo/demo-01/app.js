angular.module('app', [
  'veasyToastr'
])

  .controller('appCtrl', ['$scope', 'veasyToastrNotify', function ($scope, veasyToastrNotify) {

    var init = function () {
      $scope.notification = { title: 'Título', message: 'Aqui vai uma mensagem <b>customizada</b>', timeout: 2000, allowHtml: true };
    };

    $scope.notifySuccess = function (notification) {
      veasyToastrNotify.success(notification.title, notification.message, notification.timeout, notification.allowHtml);
    };

    $scope.notifyInfo = function (notification) {
      veasyToastrNotify.info(notification.title, notification.message, notification.timeout, notification.allowHtml);
    };

    $scope.notifyWarning = function (notification) {
      veasyToastrNotify.warning(notification.title, notification.message, notification.timeout, notification.allowHtml);
    };

    $scope.notifyError = function (notification) {
      veasyToastrNotify.error(notification.title, notification.message, notification.timeout, notification.allowHtml);
    };

    $scope.notifyDefault = function (notification) {
      veasyToastrNotify.default(notification.title, notification.message, notification.timeout, notification.allowHtml);
    };

    init();

  }]);
