
# murmur.js

  Small murmur hash implementation.

  This hash is for content, not for security.

  Written by: [Gary Court](https://github.com/garycourt)

## Install

```
npm install murmur.js
```

## Use

```js
let murmur = require('murmur.js')
let hash = murmur('some content')

// hash will be the same when the content is the same
murmur('some content') === murmur('some content')
murmur({ hello: 'world' }) === murmur({ hello: 'world' })
```

## License

MIT
