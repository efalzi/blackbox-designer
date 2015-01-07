angular.module('view.designer.palette', [
    'view.designer.palette.left',
    'view.designer.palette.right',
    'view.designer.palette.top']);

angular.module('view.designer.palette')
    .controller('PaletteCtrl', ['PaletteFactory', function(paletteFactory){

    var self = this;
    self.palette    = paletteFactory;

    self.toggle = function() {
        self.palette.visible = !self.palette.visible;
    }
}]);
