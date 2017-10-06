# trim-starter

Upon cloning the repo, cd into trim-starter theme dir.
- `yarn install`

## WP_CONFIG SETUP
- add the following code under 'WP_DEBUG_DISPLAY':
`define('WP_HOME','http://localhost:8000'); define('WP_SITEURL','http://localhost:8000');`

## Docker Container:
- `docker-compose up`

## Webpack
- `webpack --watch` 
- changes to typescript or javascript files compile to bundle.js and bundle-min.js
- changes to SASS files compile to assets/css/style.css

## DeployIgnore
After changing the trim-starter folder name to your project name, open `.deployignore` and 
change all references to folder `trim-starter` to your new folder name.  

## 3rd party js libraries
Place files in `assets/js/vendor/` and enqueue file in `functions.php`. In your typescript files import statement
should point to file in vendor folder.

## Lazy loaded blog index
In the wordpress admin dashboard, create a page called "blog" and assign template: "Full-Width, Blog". "Full-Width, Blog" 
page template is located in the theme folder: [page-templates/template-blog.php](https://github.com/TrimAgency/wordpress-starter-template/blob/master/wp-content/themes/trim-starter/page-templates/template-blog.php). 
Once the "blog" page is published navigating to `your sites url/blog/` will lazy load blog posts 3 at a time. To change the 
loading configuration make your changes in [blog-index.ts](https://github.com/TrimAgency/wordpress-starter-template/blob/master/wp-content/themes/trim-starter/assets/js/app/routes/blog-index.ts).

## Global javascript
If you need logic to run globaly, add an import statement to [app.ts](https://github.com/TrimAgency/wordpress-starter-template/blob/master/wp-content/themes/trim-starter/assets/js/app/app.ts)
Then add your import to the window.onload callback.
```
import { myAwesomeFunction } from "./global/awesome"

window.onload = (event) -> {
  // add after router(path)
  myAwesomeFunction()
}
```

## URL specific javascript
For logic that is specific to a page, add an import staetment fo [router.ts](https://github.com/TrimAgency/wordpress-starter-template/blob/master/wp-content/themes/trim-starter/assets/js/app/app.ts)
Add your route and import to the routes object.
```
import { myAwesomeHomeThang } from './routes/home.ts';

const routes = {
  "/home": () => myAwesomeHomeThang()
}

```
For consistency please name your file the name of the route and place in `/assets/js/app/routes/` dir.

### Theme Folder Structure
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
    │    │   |    ├── bundle-min.js
    │    │   |    └── bundle.js
    │    ├── sass
    │    |   └── base
    │    |   └── components
    │    |   └── layouts
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
