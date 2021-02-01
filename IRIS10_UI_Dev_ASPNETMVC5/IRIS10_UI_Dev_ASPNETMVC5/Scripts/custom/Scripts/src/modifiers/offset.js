import isNumeric from '../utils/isNumeric';
import getClientRect from '../utils/getClientRect';
import find from '../utils/find';
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
export function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];
    // If it's not a number it's an operator, I guess
    if (!value) {
        return str;
    }
    if (unit.indexOf('%') === 0) {
        var element = void 0;
        switch (unit) {
            case '%p':
                element = popperOffsets;
                break;
            case '%':
            case '%r':
            default:
                element = referenceOffsets;
        }
        var rect = getClientRect(element);
        return rect[measurement] / 100 * value;
    }
    else if (unit === 'vh' || unit === 'vw') {
        // if is a vh or vw, we calculate the size based on the viewport
        var size = void 0;
        if (unit === 'vh') {
            size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        }
        else {
            size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        }
        return size / 100 * value;
    }
    else {
        // if is an explicit pixel unit, we get rid of the unit and keep the value
        // if is an implicit unit, it's px, and we return just the value
        return value;
    }
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
export function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0];
    // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one
    var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;
    // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
    var fragments = offset.split(/(\+|\-)/).map(function (frag) { return frag.trim(); });
    // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space
    var divider = fragments.indexOf(find(fragments, function (frag) { return frag.search(/,|\s/) !== -1; }));
    if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
        console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    }
    // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.
    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1
        ? [
            fragments
                .slice(0, divider)
                .concat([fragments[divider].split(splitRegex)[0]]),
            [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1)),
        ]
        : [fragments];
    // Convert the values with units to absolute pixels to allow our computations
    ops = ops.map(function (op, index) {
        // Most of the units rely on the orientation of the popper
        var measurement = (index === 1 ? !useHeight : useHeight)
            ? 'height'
            : 'width';
        var mergeWithPrevious = false;
        return (op
            // This aggregates any `+` or `-` sign that aren't considered operators
            // e.g.: 10 + +5 => [10, +, +5]
            .reduce(function (a, b) {
            if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
                a[a.length - 1] = b;
                mergeWithPrevious = true;
                return a;
            }
            else if (mergeWithPrevious) {
                a[a.length - 1] += b;
                mergeWithPrevious = false;
                return a;
            }
            else {
                return a.concat(b);
            }
        }, [])
            // Here we convert the string values into number values (in px)
            .map(function (str) { return toValue(str, measurement, popperOffsets, referenceOffsets); }));
    });
    // Loop trough the offsets arrays and execute the operations
    ops.forEach(function (op, index) {
        op.forEach(function (frag, index2) {
            if (isNumeric(frag)) {
                offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
            }
        });
    });
    return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
export default function offset(data, _a) {
    var offset = _a.offset;
    var placement = data.placement, _b = data.offsets, popper = _b.popper, reference = _b.reference;
    var basePlacement = placement.split('-')[0];
    var offsets;
    if (isNumeric(+offset)) {
        offsets = [+offset, 0];
    }
    else {
        offsets = parseOffset(offset, popper, reference, basePlacement);
    }
    if (basePlacement === 'left') {
        popper.top += offsets[0];
        popper.left -= offsets[1];
    }
    else if (basePlacement === 'right') {
        popper.top += offsets[0];
        popper.left += offsets[1];
    }
    else if (basePlacement === 'top') {
        popper.left += offsets[0];
        popper.top -= offsets[1];
    }
    else if (basePlacement === 'bottom') {
        popper.left += offsets[0];
        popper.top += offsets[1];
    }
    data.popper = popper;
    return data;
}
//# sourceMappingURL=offset.js.map