var module = angular.module('designer', []);

module.factory('BlackboxService', ['$routeParams', function($routeParams) {
  var service = {};

  service.loadJson = function (id) {
    return [
      {
        "type": "draw2d.shape.node.Start",
        "id": "354fa3b9-a834-0221-2009-abc2d6bd852a",
        "x": 25,
        "y": 97,
        "width": 50,
        "height": 50,
        "alpha": 1,
        "userData": {},
        "cssClass": "draw2d_shape_node_Start",
        "ports": [
          {
            "name": "output0",
            "port": "draw2d.OutputPort",
            "locator": "draw2d.layout.locator.OutputPortLocator"
          }
        ],
        "bgColor": "#4D90FE",
        "color": "#000000",
        "stroke": 1,
        "radius": 2
      },
      {
        "type": "draw2d.shape.node.End",
        "id": "ebfb35bb-5767-8155-c804-14bda7759dc2",
        "x": 272,
        "y": 45,
        "width": 50,
        "height": 50,
        "alpha": 1,
        "userData": {},
        "cssClass": "draw2d_shape_node_End",
        "ports": [
          {
            "name": "input0",
            "port": "draw2d.InputPort",
            "locator": "draw2d.layout.locator.InputPortLocator"
          }
        ],
        "bgColor": "#4D90FE",
        "color": "#000000",
        "stroke": 1,
        "radius": 2
      },
      {
        "type": "draw2d.Connection",
        "id": "74ce9e7e-5f0e-8642-6bec-4ff9c54b3f0a",
        "alpha": 1,
        "userData": {},
        "cssClass": "draw2d_Connection",
        "stroke": 1,
        "color": "#1B1B1B",
        "outlineStroke": 0,
        "outlineColor": "none",
        "policy": "draw2d.policy.line.LineSelectionFeedbackPolicy",
        "router": "draw2d.layout.connection.ManhattanConnectionRouter",
        "radius": 2,
        "source": {
          "node": "354fa3b9-a834-0221-2009-abc2d6bd852a",
          "port": "output0"
        },
        "target": {
          "node": "ebfb35bb-5767-8155-c804-14bda7759dc2",
          "port": "input0"
        }
      }
    ]
  };

  return service;
}]);


module.controller('DesignerCtrl', ['$routeParams', 'BlackboxService', function($routeParams, BlackboxService){
  var self = this,
      bbxId = $routeParams.id;

  self.json = BlackboxService.loadJson(bbxId);

  self.editor = {

    // Configuration of the editor
    canvas : {
      // callback if a DOM node from the palette is dropped inside the canvas
      //
      onDrop: function(droppedDomNode, x, y, shiftKey, ctrlKey){
        var type = $(droppedDomNode).data("shape");
        var figure = eval("new "+type+"();");
        // create a command for the undo/redo support
        var command = new draw2d.command.CommandAdd(this, figure, x, y);
        this.getCommandStack().execute(command);
      }
    }
  };

}]);

module.directive("draw2dCanvas", ["$window","$parse", "$timeout", function($window, $parse, $timeout){

  return {
    restrict: 'E,A',
    link: function(scope, element, attrs,controller) {

      scope.$watch('ctrl.DesignerService.blackbox', load);

      // provide the scope properties and override the defaults with the user settings
      //
      scope.editor= $.extend(true,{
        canvas: {
          width : 1000,
          height: 1000,
          onDrop: function(droppedDomNode, x, y, shiftKey, ctrlKey){}
        },
        state:{
          dirty  : false,
          canUndo: false,
          canRedo: false
        },
        selection:{
          className:null,
          figure:null,
          attr:null
        }

      }, scope.editor);

      // init the Draw2D Canvas with the given user settings and overriden hooks
      //
      var canvas = new draw2d.Canvas(element.attr("id"), scope.editor.canvas.width, scope.editor.canvas.height);
      canvas.setScrollArea("#"+element.attr("id"));
      canvas.onDrop = $.proxy(scope.editor.canvas.onDrop, canvas);

      // update the scope model with the current state of the
      // CommandStack
      var stack = canvas.getCommandStack();
      stack.addEventListener(function(event){
        $timeout(function(){
          scope.editor.state.canUndo= stack.canUndo();
          scope.editor.state.canRedo= stack.canRedo();
        },0);
      });

      // Update the selection in the model
      // and Databinding Draw2D -> Angular
      var changeCallback = function(emitter, attribute){
        $timeout(function(){
          if(scope.editor.selection.attr!==null){
            scope.editor.selection.attr[attribute]= emitter.attr(attribute);
          }
        },0);
      };
      canvas.on("select", function(canvas,figure){
        $timeout(function(){
          if(figure!==null){
            scope.editor.selection.className = figure.NAME;
            scope.editor.selection.attr = figure.attr();
          }
          else {
            scope.editor.selection.className = null;
            scope.editor.selection.attr = null;
          }

          // unregister and register the attr listener to the new figure
          //
          if(scope.editor.selection.figure!==null){scope.editor.selection.figure.off("change",changeCallback);}
          scope.editor.selection.figure = figure;
          if(scope.editor.selection.figure!==null){scope.editor.selection.figure.on("change",changeCallback);}
        },0);
      });

      // Databinding: Angular UI -> Draw2D
      // it is neccessary to call the related setter of the draw2d object. "Normal" Angular
      // Databinding didn't work for draw2d yet
      //
      scope.$watchCollection("editor.selection.attr", function(newValues, oldValues){

        if(oldValues !== null && scope.editor.selection.figure!=null){
          // for performance reason we post only changed attributes to the draw2d figure
          //
          var changes = draw2d.util.JSON.diff(newValues, oldValues);
          scope.editor.selection.figure.attr(changes);
        }
      });

      // push the canvas function to the scope for ng-action access
      //
      scope.editor.undo = $.proxy(stack.undo,stack);
      scope.editor.redo = $.proxy(stack.redo,stack);
      scope.editor["delete"] = $.proxy(function(){
        var node = this.getCurrentSelection();
        var command= new draw2d.command.CommandDelete(node);
        this.getCommandStack().execute(command);
      },canvas);
      scope.editor.load = $.proxy(function(json){
        canvas.clear();
        var reader = new draw2d.io.json.Reader();
        reader.unmarshal(canvas, json);
      },canvas);

      function load(){
        scope.editor.load(scope.ctrl.json);
      }
    }
  };
}]);