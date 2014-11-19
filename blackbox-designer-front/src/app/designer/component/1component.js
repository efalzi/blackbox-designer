/*****************************************
 *   Library is under GPL License (GPL)
 *   Copyright (c) 2014 Elise Falzi
 ****************************************/
/**
 * @inheritable
 * @extends draw2d.shape.icon.Icon
 */
draw2d.shape.icon.Component = draw2d.shape.icon.Icon.extend({
    NAME : "draw2d.shape.icon.Component",

    /**
     *
     * @constructor
     * Creates a new icon element which are not assigned to any canvas.
     * 
     * @param {Object} attr the configuration of the shape
     */
    init: function(attr, setter, getter) {
        this._super($.extend({width:50,height:50,stroke:1,radius:8,cssClass:'draw2d_shape_node_End'},attr), setter, getter);
        this.add(new draw2d.shape.basic.Label({text: 'label',stroke:0}), new draw2d.layout.locator.BottomLocator(this));
    }
});

