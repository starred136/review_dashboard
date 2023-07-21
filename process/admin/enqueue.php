<?php

/**
 * Enqueue scripts and styles.
 *
 * @return void
 */

 function school_review_enqueue_scripts() {
    wp_enqueue_style( 'school-review-style', SCHOOLREVIEW__PLUGIN_URL . '/build/index.css' );
    wp_enqueue_script( 'school-review-script', SCHOOLREVIEW__PLUGIN_URL. '/build/index.js', array( 'wp-element' ), '1.0.0', true );
}

