import find from './find';
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
export default function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
        return arr.findIndex(function (cur) { return cur[prop] === value; });
    }
    // use `find` + `indexOf` if `findIndex` isn't supported
    var match = find(arr, function (obj) { return obj[prop] === value; });
    return arr.indexOf(match);
}
//# sourceMappingURL=findIndex.js.map