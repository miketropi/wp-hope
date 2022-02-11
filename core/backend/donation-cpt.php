<?php 
/**
 * Donation custom port type 
 * 
 * @since 1.0.0
 */

function hope_register_donation_cpt() {

  $labels = [
    'name' => _x( 'Donations', 'Post type general name', 'hope' ),
    'singular_name' => _x( 'Donation', 'Post type singular name', 'hope' ),
    'menu_name' => _x( 'Donations', 'Admin Menu text', 'hope' ),
    'name_admin_bar' => _x( 'Donation', 'Add New on Toolbar', 'hope' ),
    'add_new' => __( 'Add Donation', 'hope' ),
    'add_new_item' => __( 'Add New Donation', 'hope' ),
    'new_item' => __( 'New Donation', 'hope' ),
    'edit_item' => __( 'Edit Donation', 'hope' ),
    'view_item' => __( 'View Donation', 'hope' ),
    'all_items' => __( 'Donations', 'hope' ),
    'search_items' => __( 'Search Donations', 'hope' ),
    'parent_item_colon' => __( 'Parent Donations:', 'hope' ),
    'not_found' => __( 'No Donations found.', 'hope' ),
    'not_found_in_trash' => __( 'No Donations found in Trash.', 'hope' ),
    'featured_image' => _x( 'Donation Cover Image', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'hope' ),
    'set_featured_image' => _x( 'Set cover image', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'hope' ),
    'remove_featured_image' => _x( 'Remove cover image', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'hope' ),
    'use_featured_image' => _x( 'Use as cover image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'hope' ),
    'archives' => _x( 'Donation archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'hope' ),
    'insert_into_item' => _x( 'Insert into Donation', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'hope' ),
    'uploaded_to_this_item' => _x( 'Uploaded to this Donation', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'hope' ),
    'filter_items_list' => _x( 'Filter Donations list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'hope' ),
    'items_list_navigation' => _x( 'Donations list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'hope' ),
    'items_list' => _x( 'Donations list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'hope' ),
  ];

  $args = [
    'labels' => $labels,
    'exclude_from_search' => false,
    'public' => true,
    'has_archive' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'rewrite' => [ 'slug' => 'donation' ],
    'supports' => [ 'title', 'author' ],
    'show_in_menu' => 'edit.php?post_type=hope-cause'
  ];

  /**
   * Register custom postype
   * 
   */
  register_post_type('hope-donation', $args);
}

add_action('init', 'hope_register_donation_cpt');