<?php
/**
 * Helpers 
 * @since 1.0.1 
 */

function hope_template_path_apply_filter($full_path = '', $path = '') {
  return apply_filters('hope/template_path__' . $path, $full_path);
}

function hope_template_path($path) {
  $root_template = HOPE_PLUGIN_DIR . '/templates/';
  $root_theme_template = get_template_directory() . '/hope/';
  $root_childtheme_template = get_stylesheet_directory() . '/hope/';

  # In child theme
  if(file_exists($root_childtheme_template . $path)) {
    return hope_template_path_apply_filter($root_childtheme_template . $path, $path);
  }

  # In parent theme
  if(file_exists($root_theme_template . $path)) {
    return hope_template_path_apply_filter($root_theme_template . $path, $path);
  }

  # In plugin
  if(file_exists($root_template . $path)) {
    return hope_template_path_apply_filter($root_template . $path, $path);
  }

  # Template not exits!
  return;
}

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
    /** General */
    'hope_base_country' => get_option('hope_base_country', ''),
    'hope_donor_dashboard_page' => get_option('hope_donor_dashboard_page', ''),
    'hope_failed_donation_page' => get_option('hope_failed_donation_page', ''),
    'hope_success_page' => get_option('hope_success_page', ''),

    /** Currency */
    'hope_currency' => get_option('hope_currency', 'USD'),
    'hope_currency_position' => get_option('hope_currency_position', 'before'),
    'hope_currency_thousands_separator' => get_option('hope_currency_thousands_separator', ','),
    'hope_currency_decimal_separator' => get_option('hope_currency_decimal_separator', '.'),
    'hope_currency_number_of_decimals' => get_option('hope_currency_number_of_decimals', 2),
  ]);
}

/**
 * @return array
 */
function hope_all_options() {
  return hope_global_options_register();
}