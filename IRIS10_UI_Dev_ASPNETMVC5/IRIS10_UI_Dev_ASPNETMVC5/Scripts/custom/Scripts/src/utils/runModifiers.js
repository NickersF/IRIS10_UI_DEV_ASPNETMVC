import isFunction from './isFunction';
import findIndex from './findIndex';
import getClientRect from '../utils/getClientRect';
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
export default function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined
        ? modifiers
        : modifiers.slice(0, findIndex(modifiers, 'name', ends));
    modifiersToRun.forEach(function (modifier) {
        if (modifier['function']) { // eslint-disable-line dot-notation
            console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
        }
        var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
        if (modifier.enabled && isFunction(fn)) {
            // Add properties to offsets to make them a complete clientRect object
            // we do this before each modifier to make sure the previous one doesn't
            // mess with these values
            data.offsets.popper = getClientRect(data.offsets.popper);
            data.offsets.reference = getClientRect(data.offsets.reference);
            data = fn(data, modifier);
        }
    });
    return data;
}
//# sourceMappingURL=runModifiers.js.map