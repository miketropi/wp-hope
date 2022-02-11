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