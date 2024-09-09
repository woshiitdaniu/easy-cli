const semver = require('semver');
const chalk = require('chalk');

// 对比node的版本 
function checkNodeVersion(wanted, id) {
    // process.version 当前环境运行的Node版本
    if (!semver.satisfies(process.version, wanted, { includePrerelease: true })) {
      console.log(chalk.red(
        '您当前node版本是: ' + process.version + ', 但是当前脚手架 ' + id +
        ' 需要 Node ' + wanted + '.\n请您升级Node版本.'
      ))
      process.exit(1)
    }
  }
  
  // 检查当前脚手架运行的Node版本环境
  module.exports = checkNodeVersion
