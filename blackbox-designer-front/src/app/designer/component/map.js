/*****************************************
 *   Library is under GPL License (GPL)
 *   Copyright (c) 2014 Elise Falzi
 ****************************************/
/**
 * @class draw2d.shape.icon.Map
 *
 * @inheritable
 * @author Elise Falzi
 * @extends draw2d.shape.icon.Component
 */
draw2d.shape.icon.Map = draw2d.shape.icon.Component.extend({
    NAME : "draw2d.shape.icon.Map",

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
        return this.canvas.paper.path("M21.786,20.698c-1.792-0.237-2.912-1.331-4.358-2.886c-0.697-0.751-1.428-1.577-2.324-2.319c1.396-1.165,2.411-2.519,3.483-3.503c1.01-0.92,1.901-1.519,3.199-1.688v2.574l7.556-4.363L21.786,4.15v2.652c-3.34,0.266-5.45,2.378-6.934,4.013c-0.819,0.896-1.537,1.692-2.212,2.192c-0.685,0.501-1.227,0.731-2.013,0.742c-0.001,0-0.002,0-0.003,0H2.812v3.5h0.001v0.001c0,0,0.046-0.001,0.136-0.001h7.677c0.786,0.011,1.33,0.241,2.017,0.743c1.021,0.743,2.095,2.181,3.552,3.568c1.312,1.258,3.162,2.46,5.592,2.649v2.664l7.556-4.36l-7.556-4.361V20.698z").transform("s1.3");
    }
});

