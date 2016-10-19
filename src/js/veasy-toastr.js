angular.module('veasyToastr', [
    'ngAnimate',
    'veasyToastr.templates'
  ])

  .provider('veasyToastr', function () {
    var _config;

    return {
      setConfig: function (config) {
        _config = config;
      },
      $get: function () {
        return {
          config: _config
        };
      }
    };
  })

  .directive('veasyToastr', ['$animate', function (animate) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'veasy-toastr.html',
      scope: {},
      controller: ['$rootScope', '$scope', '$timeout', 'veasyToastr', function ($rootScope, $scope, $timeout, veasyToastr) {

        var init = function () {
          $scope.veasyToastr = { stack: [], removed: 0 };

          validateConfig();
          registerEvents();
        };

        var registerEvents = function () {
          $rootScope.$on('veasyToastr:add', function (event, notification) {
            add(defineNotification(notification));
          });
        };

        var validateConfig = function () {
          $scope.config = veasyToastr.config ? angular.copy(veasyToastr.config) : {};

          if (!$scope.config) $scope.config = {};
          if (!$scope.config.width) $scope.config.width = 300;

          if (!$scope.config.success) $scope.config.success = {};
          if (!$scope.config.success.icon) $scope.config.success.icon = 'fa-check-circle';
          if ($scope.config.success.showIcon === undefined || $scope.config.success.showIcon) $scope.config.success.showIcon = true;
          if ($scope.config.success.close === undefined || $scope.config.success.close) $scope.config.success.close = true;
          if (!$scope.config.success.timeout) $scope.config.success.timeout = 2000;
          if (!$scope.config.success.style) $scope.config.success.style = {};
          if (!$scope.config.success.style.icon) $scope.config.success.style.icon = {};
          if (!$scope.config.success.style.title) $scope.config.success.style.title = {};
          if (!$scope.config.success.style.message) $scope.config.success.style.message = {};
          if (!$scope.config.success.style.close) $scope.config.success.style.close = {};

          if (!$scope.config.info) $scope.config.info = {};
          if (!$scope.config.info.icon) $scope.config.info.icon = 'fa-info-circle';
          if ($scope.config.info.showIcon === undefined || $scope.config.info.showIcon) $scope.config.info.showIcon = true;
          if ($scope.config.info.close === undefined || $scope.config.info.close) $scope.config.info.close = true;
          if (!$scope.config.info.timeout) $scope.config.info.timeout = 2000;
          if (!$scope.config.info.style) $scope.config.info.style = {};
          if (!$scope.config.info.style.icon) $scope.config.info.style.icon = {};
          if (!$scope.config.info.style.title) $scope.config.info.style.title = {};
          if (!$scope.config.info.style.message) $scope.config.info.style.message = {};
          if (!$scope.config.info.style.close) $scope.config.info.style.close = {};

          if (!$scope.config.warning) $scope.config.warning = {};
          if (!$scope.config.warning.icon) $scope.config.warning.icon = 'fa-exclamation-triangle';
          if ($scope.config.warning.showIcon === undefined || $scope.config.warning.showIcon) $scope.config.warning.showIcon = true;
          if ($scope.config.warning.close === undefined || $scope.config.warning.close) $scope.config.warning.close = true;
          if (!$scope.config.warning.timeout) $scope.config.warning.timeout = 2000;
          if (!$scope.config.warning.style) $scope.config.warning.style = {};
          if (!$scope.config.warning.style.icon) $scope.config.warning.style.icon = {};
          if (!$scope.config.warning.style.title) $scope.config.warning.style.title = {};
          if (!$scope.config.warning.style.message) $scope.config.warning.style.message = {};
          if (!$scope.config.warning.style.close) $scope.config.warning.style.close = {};

          if (!$scope.config.error) $scope.config.error = {};
          if (!$scope.config.error.icon) $scope.config.error.icon = 'fa-ban';
          if ($scope.config.error.showIcon === undefined || $scope.config.error.showIcon) $scope.config.error.showIcon = true;
          if ($scope.config.error.close === undefined || $scope.config.error.close) $scope.config.error.close = true;
          if (!$scope.config.error.timeout) $scope.config.error.timeout = 2000;
          if (!$scope.config.error.style) $scope.config.error.style = {};
          if (!$scope.config.error.style.icon) $scope.config.error.style.icon = {};
          if (!$scope.config.error.style.title) $scope.config.error.style.title = {};
          if (!$scope.config.error.style.message) $scope.config.error.style.message = {};
          if (!$scope.config.error.style.close) $scope.config.error.style.close = {};

          if (!$scope.config.default) $scope.config.default = {};
          if (!$scope.config.default.icon) $scope.config.default.icon = 'fa-bell';
          if ($scope.config.default.showIcon === undefined || $scope.config.default.showIcon) $scope.config.default.showIcon = true;
          if ($scope.config.default.close === undefined || $scope.config.default.close) $scope.config.default.close = true;
          if (!$scope.config.default.timeout) $scope.config.default.timeout = 2000;
          if (!$scope.config.default.style) $scope.config.default.style = {};
          if (!$scope.config.default.style.icon) $scope.config.default.style.icon = {};
          if (!$scope.config.default.style.title) $scope.config.default.style.title = {};
          if (!$scope.config.default.style.message) $scope.config.default.style.message = {};
          if (!$scope.config.default.style.close) $scope.config.default.style.close = {};
        };

        var defineNotification = function (notification) {
          var config = $scope.config[notification.type];
          notification.icon = config.icon;
          notification.showIcon = config.showIcon;
          notification.close = config.close;
          notification.timeout = notification.timeout || config.timeout;
          notification.style = config.style;
          return notification;
        };

        var add = function (notification) {
          var index = $scope.veasyToastr.stack.length;

          if (index == 0)
            $scope.veasyToastr.removed = 0;

          $scope.veasyToastr.stack.push(notification);

          $timeout(function () {
            if ((index - $scope.veasyToastr.removed) <= 0) {
              $scope.veasyToastr.stack.splice(0, 1);
            } else {
              $scope.veasyToastr.stack.splice(index - $scope.veasyToastr.removed, 1);
            }
            $scope.veasyToastr.removed++;
          }, notification.timeout);
        };

        $scope.close = function (notification) {
          $scope.veasyToastr.stack.splice($scope.veasyToastr.stack.indexOf(notification), 1);
        };

        init();
      }]
    };

  }])

  .service('veasyToastrNotify', ['$rootScope', '$timeout', function ($rootScope, $timeout) {

    var _notify = function (notification) {
      $timeout(function () {
        $rootScope.$broadcast('veasyToastr:add', notification);
      }, 0);
    };

    var _success = function (title, message, timeout, skipSanitization) {
      _notify({ title: title, message: message, type: 'success', timeout: timeout, sanitize: !skipSanitization });
    };

    var _info = function (title, message, timeout, skipSanitization) {
      _notify({ title: title, message: message, type: 'info', timeout: timeout, sanitize: !skipSanitization });
    };

    var _error = function (title, message, timeout, skipSanitization) {
      _notify({ title: title, message: message, type: 'error', timeout: timeout, sanitize: !skipSanitization });
    };

    var _warning = function (title, message, timeout, skipSanitization) {
      _notify({ title: title, message: message, type: 'warning', timeout: timeout, sanitize: !skipSanitization });
    };

    var _default = function (title, message, timeout, skipSanitization) {
      _notify({ title: title, message: message, type: 'default', timeout: timeout, sanitize: !skipSanitization });
    };

    return {
      success: _success,
      info: _info,
      error: _error,
      warning: _warning,
      default: _default
    };

  }]);
