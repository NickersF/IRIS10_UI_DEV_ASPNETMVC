var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Utils
import debounce from './utils/debounce';
import isFunction from './utils/isFunction';
// Methods
import update from './methods/update';
import destroy from './methods/destroy';
import enableEventListeners from './methods/enableEventListeners';
import disableEventListeners from './methods/disableEventListeners';
import Defaults from './methods/defaults';
import placements from './methods/placements';
var Popper = /** @class */ (function () {
    /**
     * Creates a new Popper.js instance.
     * @class Popper
     * @param {Element|referenceObject} reference - The reference element used to position the popper
     * @param {Element} popper - The HTML / XML element used as the popper
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
    function Popper(reference, popper, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        /**
         * Schedules an update. It will run on the next UI update available.
         * @method scheduleUpdate
         * @memberof Popper
         */
        this.scheduleUpdate = function () { return requestAnimationFrame(_this.update); };
        // make update() debounced, so that it only runs at most once-per-tick
        this.update = debounce(this.update.bind(this));
        // with {} we create a new object with the options inside it
        this.options = __assign(__assign({}, Popper.Defaults), options);
        // init state
        this.state = {
            isDestroyed: false,
            isCreated: false,
            scrollParents: [],
        };
        // get reference and popper elements (allow jQuery wrappers)
        this.reference = reference && reference.jquery ? reference[0] : reference;
        this.popper = popper && popper.jquery ? popper[0] : popper;
        // Deep merge modifiers options
        this.options.modifiers = {};
        Object.keys(__assign(__assign({}, Popper.Defaults.modifiers), options.modifiers)).forEach(function (name) {
            _this.options.modifiers[name] = __assign(__assign({}, (Popper.Defaults.modifiers[name] || {})), (options.modifiers ? options.modifiers[name] : {}));
        });
        // Refactoring modifiers' list (Object => Array)
        this.modifiers = Object.keys(this.options.modifiers)
            .map(function (name) { return (__assign({ name: name }, _this.options.modifiers[name])); })
            // sort the modifiers by order
            .sort(function (a, b) { return a.order - b.order; });
        // modifiers have the ability to execute arbitrary code when Popper.js get inited
        // such code is executed in the same order of its modifier
        // they could add new properties to their options configuration
        // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
        this.modifiers.forEach(function (modifierOptions) {
            if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
                modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
            }
        });
        // fire the first update to position the popper in the right place
        this.update();
        var eventsEnabled = this.options.eventsEnabled;
        if (eventsEnabled) {
            // setup event listeners, they will take care of update the position in specific situations
            this.enableEventListeners();
        }
        this.state.eventsEnabled = eventsEnabled;
    }
    // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs
    Popper.prototype.update = function () {
        return update.call(this);
    };
    Popper.prototype.destroy = function () {
        return destroy.call(this);
    };
    Popper.prototype.enableEventListeners = function () {
        return enableEventListeners.call(this);
    };
    Popper.prototype.disableEventListeners = function () {
        return disableEventListeners.call(this);
    };
    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */
    Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
    Popper.placements = placements;
    Popper.Defaults = Defaults;
    return Popper;
}());
export default Popper;
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */
//# sourceMappingURL=index.js.map