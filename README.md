# trim-starter

Upon cloning the repo, cd into trim-starter theme dir.
- `npm install` or `yarn install`

Docker Container:
- `docker-compose up`

Gulp task manager is set to handle Sass to CSS minification, JSHint, browserSync and theme builder for production ready zip file to ftp theme.
#### Gulp Tasks
  * `gulp` This command simply starts up Gulp and watches your scss, js and php filder for changes, writes them out and refreshes the browser for you.
  * `gulp build` This command removes uneccessary files and packs up the required files into a nice and neat, installable, zip package.

- SASS is located in ./assets/sass. Any new SASS files prepend with an underscore to ensure it is included in the main STYLE.SCSS
- SASS uses bourbon and neat.

- JS is located in ./assets/js/app.

- page templates are located in the ./assets/page-templates/.

- font-awesome in installed, wp_enqueued in functions.php file.

- Angular and GreenSock libraries are enqued in functtions php file. To use uncomment the appropriate libs.

- Install the following plug-ins:  ACF to REST API, Advanced Custom Fields, Better REST API Featured Images,
                                   Contact Form 7, Contact DB, Debug Bar, Debug Bar Console, WP REST API, WP-CORS

- Sample code for Custom Post Types located in functions.php file.  


### Folder Structure
---------------
<pre style="max-height: 300px;"><code>Theme Root
    │    ├── assets
    │    │   ├── bower_components
    │    │   |   ├── bi-app-sass
    │    │   |   ├── bourbon
    │    │   |   └── neat
    │    │   ├── css
    |    |   |    ├── rtl-min.css
    |    |   |    ├── rtl.css
    |    |   |    ├── style-min.css
    |    |   |    └── style.css
    │    |   └──  js
    │    │   |    ├── app
    │    │   |    └── vendor
    │    |   |    |   ├── flexnav
    │    |   |    |   ├── hoverintent
    │    |   |    |   ├── modernizr
    │    |   |    |   └── selectivizr
    │    │   |    ├── production-min.js
    │    │   |    └── development.js
    │    ├── sass
    │    |   └── base (Bitters)
    │    |   └── components
    |    |    |   ├── _buttons.scss
    |    |    |   ├── _dashicons.scss
    |    |    |   ├── _flexnav.scss
    |    |    |   ├── _navigation.scss
    |    |    |   ├── _ui-bourbon.scss
    |    |    |   └── _variables.scss
    │    |    └── layouts
    |    |    |   ├── _content.scss
    |    |    |   ├── _footer.scss
    |    |    |   ├── _header.scss
    |    |    |   ├── _navigation.scss
    |    |    |   ├── _normalize.scss
    |    |    |   ├── _sidebar.scss
    |    |    |   ├── _structure.scss
    |    |    |   └── _typography.scss
    |    ├── _app.scss
    |    ├── _grid-settings.scss
    |    ├── _rtl.scss
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
    |     ├── template-team.php
    |     ├── template-portfolio.php
    |     └── template-project.php
    ├── .bowerrc
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
    ├── README.md
    ├── rtl.css
    ├── search.png
    ├── searchform.php
    ├── sidebar.php
    ├── single.php
    └── style.css</code></pre>
