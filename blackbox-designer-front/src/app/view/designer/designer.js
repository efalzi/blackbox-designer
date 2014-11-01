var module = angular.module('view.designer', [
    'services.blackbox',
    'view.designer.palette',
    'view.designer.canvas']);

angular.module('view.designer')
    .factory('DesignerFactory', [function() {

    var editor = {

        // Configuration of the editor
        canvas : {
            width : 1000,
            height: 1000,

            // callback if a DOM node from the palette is dropped inside the canvas
            //
            onDrop: function(droppedDomNode, x, y, shiftKey, ctrlKey){
                var type = $(droppedDomNode).data("shape");
                var figure = eval("new "+type+"();");
                // create a command for the undo/redo support
                var command = new draw2d.command.CommandAdd(this, figure, x, y);
                this.getCommandStack().execute(command);
            },
            state:{
                dirty  : false,
                canUndo: false,
                canRedo: false
            }
        },
        selection:{
            className:null,
            figure:null,
            attr:null
        }
    };

    return editor;
}]);


