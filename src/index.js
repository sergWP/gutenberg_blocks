import { registerBlockType } from "@wordpress/blocks";

registerBlockType("custom/firstblock", {
    edit: function () {
        return <p className={'edit-class'}>Edit JSX</p>
    },
    save: function () {
        return <p className={'save-class'}>Save JSX</p>
    }
})