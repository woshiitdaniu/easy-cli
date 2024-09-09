/*
 * @Description: 
 * @Autor: Bingo
 * @Date: 2024-09-09 13:09:43
 * @LastEditors: Bingo
 * @LastEditTime: 2024-09-09 13:11:20
 */
let { BASE_REPO_URL } = require('../config/index')
module.exports = {
    getBaseUrl(){
        if(process.env.ipPost){
            return BASE_REPO_URL.replace('<ip_path>',process.env.ipPost)
        }else{
            return BASE_REPO_URL
        }
    }
}