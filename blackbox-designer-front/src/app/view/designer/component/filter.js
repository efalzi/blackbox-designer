/*****************************************
 *   Library is under GPL License (GPL)
 *   Copyright (c) 2014 Elise Falzi
 ****************************************/
/**
 * @class draw2d.shape.icon.Filter
 *
 * @inheritable
 * @author Elise Falzi
 * @extends draw2d.shape.icon.Component
 */
draw2d.shape.icon.Filter = draw2d.shape.icon.Component.extend({
    NAME : "draw2d.shape.icon.Filter",

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
     * @protected
     * @returns
     */
    svgPath : function() {
        return "M9,12h6v8l-6,4V12z M0,0v2l9,9h6l9-9V0H0z";
    }
});

