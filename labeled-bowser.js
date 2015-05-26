/**
 * First, better, "set exports/return" option
 */
(function (define) {
    //The 'id' is optional, but recommended if this is
    //a popular web library that is used mostly in
    //non-AMD/Node environments. However, if want
    //to make an anonymous module, remove the 'id'
    //below, and remove the id use in the define shim.
    define('id', function (require) {
        var bowser = require('bowser');

        if (typeof bowser === 'undefined') {
            throw new Error('Bowser component is missing');
        }

        var browserName = bowser.name || 'unknown';
        var browserClassName = browserName.toLowerCase();

        var htmlTag = document.documentElement;
        htmlTag.className = (htmlTag.className + " " + browserClassName).trim();
        return bowser;
    });
}(typeof define === 'function' && define.amd ? define : function (id, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        //Node
        module.exports = factory(require);
    } else {
        //Create a global function. Only works if
        //the code does not have dependencies, or
        //dependencies fit the call pattern below.
        window[id] = factory(function (value) {
            return window[value];
        });
    }
}));