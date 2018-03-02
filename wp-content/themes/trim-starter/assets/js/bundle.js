/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Entry point for TS /JS.
// add any global js functionality to the onload function
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(2);
window.onload = function (event) {
    var path = location.pathname;
    router_1.router(path);
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var blog_index_1 = __webpack_require__(3);
// routes object to assign pathname to function for that route
var routes = {
    // For example  "/": () => home()
    "/blog/": function () { return blog_index_1.blogIndex(); },
};
function router(url) {
    if (routes[url]) {
        routes[url]();
    }
}
exports.router = router;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function blogIndex() {
    var max;
    // default options for the loadMorePosts function
    var loadMoreOptions = {
        loadCount: 1,
        fetchCount: 3
    };
    // start spinner until server responds with posts
    function startSpin() {
        $('body').addClass('no-scroll');
        $('#spinner').removeClass('hidden');
    }
    function stopSpin() {
        $('body').removeClass('no-scroll');
        $('#spinner').addClass('hidden');
    }
    // AJAX for infinite scroll pagination
    function loadMorePosts(pageNumber, postsPerPage) {
        var query = 'action=infinite_scroll&page_no=' + pageNumber +
            '&loop_file=loop&posts_per_page=' + postsPerPage;
        $.ajax({
            url: '/wp-admin/admin-ajax.php',
            type: 'post',
            data: query,
            success: function (response) {
                if (response === 'max') {
                    max = true; // reached max pagination
                    $('#max-blog-posts').removeClass('hidden');
                    stopSpin();
                }
                else {
                    $('#blog-index').append(response);
                    stopSpin();
                }
            }
        });
    }
    // on init load posts
    function onInit() {
        startSpin();
        loadMorePosts(loadMoreOptions.loadCount, loadMoreOptions.fetchCount);
        loadMoreOptions.loadCount += 1;
    }
    $(window).on('scroll', function () {
        var scrollHeight = $(window).scrollTop();
        var windowHeight = $(window).height();
        var docHeight = $(document).height();
        if (!max && (scrollHeight + windowHeight) === docHeight) {
            startSpin();
            loadMorePosts(loadMoreOptions.loadCount, loadMoreOptions.fetchCount);
            loadMoreOptions.loadCount += 1;
        }
    });
    onInit();
}
exports.blogIndex = blogIndex;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \n}\n^\n      Invalid CSS after \"}\": expected 1 selector or at-rule, was \"© 2018 GitHub, Inc.\"\n      in /Users/miguellozano/code/trim/wordpress-starter-template/wp-content/themes/trim-starter/assets/sass/vendors/_animate.scss (line 3494, column 2)\n    at runLoaders (/Users/miguellozano/code/trim/wordpress-starter-template/wp-content/themes/trim-starter/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/miguellozano/code/trim/wordpress-starter-template/wp-content/themes/trim-starter/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/miguellozano/code/trim/wordpress-starter-template/wp-content/themes/trim-starter/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/miguellozano/code/trim/wordpress-starter-template/wp-content/themes/trim-starter/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (/Users/miguellozano/code/trim/wordpress-starter-template/wp-content/themes/trim-starter/node_modules/sass-loader/lib/loader.js:55:13)\n    at Object.<anonymous> (/Users/miguellozano/code/trim/wordpress-starter-template/wp-content/themes/trim-starter/node_modules/sass-loader/node_modules/async/dist/async.js:2257:31)\n    at Object.callback (/Users/miguellozano/code/trim/wordpress-starter-template/wp-content/themes/trim-starter/node_modules/sass-loader/node_modules/async/dist/async.js:958:16)\n    at options.error (/Users/miguellozano/code/trim/wordpress-starter-template/wp-content/themes/trim-starter/node_modules/node-sass/lib/index.js:294:32)");

/***/ })
/******/ ]);