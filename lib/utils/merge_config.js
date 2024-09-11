
const defaultConfig = require('../config')
const userConfig = require('../../easy-u-config')
module.exports = ()=>{
    let config = {
        ...defaultConfig,
        ...userConfig
    }
    process.env.EASY_CLI_CONFIG = JSON.stringify(config)
    return config
}