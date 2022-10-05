var registerBlockType = wp.blocks.registerBlockType;
var createElement = wp.element.createElement;

registerBlockType("custom/firstblock", {
    edit: function () {
        return createElement("p", {
            className: "class"
        }, "Edit");
    },
    save: function () {
        return createElement("p", null, "Save");
    }
})