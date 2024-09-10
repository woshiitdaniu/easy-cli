const leven = require('leven');
// 用户如果输错了  可以根据字符串相似度给出建议
const suggestCommands = (program, unknownCommand) => {
    const availableCommands = program.commands.map(cmd => cmd._name)

    let suggestion

    availableCommands.forEach(cmd => {
        const isBestMatch = leven(cmd, unknownCommand) < leven(suggestion || '', unknownCommand)
        if (leven(cmd, unknownCommand) < 3 && isBestMatch) {
            suggestion = cmd
        }
    })

    if (suggestion) {
        console.log(`  ` + chalk.red(`您是在找 ${chalk.yellow(suggestion)}吗?`))
    }
}

module.exports = suggestCommands