<?php
/**
 * Plugin Name:       school-review-dashbaord
 * Description:       Simple review dashbord plugin to display a school ratings and reviews system using Reactjs and WP Rest.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Tangmoh Francky
 * License:           MIT
 * License URI:       MIT
 * Text Domain:       reactwordpress
 */



// Security checks

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly


if(!function_exists('add_action')){
    die("Hi  there ! I'm just  a  plugin , not  much I can  do  when  called directly. ");
}


// Basic plugin setup

define('SCHOOLREVIEW__PLUGIN_FILE',__FILE__ );
define('SCHOOLREVIEW__PLUGIN_DIR',plugin_dir_path( __FILE__ )  );
define('SCHOOLREVIEW__PLUGIN_URL', plugins_url( '', SCHOOLREVIEW__PLUGIN_FILE));
define('SCHOOLREVIEW__TABLE_NAME', 'school_review_dashboard');


// Includes / src

require_once SCHOOLREVIEW__PLUGIN_DIR. '/process/admin/init.php';
require_once SCHOOLREVIEW__PLUGIN_DIR. '/process/admin/enqueue.php';
require_once SCHOOLREVIEW__PLUGIN_DIR. '/process/activate.php';
require_once SCHOOLREVIEW__PLUGIN_DIR. '/process/deactivate.php';
require_once SCHOOLREVIEW__PLUGIN_DIR. '/process/rest.php';





// Hooks

register_activation_hook( SCHOOLREVIEW__PLUGIN_FILE, 'school_review_activate_plugin' );
register_deactivation_hook( SCHOOLREVIEW__PLUGIN_FILE, 'school_review_deactivate_plugin' );


 add_action( 'wp_enqueue_scripts', 'school_review_enqueue_scripts' );
 // left the dashboard appears on top of comment form
 add_action( 'comment_form_top', 'school_review_dashboard_init'); //
 add_action( 'rest_api_init', 'school_review_rest_init');


    // add_action( 'admin_enqueue_scripts', 'school_review_dashboard_init' );
    // add_action( 'wp_dashboard_setup', 'school_review_dashboard_init');
    // add_action( 'rest_api_init', 'school_review_rest_init');

