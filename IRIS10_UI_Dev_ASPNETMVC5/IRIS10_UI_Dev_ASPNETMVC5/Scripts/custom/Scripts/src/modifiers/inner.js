import getClientRect from '../utils/getClientRect';
import getOppositePlacement from '../utils/getOppositePlacement';
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
export default function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var _a = data.offsets, popper = _a.popper, reference = _a.reference;
    var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
    var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
    popper[isHoriz ? 'left' : 'top'] =
        reference[basePlacement] -
            (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);
    return data;
}
//# sourceMappingURL=inner.js.map