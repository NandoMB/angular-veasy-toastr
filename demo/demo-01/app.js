angular.module('app', [
  'veasyToastr'
])

  // .run(['$rootScope', function ($rootScope) {
  //   $rootScope.veasyToastrConfig = {
  //     width: 300,          // Default is: 300px
  //     success: {
  //       icon: '',          // Default is: 'fa-check-circle'
  //       showIcon: true,    // Default is: true
  //       close: true,       // Default is: true
  //       timeout: 2000      // Default is: 2000ms
  //     },
  //     info: {
  //       icon: '',          // Default is: 'fa-info-circle'
  //       showIcon: true,    // Default is: true
  //       close: true,       // Default is: true
  //       timeout: 2000      // Default is: 2000ms
  //     },
  //     warning: {
  //       icon: '',          // Default is: 'fa-exclamation-triangle'
  //       showIcon: true,    // Default is: true
  //       close: true,       // Default is: true
  //       timeout: 2000      // Default is: 2000ms
  //     },
  //     error: {
  //       icon: '',          // Default is: 'fa-ban'
  //       showIcon: true,    // Default is: true
  //       close: true,       // Default is: true
  //       timeout: 2000      // Default is: 2000ms
  //     },
  //     default: {
  //       icon: '',          // Default is: 'fa-bell'
  //       showIcon: true,    // Default is: true
  //       close: true,       // Default is: true
  //       timeout: 2000 ,    // Default is: 2000ms
  //       style: {
  //         backgroundColor: '#810590',
  //         close: {
  //           fontSize: 16,
  //           color: '#FFF'
  //         },
  //         icon: {
  //           color: '#FFF'
  //         },
  //         title: {
  //           fontSize: 25,
  //           color: '#FFF'
  //         },
  //         message: {
  //           fontSize: 5,
  //           color: '#FFF'
  //         }
  //       }
  //     }
  //   };
  // }])

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
