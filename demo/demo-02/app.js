angular.module('app', [
    'veasyToastr'
  ])

  .run(['$rootScope', function ($rootScope) {
    $rootScope.veasyToastrConfig = {
      width: 400,           // Default is: 300 (300px).

      success: {            // You can personalize all the types: 'success', 'info', 'warning', 'error' and 'default'.
        showIcon: false,    // Default is: true.
        close: true,        // Default is: true.
        timeout: 4000,      // Default is: 2000 (2000ms).
        style: {
          backgroundColor: '#FFF',
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
            fontSize: 10,
            color: '#777'
          }
        }
      }
    };
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
