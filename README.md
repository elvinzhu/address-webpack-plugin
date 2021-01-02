# address-webpack-plugin

print access info（ipv4 address currently） after webpack compilation done

# installation

`npm install address-webpack-plugin --save-dev`

# how to use

```javascript
// webpack.config.js
const AddressPlugin = require('address-webpack-plugin');

module.exports = {
    ...
    plugins: [
        new AddressPlugin({
            port: 8080,
            openPage: '/',
            // compilerHookName: 'done' // compiler hook to use. default to 'done'
        }),
    ]
    ...
}
```

# simple

![simple](/assets/simple.png)

# license

MIT
