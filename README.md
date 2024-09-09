<!--
 * @Description: 
 * @Autor: Bingo
 * @Date: 2024-09-06 17:51:19
 * @LastEditors: Bingo
 * @LastEditTime: 2024-09-09 16:06:12
-->
# easy-u-cli
需要注意 使用脚手架的环境：node >= v16 < v18 pnpm v7
同时将Node的下载镜像切换成 https://registry.npmmirror.com
``` sh
npm install -g easy-u-cli

easy create your-project 
or easy c your-project 
or easy c your-project -ip xxx.xxx.xxx.xxx 

```
- 如需使用 请更改以下文件配置 以免影响正常使用
```bash
    lib/config/index.js

    BASE_REPO_URL: 'http://<ip_path>',
    MAIN_GROUP_NAME:'project_template'      
```

- 本脚手架需要配合仓库群组分类  目前仅分了pc/mini/h5 后续如果要新增需先在仓库中新增对应的子群组 
```bash
    lib/config/const/index.js

    TERMINAL_OPTIONS
```    
