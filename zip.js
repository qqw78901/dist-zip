var path = require('path');
var fs = require("fs");
// 引入插件
var zipper = require('zip-local');

module.exports = function (sourcePath) {
    var projectRoot = process.cwd();
    var packageInfo = require(path.join(projectRoot, './package.json'));
    var date = new Date();
    //如果有配置目录，优先使用目录
    var SOURCEPath = sourcePath || "dist";

    var d = (date.getMonth() < 9 ? "0" : "") + (date.getMonth() + 1).toString();
    d += (date.getDate() < 10 ? "0" : '') + date.getDate().toString() + "_";
    d += (date.getHours() < 10 ? "0" : '') + date.getHours().toString();
    d += (date.getMinutes() < 10 ? "0" : '') + date.getMinutes().toString() + "_";
    d += (date.getSeconds() < 10 ? "0" : '') + date.getSeconds().toString()+"s";
    var zip = SOURCEPath + "_" + packageInfo.name + "_" + d;

    if (!fs.existsSync(SOURCEPath)) {
        console.warn(SOURCEPath + " is not exist");
        return;
    }
    // 保存压缩文件的输出文件夹
    if (!fs.existsSync("zip_dist")) {
        fs.mkdirSync('zip_dist');
    }

    zipper.sync.zip(SOURCEPath).compress().save("zip_dist/" + zip + ".zip");
    console.log(`---------压缩完成 文件名是:${zip}---------`);
}