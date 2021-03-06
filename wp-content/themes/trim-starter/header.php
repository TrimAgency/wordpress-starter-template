<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *  
 * @package some_like_it_neat
 */
?>
<!DOCTYPE html>
<?php tha_html_before(); ?>
<html <?php language_attributes(); ?>>

<head>

    <!-- <?php tha_head_top(); ?> -->

	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<style type="text/css">
		<?php if ( 'no' === get_theme_mod( 'some-like-it-neat_post_format_support' ) ): ?>
			h1.entry-title:before {
				display: none;
			}
		<?php endif; ?>
	</style>

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

  <div id="spinner" class="hidden overlay-wrap">
     <div class="spinner-wrap">
      <div class="spinner">
        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
      </div> 
    </div>
  </div>


<div class="hfeed site">

		<header id="masthead" class="site-header wrap" role="banner">
			<!-- begin vertical nav bar -->
		  <nav class="js-menu">
				<?php
						wp_nav_menu(
							array(
								'theme_location' => 'primary-navigation',
								'items_wrap' => '<ul>%3$s</ul>'
							)
						);
				?>
		  </nav>

		</header><!-- #masthead -->

		<main class="site-main wrap" role="main">