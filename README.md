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
# 如需使用 请更改以下文件配置 以免影响正常使用
```sh
    easy-u-confog.js
    {
        // 私有仓库的ip地址
        IP:'',
        // 远程仓库地址
        BASE_REPO_URL: 'https://gitee.com/Bingo996/',
        // 脚手架名称
        SCAFFOLD_NAME:'easy-u-cli',
        // 选择仓库类型 github/gitlab/gitee 注意如果是gitlab必须进行分群组
        CODE_STORE:'github',
        // 项目模板最外层群组名 可根据自身来设置
        MAIN_GROUP_NAME:'project_template',
        // 配置对应的模板 这里要对应自己模板的仓库名
        GROUP:{
            pc:'xxx-vite-pc',
            h5:'xxx-vite-h5',
            mini:'xxx-taro-v3-mini',
            app:'xxx-uni-v3-app'
        },
        // 是否需要下载项目模板的依赖
        NEED_INSTAND:true,
        // 规范文档 仓库项目名
        TEMPLATE_RULE_DOCUMENT:'front-project-rule'
    }     

```

# 本脚手架支持主流的仓库如:gitlab/github/gitee  
```bash
    如果不同的终端有多套模板需要配合gitlab仓库群组分类，目前仅分了pc/mini/h5/app 后续如果要新增需先在仓库中新增对应的子群组

    如果是github or gitee 仓库 
   
    GROUP 修改成对应的项目模板名称

    如果你需要将项目的开发文档也加入到项目模板中 需要将文档上传到仓库中 同时
    TEMPLATE_RULE_DOCUMENT 将该属性 修改成对应的git名称
```    
# 更新日志 
```bash
    1.0 新增支持 gitlab 的 私库ip参数 拉取模版
    1.1 新增支持github/gitee的公开项目模板拉取及项目创建命令别名
    1.2 新增配置文件easy-u-confog.js 以及模板拉取的hooks钩子函数 
    1.3 计划：使用 ts 对项目进行完全重构
```    
