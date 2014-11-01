angular.module('view.designer.palette.left', [])
    .controller('PaletteLeftCtrl', ['DesignerFactory', 'PaletteFactory', function(designer, paletteFactory) {

        var self = this;
        self.palette    = paletteFactory;

        self.delete = function() {

        }
}]);