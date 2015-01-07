angular.module('view.designer.palette')
    .factory('PaletteFactory', ['$http', 'Config', function($http, Config) {

    var palette = {
        visible: true,
        components: []
    };

    var stringToFunction = function(str) {
        var arr = str.split(".");

        var fn = (window || this);
        for (var i = 0, len = arr.length; i < len; i++) {
            fn = fn[arr[i]];
        }
        if (typeof fn !== "function") {
            throw new Error("function not found");
        }
        return  fn;
    };

    $http.get(Config.serverBaseUrl + '/designer/components')
        .success(function (data) {
            var components = [];

            for (var i in data) {
                var clazz = stringToFunction(data[i].name);
                if (clazz !== undefined) {
                    var obj = new clazz();
                    palette.components.push(obj);
                }
            }
            return components;
        }).
        error(function (data, status, headers, config) {
            return [];
        });

    return palette;
}]);
