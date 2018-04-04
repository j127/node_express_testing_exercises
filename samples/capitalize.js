/**
 * Capitalize the first letter of a string and downcases the rest.
 *
 * @param {String} str
 */
const capitalize = str => {
    const firstLetter = str.charAt(0).toUpperCase();
    const rest = str.slice(1).toLowerCase();
    return firstLetter + rest;
};

module.exports = capitalize;