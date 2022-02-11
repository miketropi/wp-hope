<?php 
/**
 * Static 
 * @since 1.0.1
 */

/**
 * Enqueue scripts
 * 
 */
function hope_enqueue_scripts() {
  wp_enqueue_script('hope-script', HOPE_PLUGIN_URI . '/dist/hope-main.bundle.js', ['jquery'], HOPE_VER, true);
}
add_action('wp_enqueue_scripts', 'hope_enqueue_scripts');

/**
 * Enqueue admin scripts
 * 
 */
function hope_admin_enqueue_scripts() {
  wp_enqueue_style('hope-style', HOPE_PLUGIN_URI . '/dist/hope-backend.css', false, HOPE_VER);
  wp_enqueue_script('hope-script', HOPE_PLUGIN_URI . '/dist/hope-backend.bundle.js', ['jquery'], '1.0.1', true);
} 
add_action('wp_admin_enqueue_scripts', 'hope_admin_enqueue_scripts');