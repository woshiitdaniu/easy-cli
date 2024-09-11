/*
 * @Description: 
 * @Autor: Bingo
 * @Date: 2024-09-09 13:09:43
 * @LastEditors: Bingo
 * @LastEditTime: 2024-09-09 13:11:20
 */
const {
    IP
} = JSON.parse(process.env.EASY_CLI_CONFIG)

module.exports = {
    getBaseUrl() {
        if (process.env.ipPost || IP) {
            return BASE_REPO_URL.replace('<ip_path>', process.env.ipPost || IP)
        } else {
            return BASE_REPO_URL
        }
    }
}