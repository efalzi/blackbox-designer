angular.module('view.designer.canvas')
    .directive("canvas", ["$window","$parse", "$timeout", 'DesignerFactory', function($window, $parse, $timeout, editor) {

    return {
        restrict: 'E,A',
        link: function(scope, element, attrs,controller) {

            scope.$watch('ctrl.json', load);

            // init the Draw2D Canvas with the given user settings and overriden hooks
            //
            var canvas = new draw2d.Canvas(element.attr("id"), editor.canvas.width, editor.canvas.height);
            canvas.setScrollArea("#"+element.attr("id"));
            canvas.onDrop = $.proxy(editor.canvas.onDrop, canvas);

            // update the scope model with the current state of the
            // CommandStack
            var stack = canvas.getCommandStack();
            stack.addEventListener(function(event){
                $timeout(function(){
                    editor.state.canUndo= stack.canUndo();
                    editor.state.canRedo= stack.canRedo();
                },0);
            });

            // Update the selection in the model
            // and Databinding Draw2D -> Angular
            var changeCallback = function(emitter, attribute){
                $timeout(function(){
                    if(editor.selection.attr!==null){
                        editor.selection.attr[attribute]= emitter.attr(attribute);
                    }
                },0);
            };
            canvas.on("select", function(canvas,figure){
                $timeout(function(){
                    if(figure!==null){
                        editor.selection.className = figure.NAME;
                        editor.selection.attr = figure.attr();
                    }
                    else {
                        editor.selection.className = null;
                        editor.selection.attr = null;
                    }

                    // unregister and register the attr listener to the new figure
                    //
                    if(editor.selection.figure!==null){editor.selection.figure.off("change",changeCallback);}
                    editor.selection.figure = figure;
                    if(editor.selection.figure!==null){editor.selection.figure.on("change",changeCallback);}
                },0);
            });

            // Databinding: Angular UI -> Draw2D
            // it is neccessary to call the related setter of the draw2d object. "Normal" Angular
            // Databinding didn't work for draw2d yet
            //
            scope.$watchCollection("editor.selection.attr", function(newValues, oldValues){

                if(oldValues !== null && editor.selection.figure!=null){
                    // for performance reason we post only changed attributes to the draw2d figure
                    //
                    var changes = draw2d.util.JSON.diff(newValues, oldValues);
                    editor.selection.figure.attr(changes);
                }
            });

            // push the canvas function to the scope for ng-action access
            //
            editor.undo = $.proxy(stack.undo,stack);
            editor.redo = $.proxy(stack.redo,stack);
            editor["delete"] = $.proxy(function(){
                var node = this.getCurrentSelection();
                var command= new draw2d.command.CommandDelete(node);
                this.getCommandStack().execute(command);
            },canvas);
            editor.load = $.proxy(function(json){
                canvas.clear();
                var reader = new draw2d.io.json.Reader();
                reader.unmarshal(canvas, json);
            },canvas);

            function load(){
                editor.load(scope.ctrl.json);
            }
        }
    };
}]);

