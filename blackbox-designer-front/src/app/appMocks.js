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
            "type": "draw2d.shape.icon.CsvFile", "id": "input_csv_1", "x": 65, "y": 75,"userData": {},
            "ports": [{"name": "output0", "port": "draw2d.OutputPort", "locator": "draw2d.layout.locator.OutputPortLocator"}]
        },
        {   "type": "draw2d.shape.icon.Filter", "id": "filter_1", "x": 292, "y": 75, "userData": {},
            "ports": [
                {"name": "input0", "port": "draw2d.InputPort", "locator": "draw2d.layout.locator.InputPortLocator"},
                {"name": "output0", "port": "draw2d.OutputPort", "locator": "draw2d.layout.locator.OutputPortLocator"},
                {"name": "output1", "port": "draw2d.OutputPort", "locator": "draw2d.layout.locator.OutputPortLocator"}]
        },
        {   "type": "draw2d.shape.icon.Boxlet", "id": "projection_center", "x": 420, "y": 175, "userData": {},
            "ports": [
                {"name": "input0", "port": "draw2d.InputPort", "locator": "draw2d.layout.locator.InputPortLocator"},
                {"name": "output0", "port": "draw2d.OutputPort", "locator": "draw2d.layout.locator.OutputPortLocator"}]
        },
        {   "type": "draw2d.shape.icon.Map", "id": "mapping_1", "x": 550, "y": 75, "userData": {},
            "ports": [
                {"name": "input0", "port": "draw2d.InputPort", "locator": "draw2d.layout.locator.InputPortLocator"},
                {"name": "input1", "port": "draw2d.InputPort", "locator": "draw2d.layout.locator.InputPortLocator"},
                {"name": "output0", "port": "draw2d.OutputPort", "locator": "draw2d.layout.locator.OutputPortLocator"}]
        },
        {   "type": "draw2d.shape.icon.Boxlet", "id": "local_projection", "x": 650, "y": 75, "userData": {},
            "ports": [
                {"name": "input0", "port": "draw2d.InputPort", "locator": "draw2d.layout.locator.InputPortLocator"},
                {"name": "output0", "port": "draw2d.OutputPort", "locator": "draw2d.layout.locator.OutputPortLocator"}]
        },
        {   "type": "draw2d.shape.icon.Loop", "id": "loop_1", "x": 750, "y": 75, "userData": {},
            "ports": [
                {"name": "input0", "port": "draw2d.InputPort", "locator": "draw2d.layout.locator.InputPortLocator"},
                {"name": "output0", "port": "draw2d.OutputPort", "locator": "draw2d.layout.locator.OutputPortLocator"}]
        },
        {   "type": "draw2d.shape.icon.Boxlet", "id": "cubic_spline", "x": 850, "y": 75, "userData": {},
            "ports": [
                {"name": "input0", "port": "draw2d.InputPort", "locator": "draw2d.layout.locator.InputPortLocator"},
                {"name": "output0", "port": "draw2d.OutputPort", "locator": "draw2d.layout.locator.BottomLocator"}]
        },
        {   "type": "draw2d.shape.icon.Map", "id": "mapping_2", "x": 850, "y": 180, "userData": {},
            "ports": [
                {"name": "input0", "port": "draw2d.InputPort", "locator": "draw2d.layout.locator.TopLocator"},
                {"name": "output0", "port": "draw2d.OutputPort", "locator": "draw2d.layout.locator.BottomLocator"}]
        },
        {   "type": "draw2d.shape.icon.Curve3d", "id": "3d_trajectory", "x": 750, "y": 280, "userData": {},
            "ports": [{"name": "input0", "port": "draw2d.InputPort", "locator": "draw2d.layout.locator.TopLocator"}]
        },
        {   "type": "draw2d.Connection", "id": "connect1", "alpha": 1, "userData": {}, "cssClass": "draw2d_Connection", "stroke": 1, "color": "#1B1B1B", "outlineStroke": 0,
            "outlineColor": "none", "policy": "draw2d.policy.line.LineSelectionFeedbackPolicy", "router": "draw2d.layout.connection.DirectRouter", "radius": 2,
            "source": {"node": "input_csv_1", "port": "output0"},
            "target": {"node": "filter_1", "port": "input0"}
        },
        {   "type": "draw2d.Connection", "id": "connect2", "alpha": 1, "userData": {}, "cssClass": "draw2d_Connection", "stroke": 1, "color": "#1B1B1B", "outlineStroke": 0,
            "outlineColor": "none", "policy": "draw2d.policy.line.LineSelectionFeedbackPolicy", "router": "draw2d.layout.connection.DirectRouter", "radius": 2,
            "source": {"node": "filter_1", "port": "output0"},
            "target": {"node": "mapping_1", "port": "input0"}
        },
        {   "type": "draw2d.Connection", "id": "connect3", "alpha": 1, "userData": {}, "cssClass": "draw2d_Connection", "stroke": 1, "color": "#1B1B1B", "outlineStroke": 0,
            "outlineColor": "none", "policy": "draw2d.policy.line.LineSelectionFeedbackPolicy", "router": "draw2d.layout.connection.DirectRouter", "radius": 2,
            "source": {"node": "mapping_1", "port": "output0"},
            "target": {"node": "local_projection", "port": "input0"}
        },
        {   "type": "draw2d.Connection", "id": "connect4", "alpha": 1, "userData": {}, "cssClass": "draw2d_Connection", "stroke": 1, "color": "#1B1B1B", "outlineStroke": 0,
            "outlineColor": "none", "policy": "draw2d.policy.line.LineSelectionFeedbackPolicy", "router": "draw2d.layout.connection.DirectRouter", "radius": 2,
            "source": {"node": "local_projection", "port": "output0"},
            "target": {"node": "loop_1", "port": "input0"}
        },
        {   "type": "draw2d.Connection", "id": "connect5", "alpha": 1, "userData": {}, "cssClass": "draw2d_Connection", "stroke": 1, "color": "#1B1B1B", "outlineStroke": 0,
            "outlineColor": "none", "policy": "draw2d.policy.line.LineSelectionFeedbackPolicy", "router": "draw2d.layout.connection.DirectRouter", "radius": 2,
            "source": {"node": "loop_1", "port": "output0"},
            "target": {"node": "cubic_spline", "port": "input0"}
        },
        {   "type": "draw2d.Connection", "id": "connect6", "alpha": 1, "userData": {}, "cssClass": "draw2d_Connection", "stroke": 1, "color": "#1B1B1B", "outlineStroke": 0,
            "outlineColor": "none", "policy": "draw2d.policy.line.LineSelectionFeedbackPolicy", "router": "draw2d.layout.connection.DirectRouter", "radius": 2,
            "source": {"node": "cubic_spline", "port": "output0"},
            "target": {"node": "mapping_2", "port": "input0"}
        },
        {   "type": "draw2d.Connection", "id": "connect7", "alpha": 1, "userData": {}, "cssClass": "draw2d_Connection", "stroke": 1, "color": "#1B1B1B", "outlineStroke": 0,
            "outlineColor": "none", "policy": "draw2d.policy.line.LineSelectionFeedbackPolicy", "router": "draw2d.layout.connection.DirectRouter", "radius": 2,
            "source": {"node": "mapping_2", "port": "output0"},
            "target": {"node": "3d_trajectory", "port": "input0"}
        },
        {   "type": "draw2d.Connection", "id": "connect8", "alpha": 1, "userData": {}, "cssClass": "draw2d_Connection", "stroke": 1, "color": "#1B1B1B", "outlineStroke": 0,
            "outlineColor": "none", "policy": "draw2d.policy.line.LineSelectionFeedbackPolicy", "router": "draw2d.layout.connection.DirectRouter", "radius": 2,
            "source": {"node": "filter_1", "port": "output1"},
            "target": {"node": "projection_center", "port": "input0"}
        },
        {   "type": "draw2d.Connection", "id": "connect9", "alpha": 1, "userData": {}, "cssClass": "draw2d_Connection", "stroke": 1, "color": "#1B1B1B", "outlineStroke": 0,
            "outlineColor": "none", "policy": "draw2d.policy.line.LineSelectionFeedbackPolicy", "router": "draw2d.layout.connection.DirectRouter", "radius": 2,
            "source": {"node": "projection_center", "port": "output0"},
            "target": {"node": "mapping_1", "port": "input1"}
        }
    ];
    $httpBackend.whenGET(Config.serverBaseUrl + '/blackbox/5/json').respond(json);

    var paletteComponents = [
        {"name":"draw2d.shape.icon.CsvFile","category":"datasource"},
        {"name":"draw2d.shape.icon.Filter", "category":"filtering"},
        {"name":"draw2d.shape.icon.Loop", "category":"transformation"}
    ];

    $httpBackend.whenGET(Config.serverBaseUrl + '/designer/components').respond(paletteComponents);

}]);