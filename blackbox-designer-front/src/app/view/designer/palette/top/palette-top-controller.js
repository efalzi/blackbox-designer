angular.module('view.designer.palette.top', [])
    .controller('PaletteTopCtrl', ['PaletteFactory', function(paletteFactory) {

    var self = this;
    self.palette    = paletteFactory;
        
}]);
