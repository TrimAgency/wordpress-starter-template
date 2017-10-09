import { blogIndex } from './routes/blog-index';

// routes object to assign pathname to function for that route
const routes = {
    // For example  "/": () => home()
    "/blog/": () => blogIndex(),
};

export function router(url): void {

  if( routes[url] ) {
    routes[url]();
  }

}
