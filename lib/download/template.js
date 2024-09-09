/*
 * @Description: 
 * @Autor: Bingo
 * @Date: 2024-09-08 20:08:48
 * @LastEditors: Bingo
 * @LastEditTime: 2024-09-09 15:10:43
 */
const fs = require('fs-extra')
const generatorLoading = require('../utils/download_template')

module.exports = async (promptResult) => {
    const { projectTemplateSelect, projectName,terminalSelect } = promptResult
    try {
        await generatorLoading({
            isNeedTemp: false,
            actMessage: '项目模板拉取',
            templateName:projectTemplateSelect,
            projectName,
            terminalSelect
        })
        fs.removeSync(process.cwd() + '/' + projectName + '/.git')
        return Promise.resolve()
    } catch (e) {
        return Promise.reject()
    }
}