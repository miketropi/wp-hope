<?php 
/**
 * Welcome page 
 * 
 * @since 1.0.0
 * @package Hope
 */

function hope_welcome_page() {
  add_submenu_page( 
    'edit.php?post_type=hope-cause', 
    __('Welcome hope', 'hope'), 
    __('Welcome', 'hope'), 
    'manage_options', 
    'hope-welcome',
    'hope_welcome_page_callback', 
  );
}

add_action('admin_menu', 'hope_welcome_page');

function hope_welcome_page_callback() {
  ?>
  Hello...!
  <?
}