/**
 * Created by efalzi on 29/10/2014.
 */
var module = angular.module("navigation.menu", ['security']);
module.factory('model', function() {
    return {
        isOpen: false,
        "title" : "Blackbox Designer",
        "blackboxes" : [
            {"category" : "Electrotechnique", "list": [
                {"name": "Magnétique", "id": "1"},
                {"name": "Thermique", "id": "2"},
                {"name": "Electrique", "id": "3"},
                {"name": "Pertes Cu & Fe", "id": "4"}
                ]},
            {"category" : "Sport", "list": [
                {"name": "Trajectoire lissée", "id": "5"}
            ]}
        ],
        "boxlets" : [
            {"name": "Splines cubiques"}
        ],
        "datasources" : []
    }
});

module.controller('MenuCtrl', ['model', function (model) {

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
            element.trigger("open.mm");
        }
        element.on('$destroy', function() {
            $interval.cancel(timeoutId);
        });

        // start the UI update; save the timeoutId for canceling
        timeoutId = $interval(function() {
            $(element).mmenu({
                counters: true,
                header		: true,
                searchfield	: {
                    add			: true,
                    addTo		: '#blackboxes',
                    placeholder	: 'Filter '
                },
                footer : {
                    add     : true,
                    update  : true
                },
                onClick : {
                    setSelected	: false
                }
            }, {
                // configuration
                classNames: {
                    buttonbars: {
                        buttonbar: "anchors"
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