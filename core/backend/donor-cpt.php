<?php 
/**
 * Donor custom post type
 * 
 * @since 1.0.1
 */

function hope_register_donor_cpt() {

  $labels = [
    'name' => _x( 'Donors', 'Post type general name', 'hope' ),
    'singular_name' => _x( 'Donor', 'Post type singular name', 'hope' ),
    'menu_name' => _x( 'Donors', 'Admin Menu text', 'hope' ),
    'name_admin_bar' => _x( 'Donor', 'Add New on Toolbar', 'hope' ),
    'add_new' => __( 'Add Donor', 'hope' ),
    'add_new_item' => __( 'Add New Donor', 'hope' ),
    'new_item' => __( 'New Donor', 'hope' ),
    'edit_item' => __( 'Edit Donor', 'hope' ),
    'view_item' => __( 'View Donor', 'hope' ),
    'all_items' => __( 'Donors', 'hope' ),
    'search_items' => __( 'Search Donors', 'hope' ),
    'parent_item_colon' => __( 'Parent Donors:', 'hope' ),
    'not_found' => __( 'No Donors found.', 'hope' ),
    'not_found_in_trash' => __( 'No Donors found in Trash.', 'hope' ),
    'featured_image' => _x( 'Donor Cover Image', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'hope' ),
    'set_featured_image' => _x( 'Set cover image', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'hope' ),
    'remove_featured_image' => _x( 'Remove cover image', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'hope' ),
    'use_featured_image' => _x( 'Use as cover image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'hope' ),
    'archives' => _x( 'Donor archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'hope' ),
    'insert_into_item' => _x( 'Insert into Donor', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'hope' ),
    'uploaded_to_this_item' => _x( 'Uploaded to this Donor', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'hope' ),
    'filter_items_list' => _x( 'Filter Donors list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'hope' ),
    'items_list_navigation' => _x( 'Donors list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'hope' ),
    'items_list' => _x( 'Donors list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'hope' ),
  ];

  $args = [
    'labels' => $labels,
    'exclude_from_search' => false,
    'public' => true,
    'has_archive' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'rewrite' => ['slug' => 'donor'],
    'supports' => ['title', 'author'],
    'show_in_menu' => 'edit.php?post_type=hope-cause'
  ];

  register_post_type('hope-donor', $args);
}

add_action('init', 'hope_register_donor_cpt');