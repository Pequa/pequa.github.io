<?php

add_action('after_setup_theme','bw_images_size');
function bw_images_size() {
	$crop = get_option('thumbnail_crop')==1 ? true : false;
	add_image_size('thumbnail-bw', get_option('thumbnail_size_w'), get_option('thumbnail_size_h'), $crop);
}

add_filter('wp_generate_attachment_metadata','bw_images_filter');
function bw_images_filter($meta) {
	$file = wp_upload_dir();
	$file = trailingslashit($file['path']).$meta['sizes']['thumbnail-bw']['file'];
	list($orig_w, $orig_h, $orig_type) = @getimagesize($file);
	$image = wp_load_image($file);
	imagefilter($image, IMG_FILTER_GRAYSCALE);
	//imagefilter($image, IMG_FILTER_GAUSSIAN_BLUR);
	switch ($orig_type) {
		case IMAGETYPE_GIF:
			$file = str_replace(".gif", "-bw.gif", $file);
			imagegif( $image, $file );
			break;
		case IMAGETYPE_PNG:
			$file = str_replace(".png", "-bw.png", $file);
			imagepng( $image, $file );
			break;
		case IMAGETYPE_JPEG:
			$file = str_replace(".jpg", "-bw.jpg", $file);
			imagejpeg( $image, $file );
			break;
	}
	return $meta;
}

if(function_exists('has_post_thumbnail') && has_post_thumbnail()) { 
	echo '<a href="'.get_permalink().'" class="fade-image">';
	the_post_thumbnail('thumbnail-bw', array('class'=>'fade-image-a'));
	the_post_thumbnail('thumbnail', array('class'=>'fade-image-b'));
	echo '</a>';
}