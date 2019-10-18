/**
 * Creating a router so my application becomes a SPA.
 */
const routes = {
  '/' : home,
  '/contact' : contactDetails
};

const rootDiv = document.querySelector('#root');
rootDiv.innerHTML = routes[window.location.pathname];

/**
 * Navigate function that any file can use to change the route.
 */
const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
  rootDiv.innerHTML = routes[pathname]
}

/**
 * Onpopstate function, this like onNavigate is also gloabally so i can use onNavigate in my Contact.js file
 */
window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname]
}