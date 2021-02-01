import getWindowSizes from './getWindowSizes';
import getClientRect from './getClientRect';
/**
 * Get the position of the given element, relative to its offset parent
 * @method
 * @memberof Popper.Utils
 * @param {Element} element
 * @return {Object} position - Coordinates of the element and its `scrollTop`
 */
export default function getOffsetRect(element) {
    var elementRect;
    if (element.nodeName === 'HTML') {
        var _a = getWindowSizes(element.ownerDocument), width = _a.width, height = _a.height;
        elementRect = {
            width: width,
            height: height,
            left: 0,
            top: 0,
        };
    }
    else {
        elementRect = {
            width: element.offsetWidth,
            height: element.offsetHeight,
            left: element.offsetLeft,
            top: element.offsetTop,
        };
    }
    // position
    return getClientRect(elementRect);
}
//# sourceMappingURL=getOffsetRect.js.map