#!/usr/bin/env node
try {
    var argv = require('optimist').boolean('v').boolean('b').argv;
    require('../zip.js')(argv._[0], argv.v,argv.b);
    process.exit(0);
} catch (e) {
    process.exit(1);
}