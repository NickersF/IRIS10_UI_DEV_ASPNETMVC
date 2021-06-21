import find from './find';
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
export default function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function (_a) {
        var name = _a.name;
        return name === requestingName;
    });
    var isRequired = !!requesting &&
        modifiers.some(function (modifier) {
            return (modifier.name === requestedName &&
                modifier.enabled &&
                modifier.order < requesting.order);
        });
    if (!isRequired) {
        var requesting_1 = "`" + requestingName + "`";
        var requested = "`" + requestedName + "`";
        console.warn(requested + " modifier is required by " + requesting_1 + " modifier in order to work, be sure to include it before " + requesting_1 + "!");
    }
    return isRequired;
}
//# sourceMappingURL=isModifierRequired.js.map