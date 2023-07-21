<?php


/**
 * Add a new dashboard widget.
 */
function school_review_dashboard_init() {
    require_once  SCHOOLREVIEW__PLUGIN_DIR. 'templates/app.php';

	// wp_add_dashboard_widget( 'dashboard_widget', 'School review rating', 'school_review_widget_init' );
}
 



/**
 * Init Widget function
 */

 function school_review_widget_init() {
    require_once  SCHOOLREVIEW__PLUGIN_DIR. 'templates/app.php';


}
