<!--
 * @Description: 
 * @Autor: Bingo
 * @Date: 2024-09-06 17:51:19
 * @LastEditors: Bingo
 * @LastEditTime: 2024-09-09 16:06:12
-->
# easy-u-cli
需要注意 使用脚手架的环境：node >= v16 < v18 pnpm v7
同时将Node的下载镜像由https://registry.npmjs.org/ 切换成 https://registry.npmmirror.com
``` sh
npm install -g easy-u-cli

easy create your-project 
or easy c your-project 
or easy c your-project -ip xxx.xxx.xxx.xxx 

```
## 如需使用 请更改以下文件配置 以免影响正常使用
```bash
    lib/config/index.js
    如果是github or gitee 仓库 请将 BASE_REPO_URL 改为具体的仓库地址

    BASE_REPO_URL: 'http://<ip_path>',
    MAIN_GROUP_NAME:'project_template'      
```

## 本脚手架支持主流的仓库如:gitlab/github/gitee  
```bash
    如果不同的终端有多套模板需要配合gitlab仓库群组分类，目前仅分了pc/mini/h5/app 后续如果要新增需先在仓库中新增对应的子群组
    lib/config/const/index.js

    TERMINAL_OPTIONS

    如果是github or gitee 仓库 
    lib/config/const/template.js
    GROUP 修改成对应的项目模板名称

    如果你需要将项目的开发文档也加入到项目模板中 需要将文档上传到仓库中 同时
    TEMPLATE_RULE_DOCUMENT 将该属性 修改成对应的git名称
```    
