<?php


/**
 * Register new route to rest api
 */
function school_review_rest_init() {
    // route url: domain.com/wp-json/$namespace/$route
    
    $namespace = 'api/v1';
    $route     = 'school';
    
    
     register_rest_route($namespace, $route, array(
        'methods'   => WP_REST_Server::CREATABLE ,
        'callback'  => 'school_review_rest_endpoint',
        'permission_callback' => function () {
            return true;
          },
        'args'      => ['rating' => ['required' => true, 'comment' => 'varchar',
        ]]
    ));
}




/**
 * Init Widget function
 */
function school_review_rest_endpoint($request) {

    global $wpdb;

    // $comment  =  sanitize_text_field($request->get_param('comment'));
    
    $range  =  sanitize_text_field($request->get_param('range'));
    $tablename = $wpdb->prefix . SCHOOLREVIEW__TABLE_NAME;


    // quering data

    try {
        $btc_range = $wpdb->get_results("SELECT * FROM ". $tablename." WHERE time <= CURRENT_DATE ORDER BY time DESC LIMIT ". $range);
        return  new WP_REST_Response($btc_range);


    } catch (\Throwable $th) {
        return new WP_Error('Wrong range');

    }


    
  



}