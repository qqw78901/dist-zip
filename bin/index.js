#!/usr/bin/env node
try{
    require('../zip.js')(process.argv[2]);
    process.exit(0);
}catch(e){
    process.exit(1);
}