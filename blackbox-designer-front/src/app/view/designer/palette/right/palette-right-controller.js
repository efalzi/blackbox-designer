angular.module('view.designer.palette.right', [])
    .controller('PaletteRightCtrl', ['PaletteFactory', function(paletteFactory){
        var self = this;
        self.palette    = paletteFactory;
    }]);
