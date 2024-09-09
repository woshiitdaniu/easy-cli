/*
 * @Description: 
 * @Autor: Bingo
 * @Date: 2024-09-06 09:07:33
 * @LastEditors: Bingo
 * @LastEditTime: 2024-09-09 15:37:15
 */
const config = {
    // 远程仓库地址 github/gitlab/gitee等 这里如果是外网则可以直接复制git的地址如果是内网仓库则需要
    // 使用<ip_path> 来占位 project_template 是仓库模板的最外层群组项目名
    BASE_REPO_URL: 'http://<ip_path>',
    // 脚手架名称
    SCAFFOLD_NAME:'easy-u-cli',
    // 项目模板最外层群组名 可根据自身来设置
    MAIN_GROUP_NAME:'project_template'
}
module.exports = config