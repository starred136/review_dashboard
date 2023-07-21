<?php 
/*
* function clears all the mock data, since the plugin is not activated
*
*
*/


function school_review_deactivate_plugin(){   


global $wpdb;
$wpdb->query("DROP TABLE IF EXISTS `" . $wpdb->prefix . SCHOOLREVIEW__TABLE_NAME . "`" );




}