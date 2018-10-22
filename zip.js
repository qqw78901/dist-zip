var path = require('path');
var fs = require("fs");
var colors = require('colors/safe');
// 引入插件
var zipper = require('zip-local');

module.exports = function (sourcePath, addVersionTag,needReturnBuffer) {
    var projectRoot = process.cwd();
    var packageInfo;
    try{
        var packageJSONPath = path.join(projectRoot, './package.json');
        packageInfo = require(packageJSONPath);
    }catch(e){
        packageInfo={
            name:'no_package',
            version:'0.0.0'
        }
    }
    var date = new Date();
    //如果有配置目录，优先使用目录
    var SOURCEPath = sourcePath || "dist";

    var d = (date.getMonth() < 9 ? "0" : "") + (date.getMonth() + 1).toString();
    d += (date.getDate() < 10 ? "0" : '') + date.getDate().toString() + "_";
    d += (date.getHours() < 10 ? "0" : '') + date.getHours().toString();
    d += (date.getMinutes() < 10 ? "0" : '') + date.getMinutes().toString() + "_";
    d += (date.getSeconds() < 10 ? "0" : '') + date.getSeconds().toString() + "s";
    var versionTag = addVersionTag ? ('_v' + packageInfo.version) : '';
    var zip = SOURCEPath + "_" + packageInfo.name + versionTag + "_" + d;

    if (!fs.existsSync(SOURCEPath)) {
        console.warn(SOURCEPath + " 文件夹不存在");
        return;
    }
    // 保存压缩文件的输出文件夹
    if (!fs.existsSync("zip_dist")) {
        fs.mkdirSync('zip_dist');
    }
    // if(includeCurrentFolder){
    //     console.log('includeCurrentFolder')
    //     fs.mkdirSync("zip_dist/" + zip + "/"+sourcePath);
    //     var memery = zipper.sync.zip(SOURCEPath);
    //     console.log(memery);
    //     // fs.copyFileSync()
    //     memery.compress().save("zip_dist/" + zip + ".zip");
    // }else{
    //     zipper.sync.zip(SOURCEPath).compress().save("zip_dist/" + zip + ".zip");

    // }
    var compressedFile = zipper.sync.zip(SOURCEPath).compress();
    compressedFile.save("zip_dist/" + zip + ".zip");

    console.log(`${colors.green('---------压缩完成 文件名是: ')}${colors.red.bold(zip)} ${colors.green('---------')}`);
    if(needReturnBuffer){
        var buff = compressedFile.memory();
        return{
            buffer:buff,
            fileName:zip
        };
    }else{
        return{
            fileName:zip
        };
    }
  
}