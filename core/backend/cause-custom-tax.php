<?php 
/**
 * Custom taxonomy
 * 
 * @since 1.0.1
 * @package Hope
 */
{
  /**
   * Register Cause Tax
   */
  function hope_register_cause_tax() {
    $labels = [
      'name' => _x( 'Categories', 'taxonomy general name', 'hope' ),
      'singular_name' => _x( 'Category', 'taxonomy singular name', 'hope' ),
      'search_items' => __( 'Search Categories', 'hope' ),
      'popular_items' => __( 'Popular Categories', 'hope' ),
      'all_items' => __( 'All Categories', 'hope' ),
      'edit_item' => __( 'Edit Category', 'hope' ),
      'update_item' => __( 'Update Category', 'hope' ),
      'add_new_item' => __( 'Add New Category', 'hope' ),
      'new_item_name' => __( 'New Category Name', 'hope' ),
      'separate_items_with_commas' => __( 'Separate Categories with commas', 'hope' ),
      'add_or_remove_items' => __( 'Add or remove Categories', 'hope' ),
      'choose_from_most_used' => __( 'Choose from the most used Category', 'hope' ),
      'not_found' => __( 'No Category found.', 'hope' ),
      'menu_name' => __( 'Categories', 'hope' ),
    ];

    $args = [
      'hierarchical'          => true,
      'labels'                => $labels,
      'show_ui'               => true,
      'show_admin_column'     => false,
      'update_count_callback' => '_update_post_term_count',
      'query_var'             => true,
      'rewrite'               => [ 'slug' => 'cause_tax' ]
    ];

    register_taxonomy('cause_tax', 'hope-cause', $args);
  }

  add_action('init', 'hope_register_cause_tax');
}

add_action('admin_menu', function() {
  add_submenu_page(
    'hope-welcome',
    __('Categories', 'hope'),
    __('Categories', 'hope'),
    'manage_options',
    'edit-tags.php?taxonomy=cause_tax&post_type=hope-cause'
  );
});