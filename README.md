#  🔗 Hitcher
> Optional object chaining, but now

## Install
```zsh
yarn add hitcher
```

## Usage
```ts
import hitch from '$hitcher'

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
Follows `...keys` in `obj`, looking for the value of `obj[key[0]][key[1]]...[key[n-1]][key[n]]`

## Inspiration
[Optional object chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) - a new feature to land in ES!