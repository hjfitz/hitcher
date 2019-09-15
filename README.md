# 🎩 mitr
> Optional object chaining, but now

## Install
```zsh
yarn add $libname
```

## Usage
```ts
import chain from '$libname'

const myObj = {
	person: {
		name: {
			first: 'Harry',
			last: 'Fitz'
		},
		github: '@hjfitz'
	}
}

const 
```

## API
### chain(obj: object, ...keys: string|number)
Follows `...keys` in `obj`, looking for the value of `obj[key[0]][key[1]]...[key[n-1]][key[n]]`

## Inspiration
[Optional object chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) - a new feature to land in ES!