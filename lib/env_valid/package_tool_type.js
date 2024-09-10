/*
 * @Description: 
 * @Autor: Bingo
 * @Date: 2024-09-06 18:08:36
 * @LastEditors: Bingo
 * @LastEditTime: 2024-09-06 18:23:06
 */
const execa = require('execa')
const checkPnpmSupport =async ()=> {
    try {
        // 尝试执行 `pnpm --version` 命令
        const { stdout } = await execa('pnpm', ['--version']);
        // 获取 pnpm 版本号
        const pnpmVersion = stdout.trim();

        console.log(`\n当前运行的 pnpm 版本: ${pnpmVersion}`);
        return true; // 表示 pnpm 支持
    } catch (error) {
        // 如果执行失败，表示没有安装 pnpm
        console.error('为了你的开发体验,请使用pnpm作为项目包管理工具!!!');
        return false;
    }
}

module.exports = checkPnpmSupport