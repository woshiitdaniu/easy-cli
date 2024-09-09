#!/usr/bin/env node
const requiredVersion = require('../package.json').engines.node
const CONFIG = require('../lib/config')
const checkNodeVersion = require('../lib/env_valid/node_version')
const checkPnpmSupport = require('../lib/env_valid/package_tool_type')
const commander = require('../lib/commander')
// 检查当前脚手架运行的Node版本环境
checkNodeVersion(requiredVersion, CONFIG.SCAFFOLD_NAME);

// 检查当前运行的包管理工具
checkPnpmSupport();
// 执行终端命令
commander()




