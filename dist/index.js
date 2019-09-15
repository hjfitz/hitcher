"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * usage:
 * ```ts
 *	const user = {
 * 		person: {
 * 			firstname: {
 * 				initial: 'H',
 * 				full: 'Harry',
 * 			}
 * 		}
 * 	}
 * const initial: string|undefined = chain(myObject, 'person', 'firstname', 'initial')
 * ```
 * @param obj object to change
 * @param keys keys to check
 */
function chain(obj) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    var cur = obj;
    var key = keys.shift();
    // exit when we run out of keys, or key doesn't exist on obj
    // no keys, found it
    // keys remain? cur[key] is falsy
    // use typeof for perf
    while (key && typeof cur[key] !== "undefined") {
        cur = cur[key];
        key = keys.pop();
    }
    if (keys.length)
        return undefined;
    return cur;
}
exports.default = chain;
