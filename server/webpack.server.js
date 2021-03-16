const path = require('path');
module.exports = {
    // Inform webpack that we're building a bundle for nodeJS, rather than for the browser
    target: 'node',

    // Tell webpack the root file of out server application
    entry: './src/index.js',

    // Tell webpack where to put the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, build)
    },
    
    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react', // for handling all JSX to normal javascript
                        'stage-0',  // for handling all async code
                        ['env', { targets: { browsers: [ 'last 2 versions' ]}}] // run all different transform rules needed for last 2 versions of all popular browsers.
                    ]
                }
            }
        ]
    }
}