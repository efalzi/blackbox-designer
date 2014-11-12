/*****************************************
 *   Library is under GPL License (GPL)
 *   Copyright (c) 2012 Andreas Herz
 ****************************************/draw2d.Configuration = {
    version : "5.2.0",
    i18n : {
        command : {
            move : "Move Shape",
            assignShape : "Add Shapes to Composite",
            groupShapes : "Group Shapes",
            ungroupShapes : "Ungroup Shapes",
            deleteShape : "Delete Shape",
            moveShape : "Move Shape",
            moveLine : "Move Line",
            addShape : "Add Shape",
            moveVertex : "Move Vertex",
            moveVertices : "Move Vertices",
            deleteVertex : "Delete Vertex",
            resizeShape : "Resize Shape",
            collection : "Execute Commands",
            addVertex : "Add Vertex",
            connectPorts : "Connect Ports"
        },
        menu : {
            deleteSegment : "Delete Segment",
            addSegment : "Add Segment"
        },
        dialog : {
            filenamePrompt : "Enter Filename:"
        }
    },

    factory:{
    	// all selection policies calles this method to create a ResizeHandle.
    	// It is possible to replace this method with a custom implementation
    	// @since 5.2.0
    	createResizeHandle: function(forShape, type){
    		return new draw2d.ResizeHandle(forShape, type);
    	}
    }
};