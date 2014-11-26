'use strict';
var app = angular.module('app', [
    'ngRoute',
    'ngAnimate',
    'view.dashboard',
    'view.designer',
    'navigation.header',
    'navigation.menu',
    'services.i18nNotifications',
    'services.httpRequestTracker',
    'services.blackbox',
    'security',
    'templates.app',
    'templates.common',
    'appMocks']);

app.constant('Config', {
    useMocks:           true,
    serverBaseUrl:     'http://localhost:8080/blackbox-execution'
});

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/dashboard', {
            templateUrl: 'view/dashboard/dashboard.tpl.html'
        }).
        when('/designer/:id', {
            templateUrl: 'view/designer/designer.tpl.html'
        });
    //$animateProvider.classNamePrefix("animate-");
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
