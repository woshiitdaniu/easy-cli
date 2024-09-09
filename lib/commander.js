/*
 * @Description: 
 * @Autor: Bingo
 * @Date: 2024-09-04 15:02:33
 * @LastEditors: Bingo
 * @LastEditTime: 2024-09-09 15:43:25
 */

const chalk = require('chalk');
const minimist = require('minimist');
// 在终端 接收命令输入并执行
const program = require('commander')
const suggestCommands = require('../lib/utils/suggest_command')

module.exports = () => {
    program
        // 命令 
        .command('create [app-name]')
        // 添加别名 c
        .alias('c') 
        // 描述
        .description('通过easy-cli脚手架创建新项目')
        // 参数配置 <host> ip参数占位符
        .option('-ip, --ip <host>', '内网私有库的ip地址')
        // 对命令执行操作
        .action((name, options) => {
            // 使用 Mininist处理终端输入的参数 参数不能超过限制个数
            // <app-name> 方括号表示参数必传 [app-name]表示选传 
            if (minimist(process.argv.slice(3))._.length > 1) {
                console.log(chalk.yellow('\n 提示: 请提供一个参数作为项目的项目名!'))
            }
            require('../lib/inquirer')(name, options)
        })

    program.on('--help', () => {
        console.log('');
        console.log('常见命令:');
        console.log('  easy create xxx  用于创建新的项目');
    });
    program.on('command:*', ([cmd]) => {
        console.log(`  ` + chalk.red(`没有找到您要的命令 ${chalk.yellow(cmd)}.`))
        console.log()
        suggestCommands(program, cmd)
        process.exitCode = 1
    })
    program.parse(process.argv)
}

