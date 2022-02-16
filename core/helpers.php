<?php
/**
 * Helpers 
 * @since 1.0.1 
 */

/**
 * Icon SVG
 */
function hope_icon($name = null) {
  $icons = require(HOPE_PLUGIN_DIR . '/core/icons.php');
  if(isset($icons[$name])) return $icons[$name];
}

function hope_global_options_register() {
  return apply_filters('hope/global_options', [
    'hope_base_country' => get_option('hope_base_country', ''),
    'hope_donor_dashboard_page' => get_option('hope_donor_dashboard_page', ''),
    'hope_failed_donation_page' => get_option('hope_failed_donation_page', ''),
    'hope_success_page' => get_option('hope_success_page', ''),
  ]);
}

function hope_all_options() {
  return hope_global_options_register();
}