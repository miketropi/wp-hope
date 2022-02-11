<?php 
/**
 * Register custom post type "hope-cause"
 * 
 * @since 1.0.1
 * @package Hope
 */

function hope_register_cause_cpt() {
  $icon = 'dashicons-star-filled';
  
  $labels = [
    'name' => _x( 'Causes', 'Post type general name', 'hope' ),
    'singular_name' => _x( 'Cause', 'Post type singular name', 'hope' ),
    'menu_name' => _x( 'Hope', 'Admin Menu text', 'hope' ),
    'name_admin_bar' => _x( 'Cause', 'Add New on Toolbar', 'hope' ),
    'add_new' => __( 'Add Cause', 'hope' ),
    'add_new_item' => __( 'Add New Cause', 'hope' ),
    'new_item' => __( 'New Cause', 'hope' ),
    'edit_item' => __( 'Edit Cause', 'hope' ),
    'view_item' => __( 'View Cause', 'hope' ),
    'all_items' => __( 'All Causes', 'hope' ),
    'search_items' => __( 'Search Causes', 'hope' ),
    'parent_item_colon' => __( 'Parent Causes:', 'hope' ),
    'not_found' => __( 'No Causes found.', 'hope' ),
    'not_found_in_trash' => __( 'No Causes found in Trash.', 'hope' ),
    'featured_image' => _x( 'Cause Cover Image', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'hope' ),
    'set_featured_image' => _x( 'Set cover image', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'hope' ),
    'remove_featured_image' => _x( 'Remove cover image', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'hope' ),
    'use_featured_image' => _x( 'Use as cover image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'hope' ),
    'archives' => _x( 'Cause archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'hope' ),
    'insert_into_item' => _x( 'Insert into Cause', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'hope' ),
    'uploaded_to_this_item' => _x( 'Uploaded to this Cause', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'hope' ),
    'filter_items_list' => _x( 'Filter Causes list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'hope' ),
    'items_list_navigation' => _x( 'Causes list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'hope' ),
    'items_list' => _x( 'Causes list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'hope' ),
  ];

  $args = [
    'labels' => $labels,
    'exclude_from_search' => false,
    'public' => true,
    'has_archive' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'rewrite' => [ 'slug' => 'cause' ],
    'supports' => ['title', 'editor', 'author', 'thumbnail', 'excerpt'],
    'taxonomies' => [ 'cause_tax' ],
    'menu_position' => 25,
    'menu_icon' => $icon,
  ];

  register_post_type('hope-cause', $args);
}

add_action('init', 'hope_register_cause_cpt');