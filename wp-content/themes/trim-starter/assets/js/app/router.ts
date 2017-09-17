// For example import { home } from './routes/home';

// routes object to assign pathname to function for that route
const routes = {
    // For example  "/": () => home()
};

export function router(url): void {

    routes[url]();

}
