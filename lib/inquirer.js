/*
 * @Description: 
 * @Autor: Bingo
 * @Date: 2024-09-04 15:03:14
 * @LastEditors: Bingo
 * @LastEditTime: 2024-09-09 15:42:56
 */
const fs = require('fs-extra')
const path = require('path')
const inquirer = require('inquirer')
const chalk = require('chalk')
const cliClear = require('cli-clear')

const { getGitTemplateList } = require('../lib/download/axios')
const handleTemplateTags = require('../lib/utils/handle_template_tags')
// const TERMINAL_LIST = require('./config/const/terminal_list')

const {
    TERMINAL_LIST
} = JSON.parse(process.env.EASY_CLI_CONFIG)
const { CODE_STORE } = require('./config')
const { GROUP } = require('./config/const/template')
/* 处理用户交互 */
const inquirerPromp = async (projectName, options) => {
    // 获取当前目录地址的绝对路径   process类似当前的进程
    const cwd = options.cwd || process.cwd()
    // 将用户输入的私有库ip地址存储到环境变量中
    process.env.ipPost = options.ip || ''
    // 如果项目名只有一个点 则判定是当前目录下
    const inCurrent = projectName === '.'
    let name = inCurrent ? path.relative('../', cwd) : projectName

    if (!name) {
        // 提示用户输入项目名 需要注意 name 要一致
        const { nameInput } = await inquirer.prompt([
            {
                name: 'nameInput',
                type: 'input',
                // 提示消息
                message: `请输入项目名:`,
            }
        ])
        name = nameInput;
        projectName = nameInput;
    }

    // 拼接绝对路径
    const targetDir = path.resolve(cwd, projectName || '.')
    const promptResult = {
        projectName: name,
        terminalSelect: '',
        projectTemplateSelect: ''
    }
    /* 
    借助 fs-extra 判断当前路径下是否存在同样名称的目录
    如果当前目录下已存在同样名称的目录 并且没有options.merge参数
  */
    if (fs.existsSync(targetDir) && !options.merge) {
        // 强制合并
        if (options.force) {
            await fs.remove(targetDir)
        } else {
            // 当前目录
            if (inCurrent) {
                // 使用inquirer (prompt) 来在终端进行交互确认
                const { ok } = await inquirer.prompt([
                    {
                        name: 'ok',
                        type: 'confirm',
                        message: `是否在当前目录创建项目?`
                    }
                ])
                if (!ok) {
                    return
                }
            } else {
                // 如果不是当前目录就给用户进行选择  此时inquirer类型是List
                const { action } = await inquirer.prompt([
                    {
                        name: 'action',
                        type: 'list',
                        // 提示消息
                        message: `目录:${chalk.cyan(targetDir)} 已经存在,请选择:`,
                        // 用户选项
                        choices: [
                            { name: '覆盖', value: 'overwrite' },
                            { name: '合并', value: 'merge' },
                            { name: '取消', value: false }
                        ]
                    }
                ])
                if (!action) {
                    return
                    // 用户选择了覆盖原文件
                } else if (action === 'overwrite') {
                    // 注意 在Node环境中  console是可以直接输出到终端的
                    console.log(`\n正在处理中 ${chalk.cyan(targetDir)}...`)
                    await fs.remove(targetDir)
                }
            }
        }
    }

    const { terminalSelect } = await inquirer.prompt([
        {
            name: 'terminalSelect',
            type: 'rawlist',
            // 提示消息
            message: chalk.green(`请选择项目运行的环境:`),
            // 用户选项
            choices: TERMINAL_LIST
        }
    ])
    promptResult['terminalSelect'] = terminalSelect


    cliClear()
    if (CODE_STORE === 'gitlab') {
        // 获取远程的群组项目模板
        let gitTemplateList = await getGitTemplateList(promptResult);
        // 处理模板列表
        const projectTemplateList = handleTemplateTags(gitTemplateList)

        if (!projectTemplateList.length) {
            console.error('当前群组没有对应的模板项目!')
            process.exit(1)
        }
        // 提示用户选择前端框架  react/vue
        const { projectTemplateSelect } = await inquirer.prompt([
            {
                name: 'projectTemplateSelect',
                type: 'list',
                default: projectTemplateList[0].value,
                // 提示消息
                message: `请选择项目的${terminalSelect}群组前端项目模板:`,
                // 用户选项
                choices: projectTemplateList
            }
        ])
        promptResult['projectTemplateSelect'] = projectTemplateSelect
    }else{
        promptResult['projectTemplateSelect'] = GROUP[terminalSelect]
    }


    // 开启创建
    require('./create')(promptResult, options)
}


module.exports = async (...args) => {
    try {
        return await inquirerPromp(...args)
    } catch (err) {
        // 脚手架生成报错时处理
        console.error(err)
        // Node.js 中的一个方法，用于立即终止当前 Node.js 进程。 通常非零值表示异常退出
        process.exit(1)
    }
}