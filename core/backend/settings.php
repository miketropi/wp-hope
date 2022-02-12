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

function hope_tab_general_settings_template() {
  return apply_filters('hope/tab-general-settings-template', [

  ]);
}

function hope_tab_changelog_template() {
  return apply_filters('hope/tab-changelog-template', []);
}

function hope_tab_support_template() {
  return apply_filters('hope/tab-support-template', []);
} 

function hope_setting_tabs_register() {
  return apply_filters('hope/setting_tabs', [
    'general-settings' => [
      'tabName' => __('General Settings', 'hope'),
      'template' => hope_tab_general_settings_template(),
    ],
    'changelog' => [
      'tabName' => __('Changelog', 'hope'),
      'template' => hope_tab_changelog_template(),
    ],
    'support' => [
      'tabName' => __('Support', 'hope'),
      'template' => hope_tab_support_template(),
    ],
  ]); 
}