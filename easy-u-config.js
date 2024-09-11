module.exports = {
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
    // 配置对应的模板
    GROUP:{
        pc:'xxx-vite-pc',
        h5:'xxx-vite-h5',
        mini:'xxx-taro-v3-mini',
        app:'xxx-uni-v3-app'
    },
    // 是否需要下载项目模板的依赖
    NEED_INSTAND:true,
    // 规范文档 仓库项目名
    TEMPLATE_RULE_DOCUMENT:'front-project-rule',
    
}