/* eslint-env browser */
/* global require */
// Shim to make jquery globally available
// needed for libraries depending on the global jquery object
const $ = require('jquery');
window.jQuery = $;
window.$ = $;
require('foundation-sites');

export default window.Foundation;

