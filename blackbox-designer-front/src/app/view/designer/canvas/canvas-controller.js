angular.module('view.designer.canvas', [
    'view.designer'
]);

angular.module('view.designer.canvas')
    .controller('CanvasCtrl', ['$routeParams', 'DesignerFactory', 'BlackboxManager', function($routeParams, designer, blackboxManager){

        var self = this,
        bbxId = $routeParams.id;

        blackboxManager.loadJson(bbxId)
            .then(function(result) {
                self.json = result.data;
            });

        self.editor = designer;
}]);
