'use strict';
var appMocks = angular.module('appMocks', ['app', 'ngMockE2E']);

appMocks.run(['$http', '$httpBackend', 'Config', function($http, $httpBackend, Config) {

    if (Config.useMock == false) {
        return;
    }

    var blackboxes = [
        {"category" : "Electrotechnique", "class": "glyphicon glyphicon-th", "list": [
            {"name": "Magnétique", "id": "1", "class": "glyphicon glyphicon-th"},
            {"name": "Thermique", "id": "2", "class": "glyphicon glyphicon-th"},
            {"name": "Electrique", "id": "3", "class": "glyphicon glyphicon-th"},
            {"name": "Pertes Cu & Fe", "id": "4", "class": "glyphicon glyphicon-th"}
        ]},
        {"category" : "Sport", "class": "glyphicon glyphicon-th", "list": [
            {"name": "Trajectoire lissée", "id": "5", "class": "glyphicon glyphicon-th"}
        ]}
    ];

    // returns the current list of blackboxes
    $httpBackend.whenGET(Config.serverBaseUrl + '/blackbox/list').respond(blackboxes);

    // Add a new blackbox
    $httpBackend.whenPOST(Config.serverBaseUrl + '/blackbox/add').respond(function(method, url, data) {
        var blackbox = angular.fromJson(data);
        blackboxes.push(blackbox);
        return [200, blackbox, {}];
    });

    // returns the current list of blackboxes
    var json = [{
            "type": "draw2d.shape.node.Start", "id": "354fa3b9-a834-0221-2009-abc2d6bd852a",
            "x": 25, "y": 97, "width": 50, "height": 50, "alpha": 1, "cssClass": "draw2d_shape_node_Start",
            "ports": [{"name": "output0", "port": "draw2d.OutputPort", "locator": "draw2d.layout.locator.OutputPortLocator"}],
            "bgColor": "#4D90FE", "color": "#000000", "stroke": 1, "radius": 2,
            "userData": {}
        },
        {   "type": "draw2d.shape.node.End", "id": "ebfb35bb-5767-8155-c804-14bda7759dc2",
            "x": 272, "y": 45, "width": 50, "height": 50, "alpha": 1, "userData": {}, "cssClass": "draw2d_shape_node_End",
            "ports": [{"name": "input0", "port": "draw2d.InputPort", "locator": "draw2d.layout.locator.InputPortLocator"}],
            "bgColor": "#4D90FE",
            "color": "#000000",
            "stroke": 1,
            "radius": 2
        },
        {   "type": "draw2d.Connection", "id": "74ce9e7e-5f0e-8642-6bec-4ff9c54b3f0a",
            "alpha": 1, "userData": {}, "cssClass": "draw2d_Connection", "stroke": 1, "color": "#1B1B1B", "outlineStroke": 0,
            "outlineColor": "none", "policy": "draw2d.policy.line.LineSelectionFeedbackPolicy",
            "router": "draw2d.layout.connection.ManhattanConnectionRouter", "radius": 2,
            "source": {
                "node": "354fa3b9-a834-0221-2009-abc2d6bd852a",
                "port": "output0"
            },
            "target": {
                "node": "ebfb35bb-5767-8155-c804-14bda7759dc2",
                "port": "input0"
            }
        }
    ];
    $httpBackend.whenGET(Config.serverBaseUrl + '/blackbox/1/json').respond(json);

}]);