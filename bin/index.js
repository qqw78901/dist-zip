#!/usr/bin/env node
try {
    var argv = require('optimist').boolean('v').argv;
    require('../zip.js')(argv._[0], argv.v);
    process.exit(0);
} catch (e) {
    process.exit(1);
}