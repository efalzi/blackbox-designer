/*****************************************
 *   Library is under GPL License (GPL)
 *   Copyright (c) 2014 Elise Falzi
 ****************************************/
/**
 * @class draw2d.shape.icon.Loop
 *
 * @inheritable
 * @author Elise Falzi
 * @extends draw2d.shape.icon.Component
 */
draw2d.shape.icon.Loop = draw2d.shape.icon.Component.extend({
    NAME : "draw2d.shape.icon.Loop",

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
        return "M24.249,15.499c-0.009,4.832-3.918,8.741-8.75,8.75c-2.515,0-4.768-1.064-6.365-2.763l2.068-1.442l-7.901-3.703l0.744,8.694l2.193-1.529c2.244,2.594,5.562,4.242,9.26,4.242c6.767,0,12.249-5.482,12.249-12.249H24.249zM15.499,6.75c2.516,0,4.769,1.065,6.367,2.764l-2.068,1.443l7.901,3.701l-0.746-8.693l-2.192,1.529c-2.245-2.594-5.562-4.245-9.262-4.245C8.734,3.25,3.25,8.734,3.249,15.499H6.75C6.758,10.668,10.668,6.758,15.499,6.75z";
    }
});

