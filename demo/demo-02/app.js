angular.module('app', [
    'veasyToastr'
  ])

  .config(['veasyToastrProvider', function (veasyToastrProvider) {

    var config = {
      width: 500,
      success: {
        showIcon: false,
        close: true,
        timeout: 10000,
        style: {
          backgroundColor: '#F5F5F5',
          close: {
            fontSize: 20,
            color: '#777'
          },
          icon: {
            color: '#777'
          },
          title: {
            fontSize: 25,
            color: '#777'
          },
          message: {
            fontSize: 30,
            color: '#777'
          }
        }
      }
    };

    veasyToastrProvider.setConfig(config);

  }])

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
