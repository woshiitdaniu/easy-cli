const fs = require('fs-extra')
const chalk = require('chalk')
/* 
    @desc 文件目录合并
    @param {String} sourceDir 要合并的目录
    @param {String} targetDir 合并到这个目录

    使用到了fs 的关键api 
        readdirSync 目录读取
        isDirectory 目录判断
        existsSync 文件存在判断
        mkdirSync 目录创建
        copyFileSync 文件合并
*/
const mergeDirectories = (sourceDir, targetDir) => {
    const files = fs.readdirSync(sourceDir);
    const targetPath = targetDir;
    fs.chmodSync(sourceDir, 0o777);
    files.forEach((file) => {
        // 拿到每一个规范文件的地址
        const sourcePath = path.join(sourceDir, file);
        // 如果是文件，则合并
        try {
            fs.chmodSync(sourcePath, 0o777);
            fs.copyFileSync(sourcePath, targetPath);
        } catch (err) {
            if (err.code === 'EPERM') {
                chalk.red('权限错误：确保你有足够的权限来复制文件');
                // 在这里可以添加修改权限或使用管理员身份的代码
            } else {
                console.error(err);
            }
        }
    });
    fs.removeSync(sourceDir)
}

module.exports = mergeDirectories