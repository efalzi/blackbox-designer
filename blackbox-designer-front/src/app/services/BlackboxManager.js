/**
 * Created by efalzi on 12/11/2014.
 */
angular.module('services.blackbox', [])
    .service('BlackboxManager', ['$http', 'Config', function($http, Config) {

        this.$http = $http;

        this.loadJson = function(id) {
            // construct url based on values bound to form elements
            var url = Config.serverBaseUrl + '/blackbox/' + id + '/json';

            // feed me
            return this.$http.get(url)
                .then(function(response) {
                    return response;
                });
        };
}]);