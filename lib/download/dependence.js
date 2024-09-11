
const chalk = require('chalk');
const inquirer = require('inquirer')
const execa = require('execa')
const ora = require('ora')
const runCommands = async (commands) => {
    try {
        const compositeCommand = commands.join(' && ');
        console.log(`\n正在执行命令: ${compositeCommand}`);
        await execa.shell(compositeCommand);
    } catch (error) {
        console.error('命令执行失败:', error);
    }
}

module.exports = async (promptResult) => {
    const { action } = await inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            // 提示消息
            message: `请选择项目的包管理工具:`,
            // 用户选项
            choices: [
                { name: 'npm', value: 'npm' },
                { name: 'yarn', value: 'yarn' },
                { name: 'pnpm', value: 'pnpm' }
            ]
        }
    ])

    try {
        // 尝试执行 `pnpm --version` 命令
        await execa(action, ['--version']);


    } catch (error) {
        // 如果执行失败，表示没有安装 
        console.error(chalk.bgRedBright(`你当前还没有安装 ${action}作为包管理工具，请执行 npm install -g ${action}!!!`));
        process.exit(1)
    }

    try {
        // 执行依赖安装
        const installCommand = {
            npm: 'install',
            yarn: '',
            pnpm: 'install'
        }
        const projectDir = `./${promptResult.projectName}`
        const commands = [`cd ${projectDir}`, `${action} ${installCommand[action]}`]


        const customFrames = [
            '◐', '◓', '◑', '◒', '◓', '◑', '◒', '◐',
            '⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷',
            '⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷',
            '⠁', '⠂', '⠄', '⡀', '⢀', '⠠', '⠐', '⠈'
        ];

        const spinner = ora({
            text: ' 开始安装依赖,请稍安勿躁...',
            color: 'cyan',
            interval: 80,
            frames: customFrames
        }).start();
        await runCommands(commands);

        spinner.succeed('\n依赖安装成功！');
    } catch (error) {
        console.log(error)
        console.error(chalk.bgRedBright(`依赖安装失败,请手动执行安装`));
        process.exit(1)
    }
}