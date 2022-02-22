<?php
/**
 * Helpers 
 * @since 1.0.1 
 */

/**
 * Icon SVG
 * 
 * @param $name
 * @return SVG Html
 */
function hope_icon($name = null) {
  $icons = require(HOPE_PLUGIN_DIR . '/core/icons.php');
  if(isset($icons[$name])) return $icons[$name];
}

/**
 * @return array 
 */
function hope_global_options_register() {
  return apply_filters('hope/global_options', [
    'hope_base_country' => get_option('hope_base_country', ''),
    'hope_donor_dashboard_page' => get_option('hope_donor_dashboard_page', ''),
    'hope_failed_donation_page' => get_option('hope_failed_donation_page', ''),
    'hope_success_page' => get_option('hope_success_page', ''),
  ]);
}

/**
 * @return array
 */
function hope_all_options() {
  return hope_global_options_register();
}

// function hope_get_all_pages() {
//   $pages = get_pages([
//     'post_status' => ['publish', 'pending', 'draft', 'auto-draft', 'future', 'private', 'inherit', 'trash'],
//   ]);
//   echo '<pre>';
//   print_r($pages);
//   echo '</pre>';
// }

// add_action('init', function() {
//   hope_get_all_pages();
// });