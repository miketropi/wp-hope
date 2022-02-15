<?php 
/**
 * Settings 
 * @since 1.0.1
 * 
 */

function hope_settings_page() {
  add_submenu_page( 
    'edit.php?post_type=hope-cause', 
    __('Settings', 'hope'), 
    __('Settings', 'hope'), 
    'manage_options', 
    'hope-settings',
    'hope_settings_page_callback', 
  );
}

add_action('admin_menu', 'hope_settings_page');

function hope_settings_page_callback() {
  ?>
  <div id="hope_settings"></div>
  <?
}