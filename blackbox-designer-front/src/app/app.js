'use strict';
var app = angular.module('app', [
    'ngRoute',
    'dashboard',
    'navigation.menu',
    'services.i18nNotifications',
    'services.httpRequestTracker',
    'security',
    'templates.app',
    'templates.common']);

app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $routeProvider.
        when('/dashboard', {
            controller: 'DashboardCtrl',
            templateUrl: 'dashboard/dashboard.tpl.html'
        }).
        when('/designer', {
            controller: 'DesignerCtrl',
            templateUrl: 'designer/designer.tpl.html'
        });
}]);

app.controller('AppCtrl', ['$scope', 'i18nNotifications', 'localizedMessages', function($scope, i18nNotifications, localizedMessages) {

    $scope.notifications = i18nNotifications;

    $scope.removeNotification = function (notification) {
        i18nNotifications.remove(notification);
    };

    $scope.$on('$routeChangeError', function(event, current, previous, rejection){
        i18nNotifications.pushForCurrentRoute('errors.route.changeError', 'error', {}, {rejection: rejection});
    });
}]);

app.controller('HeaderCtrl', ['$scope', '$location', '$route', 'security', 'notifications', 'httpRequestTracker',
    function ($scope, $location, $route, security, notifications, httpRequestTracker) {
        $scope.location = $location;

        $scope.isAuthenticated = security.isAuthenticated;
        $scope.isAdmin = security.isAdmin;

        $scope.home = function () {
            if (security.isAuthenticated()) {
                $location.path('/dashboard');
            } else {
                $location.path('/home');
            }
        };

        $scope.hasPendingRequests = function () {
            return httpRequestTracker.hasPendingRequests();
        };
    }]);