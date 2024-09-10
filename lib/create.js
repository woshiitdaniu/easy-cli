/*
 * @Description: 
 * @Autor: Bingo
 * @Date: 2024-09-04 22:19:27
 * @LastEditors: Bingo
 * @LastEditTime: 2024-09-09 15:23:17
 */
const chalk = require('chalk')
const { TEMPLATE_RULE_DOCUMENT } = require('./config/const/template')
const create = async (promptResult) => {
    // 第一步、模版拉取
    await require('./download/template')(promptResult)

    // TODO 第二步、项目规范文件拉取
    if (TEMPLATE_RULE_DOCUMENT) {
        await require('./download/document')(promptResult)
    }

    console.log(chalk.yellow('\n\n恭喜你 模板已成功拉取,请cd到 ' + `\x1b[1m${promptResult.projectName}\x1b[22m` + ',执行 install 下载依赖吧!'))
}


module.exports = async (...args) => {
    try {
        return await create(...args)
    } catch (err) {
        // 脚手架生成报错时处理
        console.error(err)
        // Node.js 中的一个方法，用于立即终止当前 Node.js 进程。 通常非零值表示异常退出
        process.exit(1)
    }
}