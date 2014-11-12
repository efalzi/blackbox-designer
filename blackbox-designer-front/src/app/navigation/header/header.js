/**
 * Created by efalzi on 12/11/2014.
 */
var module = angular.module("navigation.header", []);
module.controller('HeaderCtrl', ['$scope', '$location', '$route', 'security', 'notifications', 'httpRequestTracker',
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
