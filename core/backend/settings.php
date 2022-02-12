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
    [
      '_key' => 'dbc2347a426444bcaff040b9812890fc',
      'tag' => 'BlockContent',
      'attrs' => [
        'heading' => __('General Settings', 'hope'),
      ],
      'children' => wpautop(__('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', 'hope'))
    ],
    [
      '_key' => 'dbc2347a426444bcaff040b9812890fd',
      'tag' => 'Tabs',
      'attrs' => [
        'defaultActiveKey' => '1'
      ],
      'children' => [
        [
          '_key' => '1',
          'tag' => 'TabPane',
          'attrs' => [
            'tab' => __('General', 'hope'),
          ],
          'children' => 'Tab content 1...!'
        ],
        [
          '_key' => '2',
          'tag' => 'TabPane',
          'attrs' => [
            'tab' => __('Payment Gateways', 'hope')
          ],
          'children' => 'Tab content 2...!'
        ],
      ]
    ],
    [
      '_key' => 'dbc2347a426444bcaff040b9812890fg',
      'tag' => 'BlockContent',
      'attrs' => [
        'heading' => __('General Settings', 'hope'),
      ],
      'children' => wpautop(__('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', 'hope'))
    ],
    [
      '_key' => 'a7b6b783e17a4249baea508bbebff895',
      'tag' => 'Select',
      'attrs' => [
        'defaultValue' => 'a',
        'options' => [
          'a' => 'Option A',
          'b' => 'Option B',
        ]
      ]
    ]
  ]);
}

function hope_tab_changelog_template() {
  return apply_filters('hope/tab-changelog-template', [
    
  ]);
}

function hope_tab_support_template() {
  return apply_filters('hope/tab-support-template', []);
} 

function hope_setting_tabs_register() {
  return apply_filters('hope/setting_tabs', [
    'settings' => [
      'label' => __('Settings', 'hope'),
      'template' => hope_tab_general_settings_template(),
    ],
    'changelog' => [
      'label' => __('Changelog', 'hope'),
      'template' => hope_tab_changelog_template(),
    ],
    'support' => [
      'label' => __('Support', 'hope'),
      'template' => hope_tab_support_template(),
    ],
  ]); 
}