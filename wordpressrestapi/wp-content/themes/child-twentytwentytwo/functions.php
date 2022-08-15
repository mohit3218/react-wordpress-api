
<?php

add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );

function enqueue_parent_styles() {
   wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
}

add_filter( 'rest_prepare_attachment', 'attach_media_to_post',10,3);
function attach_media_to_post($response, $post, $request) {
    if($request->get_method()!='POST'){
        return $response;
    }
    $parameters = $request->get_params();
    if(isset($parameters['featured'])){
        set_post_thumbnail($parameters['featured'],$post->ID);
    }
    return $response;
}
?>