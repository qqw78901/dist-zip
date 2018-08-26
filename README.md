# dist-zip
<p align="left">
  <a href="https://www.npmjs.com/package/dist-zip"><img src="https://img.shields.io/npm/v/dist-zip.svg?style=flat-square" alt="Build Status"></a>
  <a href="https://www.npmjs.com/package/dist-zip"><img src="https://img.shields.io/npm/dt/dist-zip.svg?style=flat-square" alt="Downloads"></a>
  <a href="https://github.com/qqw78901/dist-zip"><img src="https://img.shields.io/travis/qqw78901/dist-zip.svg?style=flat-square" alt="Build Status"></a>
</p>

该插件实现压缩打包后的dist文件夹里的文件，方便日常工作上传到资源服务器



##功能

基于zip-local,将dist文件夹压缩

##安装
```text
全局
npm install dist-zip -g
局部
npm install dist-zip --save-dev


```
##使用
你可以：

- 全局安装，在目录下直接执行dist-zip
- 全局/局部安装,在package.json的script中运行 dist-zip 
- 局部安装，编程式使用

### 编程式使用

```js
 const distZip = require('dist-zip');
 distZip();//不指定目录,默认dist
 /**
 distZip('src')//指定目录src
 */

```

##可传参数

- 目录名称
 dist-zip 跟上子目录名称 

如果当前目录下有子目录abc，你需要压缩abc,可以dist-zip abc

 **注意：不支持二级目录，不支持执行dist-zip abc/bcd，本咸鱼觉得这样已经满足需求了不想加入目录下钻，请在abc目录下再执行dist-zip**  

- 压缩版命名是否添加版本号

> exmaple: dist-zip -v
> output: xxxx_v1.0.0_xxx.zip

##更新

- v1.2.0 引入optimist 添加版本号功能 -tag
- v1.2.1 修复参数读取bug，将-tag改成更简单的-v，文件名版本号前加v
- v1.3.0 加颜色
- v1.3.1 除去debug输出
- v1.3.4 更新文件夹不存在输出为中文
- v1.3.5 修复无package.json时不报错且无成功提示的bug

 