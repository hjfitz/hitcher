#  🔗 Hitcher
> Optional object chaining, but now

## Install
```zsh
yarn add hitcher
```

## Usage
```ts
import hitch from 'hitcher'

const myObj = {
	person: {
		name: {
			first: 'Harry',
			last: 'Fitz'
		},
		github: '@hjfitz'
	}
}

const first = hitch(myObj, 'person', 'name', 'first')
```

## API
### chain(obj: object, ...keys: string|number)
Follows `...keys` in `obj`, to find the value. Better than doing `const foo = obj && obj[key] && obj[key][key2] && obj[key][key2][key3]` and so on.

Soon, one can use `obj?.key?.key2?.key3`.

## Inspiration
[Optional object chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) - a new feature to land in ES!