<?php
/**
 * Plugin Name: First Block
 * Description: My First Gutenberg Block
 * Version: 1.0
 */

function custom_firstblock_init() {
    register_block_type_from_metadata( __DIR__ );
}

add_action("init", "custom_firstblock_init");