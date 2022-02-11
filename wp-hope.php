<?php 
/**
 * Plugin Name:       Hope - Donation Plugin and Fundraising
 * Plugin URI:        #
 * Description:       ...
 * Version:           1.0.1
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Beplus
 * Author URI:        #
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://example.com/my-plugin/
 * Text Domain:       wphope
 * Domain Path:       /languages
 */

{
  /**
   * Define
   */
  define('HOPE_VER', '1.0.1');
  define('HOPE_PLUGIN_URI', plugin_dir_url(__FILE__));
  define('HOPE_PLUGIN_DIR', plugin_dir_path(__FILE__));
}

{
  /**
   * Core
   */
  require(HOPE_PLUGIN_DIR . '/core/backend/loader.php');

  require(HOPE_PLUGIN_DIR . '/core/static.php');
  require(HOPE_PLUGIN_DIR . '/core/helpers.php');
  require(HOPE_PLUGIN_DIR . '/core/hooks.php');
  require(HOPE_PLUGIN_DIR . '/core/ajax.php');
}