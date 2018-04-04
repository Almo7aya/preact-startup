const path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: path.join(__dirname, 'bandle.js')
    }
}