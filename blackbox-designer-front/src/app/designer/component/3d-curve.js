/*****************************************
 *   Library is under GPL License (GPL)
 *   Copyright (c) 2014 Elise Falzi
 ****************************************/
/**
 * @class draw2d.shape.icon.Curve3d
 *
 * @inheritable
 * @author Elise Falzi
 * @extends draw2d.shape.icon.Component
 */
draw2d.shape.icon.Curve3d = draw2d.shape.icon.Component.extend({
    NAME : "draw2d.shape.icon.Curve3d",

    /**
     *
     * @constructor
     * Creates a new icon element which are not assigned to any canvas.
     * 
     * @param {Object} attr the configuration of the shape
     */
    init: function(attr, setter, getter) {
      this._super(attr, setter, getter);
    },

    /**
     * @private
     * @returns
     */
    createSet : function() {
        return this.canvas.paper.path("M32,480h480v32H0V0h32h32v32H32v64h32v32H32v64h32v32H32v64h32v32H32v64h32v32H32V480z M398.656,208.625C396.813,236.875,394.5,272,384,272c-18.719,0-23.844-10.156-32.813-37.063C342.875,210.063,331.531,176,288,176c-45.547,0-55.234,58.125-63.781,109.375C218.078,322.188,210.453,368,192,368c-32.672,0-47.953-85.938-48-144h-32c0,18,2.25,176,80,176c45.547,0,55.234-58.094,63.781-109.375C261.922,253.813,269.547,208,288,208c18.719,0,23.844,10.156,32.813,37.063C329.125,269.938,340.469,304,384,304c40.469,0,43.594-47.438,46.594-93.25C435.594,134.188,444.375,80,512,80V48C409.156,48,402.844,144.688,398.656,208.625z").transform("s1.3");
    }
});

