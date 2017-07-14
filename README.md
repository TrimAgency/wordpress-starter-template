# trim-starter

Upon cloning the repo, cd into trim-starter theme dir.
- `npm install` or `yarn install`

## WP_CONFIG SETUP
- open wp-config.php with text editor and replace DB_HOST with rackspace DB IP.
- add the following code under 'WP_DEBUG_DISPLAY':
`define('WP_HOME','http://localhost:8888'); define('WP_SITEURL','http://localhost:8888');`

## Docker Container:
- `docker-compose up`

## Webpack
- `webpack --watch` 
- changes to typescript or javascript files compile to bundle.js and bundle-min.js
- changes to SASS files compile to style.css


### Folder Structure
---------------
<pre style="max-height: 300px;"><code>Theme Root
    │    ├── assets
    │    │   ├── css
    |    |   |    └── style.css
    │    |   └──  js
    │    │   |    ├── app
    │    |   |    |   ├── app.ts
    │    │   |    └── vendor
    │    |   |    |   ├── modernizr
    │    |   |    |   └── selectivizr
    │    │   |    ├── bundle-min.js
    │    │   |    └── bundle.js
    │    ├── sass
    │    |   └── base
    │    |   └── components
    │    |    └── layouts
    │    |   └── pages
    │    |   └── vendors
    |    ├── _main.scss
    |    └── style.scss
    ├── library
    │   └── languages
    │   │   ├── some_like_it_neat.pot
    │   └── vendors
    │   │   ├── js
    │   │   ├── tgm-plugin-activation
    │   │   ├── tha-theme-hooks
    │   │   └── customizer
    │   ├── custom-header.php
    │   ├── extras.php
    │   ├── jetpack.php
    │   └── template-tags.php
    ├── page-templates
    │     └── template-parts
    |     |   ├── content-aside.php
    |     |   ├── content-audio.php
    |     |   ├── content-chat.php
    |     |   ├── content-gallery.php
    |     |   ├── content-image.php
    |     |   ├── content-link.php
    |     |   ├── content-none.php
    |     |   ├── content-page.php
    |     |   ├── content-quote.php
    |     |   ├── content-single.php
    |     |   ├── content-status.php
    |     |   ├── content-video.php
    |     |   └── content.php
    |     ├── template-home.php
    |     ├── template-landing-page.php
    ├── 404.php
    ├── archive.php
    ├── comments.php
    ├── footer.php
    ├── functions.php
    ├── gulpfile.js
    ├── header.php
    ├── index.php
    ├── license.txt
    ├── package.json
    ├── page.php
    ├── search.png
    ├── searchform.php
    ├── sidebar.php
    ├── single.php
    └── style.css</code></pre>
