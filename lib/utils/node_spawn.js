/*
 * @Description: 
 * @Autor: Bingo
 * @Date: 2024-09-06 09:04:11
 * @LastEditors: Bingo
 * @LastEditTime: 2024-09-09 15:16:15
 */
const { spawn } = require('child_process')
const path = require('path')
const fs = require('fs-extra')
let { getBaseUrl } = require('./public')
// const { DOCUMENT_DIR_NAME } = require('../config/const/index')
// const { MAIN_GROUP_NAME, CODE_STORE, BASE_REPO_URL } = require('../config')
const {
    DOCUMENT_DIR_NAME,
    MAIN_GROUP_NAME,
    CODE_STORE,
    BASE_REPO_URL
} = JSON.parse(process.env.EASY_CLI_CONFIG)

// 远程拉取 不需要合并目录的情况
const spawnFn = (templateName, projectName, terminalSelect) => {
    return new Promise((resolve, rejects) => {
        const tmpdir = path.resolve(process.cwd(), `./${projectName}`)
        let repoPlace = `${BASE_REPO_URL}/${templateName}.git`
        if (CODE_STORE === 'gitlab') {
            repoPlace = `${getBaseUrl()}/${MAIN_GROUP_NAME}/${terminalSelect}/${templateName}.git`
        }
        const result = spawn('git', ['clone', repoPlace, tmpdir])
        // 监听输出情况 可以对进度进行展示
        result.stdout.on('data', (data) => {
            console.log(`${data}`);
        });
        // 监听子进程退出事件
        result.on('close', (code) => {
            if (code !== 0) {
                rejects()
            } else {
                // 删除原项目模板的docs目录
                fs.removeSync(tmpdir + '/' + DOCUMENT_DIR_NAME)
                fs.removeSync(tmpdir + '/doc')
                resolve()
            }
        });
    })
}


// 远程拉取 需要合并目录的情况 要创建临时目录
const spawnFnNeedConcatDir = (templateName, projectName, terminalSelect) => {
    return new Promise((resolve, rejects) => {
        try {
            const codeDir = path.resolve(process.cwd(), `./${projectName}`)
            let repoPlace = `${BASE_REPO_URL}/${templateName}.git`
            if (CODE_STORE === 'gitlab') {
                repoPlace = `${getBaseUrl()}/${MAIN_GROUP_NAME}/${terminalSelect}/${templateName}.git`
            }
            const result = spawn('git', ['clone', repoPlace, codeDir + '/' + DOCUMENT_DIR_NAME])
            // 监听输出情况 可以对进度进行展示
            result.stdout.on('data', (data) => {
                console.log(`${data}`);
            });
            // 监听子进程退出事件
            result.on('close', (code) => {
                if (code !== 0) {
                    rejects(code)
                } else {
                    resolve()
                }
            });
        } catch (error) {
            rejects(error)
        }

    })
}
module.exports = {
    spawnFn,
    spawnFnNeedConcatDir
}