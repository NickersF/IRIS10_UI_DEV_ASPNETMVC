/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
export default function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (_a) {
        var name = _a.name, enabled = _a.enabled;
        return enabled && name === modifierName;
    });
}
//# sourceMappingURL=isModifierEnabled.js.map