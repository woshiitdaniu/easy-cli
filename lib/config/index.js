/*
 * @Description: 
 * @Autor: Bingo
 * @Date: 2024-09-06 09:07:33
 * @LastEditors: Bingo
 * @LastEditTime: 2024-09-09 15:37:15
 */

const indexConst = require('./const/index')
const templateConst = require('./const/template')
const terminalListConst = require('./const/terminal_list')

const config = {
    // 远程仓库地址 github/gitlab/gitee等 这里如果是外网则可以直接复制git的地址如果是内网仓库则需要
    // 使用<ip_path> 来占位 project_template 是仓库模板的最外层群组项目名 默认只有gitlab才会使用ip
    // BASE_REPO_URL: 'http://<ip_path>',
    BASE_REPO_URL: 'https://gitee.com/Bingo996/',
    // 脚手架名称
    SCAFFOLD_NAME: 'easy-u-cli',
    // 选择仓库类型 github/gitlab/gitee
    CODE_STORE: 'github',
    // 项目模板最外层群组名 可根据自身来设置
    MAIN_GROUP_NAME: 'project_template'
}

module.exports = {
    ...config,
    ...indexConst,
    ...templateConst,
    ...terminalListConst
}