/**
 * Created by efalzi on 29/10/2014.
 */
var module = angular.module("navigation.menu.generic", ['security']);
module.factory('model', function() {
    return {
        isOpen: false,
        "title" : "Blackbox Designer",
        "links" : [
            {"name" : "Dashboard", "url" : "/dashboard", "className" : "glyphicon glyphicon-home"},
            {
                "name": "Backbloxes", "className": "glyphicon glyphicon-th-large", "sub": [
                    {"name": "Run", "url": "/designer"},
                    {"name": "Blackbox 1", "url": "/designer"}
                 ]
            },
            {"name" : "Boxlets", "className" : "glyphicon glyphicon-certificate", "sub": [
                    {"name": "Splines cubiques"}
                ]
            },
            {"name" : "Datasources", "className" : "glyphicon glyphicon-record"},
        ]
    }
});

module.controller('MenuGenericCtrl', ['model', function (model) {

    var self = this;
    self.model = model;

    self.open = function () {
        model.isOpen = true;
    };

    self.close = function () {
        model.isOpen = false;
    };

    self.isOpen = function () {
        return model.isOpen;
    };
}]);

module.directive('nav', ['$interval', function ($interval) {

    function link(scope, element, attrs) {
        var timeoutId;

        scope.$watch('ctrl.model.isOpen', toggleDisplay);

        function toggleDisplay() {
            !scope.ctrl.model.isOpen ? element.trigger("close.mm") : close();
        }

        function close() {
            element.trigger("setPage(null)");
            element.trigger("open.mm");
        }
        element.on('$destroy', function() {
            $interval.cancel(timeoutId);
        });

        // start the UI update; save the timeoutId for canceling
        timeoutId = $interval(function() {
            $(element).mmenu({
                counters: true,
                header: {
                    content: 'Hello !',
                    title: 'Title'
                }
            }, {
                // configuration
                classNames: {
                    buttonbars: {
                        buttonbar: "anchors"
                    },
                    fixedElements: {
                        fixedTop: "header",
                        fixedBottom: "footer"
                    }
                }
            });
        }, 0);
    }

    return {
        restrict: 'E',
        link: link
    }
}
]);