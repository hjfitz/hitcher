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
export default function chain(obj: object, ...keys: string[]|number[]) {
	let cur: object = obj
	let key = keys.shift()

	// exit when we run out of keys, or key doesn't exist on obj
	// no keys, found it
	// keys remain? cur[key] is falsy
	// use typeof for perf
	while (key && typeof (<any>cur)[key] !== "undefined") {
			cur = (<any>cur)[key]
			key = keys.pop()
	}
	if (keys.length) return undefined
	return cur
}