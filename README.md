# dist-zip

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
 dist-zip 跟上子目录名称 

如果当前目录下有子目录abc，你需要压缩abc,可以dist-zip abc

 **注意：不支持二级目录，不支持执行dist-zip abc/bcd，本咸鱼觉得这样已经满足需求了不想加入目录下钻，请在abc目录下再执行dist-zip**  

 