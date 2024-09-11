/*
 * @Description: 
 * @Autor: Bingo
 * @Date: 2024-09-04 22:46:33
 * @LastEditors: Bingo
 * @LastEditTime: 2024-09-06 17:41:21
 */

// const TEMPLATE = require('../config/const/template')
const {
    TEMPLATE_RULE_DOCUMENT
} = JSON.parse(process.env.EASY_CLI_CONFIG)
const generatorLoading = require('../utils/download_template')
module.exports = async (promptResult) => {
    // 远程拉取文档
    try {
        await generatorLoading({
            isNeedTemp:true,
            actMessage: '规范文档拉取',
            templateName: TEMPLATE_RULE_DOCUMENT,
            projectName: promptResult.projectName
        })
        return Promise.resolve()
    } catch (e) {
        return Promise.reject()
    }

}