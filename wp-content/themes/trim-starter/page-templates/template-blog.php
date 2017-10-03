<?php
/**
 * Template Name: Full-Width, Blog 
 *
 * This template display content at full with, with no sidebars.
 * Please note that this is the WordPress construct of pages and that other 'pages' on your WordPress site will use a different template.
 *
 * @package some_like_it_neat
 */
/** important! keep below code in case PO changes mind! */
/* $args = array( 'post_type' => 'post', */
/*                'post_status' => 'publish', */
/*                'posts_per_page' => 1, */
/*                'category_name' => 'Featured'  ); */

/* $query = new WP_Query( $args ); */

get_header(); ?>

  <main id="main">

    <h1 class="blog-header lowercase page-title">Never Stop Breathing</h1>

    <section id="blog-index" class="section"></section>

    <h4 id="max-blog-posts" class="hidden blog-max-message center-text">check back later for more blog posts!</h4>

 </main>

<?php get_footer(); ?>

