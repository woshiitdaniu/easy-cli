/*
 * @Description: 
 * @Autor: Bingo
 * @Date: 2024-09-05 22:01:56
 * @LastEditors: Bingo
 * @LastEditTime: 2024-09-09 15:44:18
 */
const ora = require('ora')
const chalk = require('chalk')

const nodeSpawnFn = require('./node_spawn')
/* 
    @des generatorLoading 用来拉取远程的模板
    @param message String 用来提示当前正在进行的任务
    @param args 包括模板名称、项目名称及拉取后目录的名称
*/
const generatorLoading= async({
    isNeedTemp = false,
    actMessage = '',
    templateName = '',
    projectName = '',
    terminalSelect = ''
}) => {
    // 使用 ora 初始化，传入提示信息 message
    const spinner = ora(`${actMessage}进行中...`);
    // 开始加载动画
    spinner.start();
    try {
        let fn = isNeedTemp ? nodeSpawnFn.spawnFnNeedConcatDir : nodeSpawnFn.spawnFn
        await fn(templateName, projectName, terminalSelect)
        // 状态为修改为成功
        spinner.succeed(`${actMessage} ${chalk.green('已完成')}`);
        return Promise.resolve()
    } catch (error) {
        chalk.red(error)
        // 状态为修改为失败
        spinner.fail(`${actMessage} ${chalk.red('拉取失败')}--->${error}`)
        return Promise.reject()
    }
}

module.exports = generatorLoading