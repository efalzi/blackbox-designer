/*****************************************
 *   Library is under GPL License (GPL)
 *   Copyright (c) 2014 Elise Falzi
 ****************************************/
/**
 * @class draw2d.shape.icon.CsvFile
 *     
 * @inheritable
 * @author Elise Falzi
 * @extends draw2d.shape.icon.Component
 */
draw2d.shape.icon.CsvFile = draw2d.shape.icon.Component.extend({
    NAME : "draw2d.shape.icon.CsvFile",

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
        return "M352,0H32v512h448V128L352,0z M352,45.25L434.75,128H352V45.25z M448,480H64V32h256v128h128V480z M288,128H96V96h192V128zM96,192h320v32H96V192z M96,288h320v32H96V288z M96,384h320v32H96V384z";
    }
});

