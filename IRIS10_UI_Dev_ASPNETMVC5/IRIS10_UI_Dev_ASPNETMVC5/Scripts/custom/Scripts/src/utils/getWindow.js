/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
export default function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
}
//# sourceMappingURL=getWindow.js.map