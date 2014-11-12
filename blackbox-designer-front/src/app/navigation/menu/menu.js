/**
 * Created by efalzi on 29/10/2014.
 */
var module = angular.module("navigation.menu", ['security']);
module.factory('model', function() {
    return {
        isOpen: false,
        "blackboxes" : [
            {"category" : "Electrotechnique", "class": "glyphicon glyphicon-th", "list": [
                {"name": "Magnétique", "id": "1", "class": "glyphicon glyphicon-th"},
                {"name": "Thermique", "id": "2", "class": "glyphicon glyphicon-th"},
                {"name": "Electrique", "id": "3", "class": "glyphicon glyphicon-th"},
                {"name": "Pertes Cu & Fe", "id": "4", "class": "glyphicon glyphicon-th"}
                ]},
            {"category" : "Sport", "class": "glyphicon glyphicon-th", "list": [
                {"name": "Trajectoire lissée", "id": "5", "class": "glyphicon glyphicon-th"}
            ]}
        ],
        "boxlets" : [
            {"name": "Splines cubiques"}
        ],
        "datasources" : []
    }
});

module.controller('MenuCtrl', ['model', function (model) {

    var self = this,
        menu = $('#menu');

    self.model = model;

    self.open = function () {
        model.isOpen = true;
    };

    self.close = function () {
        model.isOpen = false;
        self.rerender();
    };

    self.rerender = function () {
        $("#menu").init();
    }

    self.isOpen = function () {
        return model.isOpen;
    };

    self.addCategory = function () {
        model.blackboxes.push({"category" : "New category", "class": "glyphicon glyphicon-th"});
    };
}]);

module.directive('nav', ['$interval', function ($interval) {

    function link(scope, element, attrs) {
        var timeoutId;

        scope.$watch('ctrl.model.isOpen', toggleDisplay);

        function toggleDisplay() {
            !scope.ctrl.model.isOpen ? close() : open();
        }
        function open() {
            element.trigger("open.mm");
        }
        function close() {
            element.find(".mm-panel").first().trigger( "open.mm" );
            element.trigger("close.mm");
        }
        function render() {
            element.mmenu({
                counters: true,
                header : true,
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
        }

        element.on('$destroy', function() {
            $interval.cancel(timeoutId);
        });

        // start the UI update; save the timeoutId for canceling
        timeoutId = $interval(function() {
            render();
        }, 0, 1);
    }

    return {
        restrict: 'E',
        link: link
    }
}
]);