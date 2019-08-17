import chalk from 'chalk'

const { log } = console
const logger = {
  info: (message) => log(chalk.green(`>> Info: ${message}`)),
  error: (message) => log(chalk.red(`>> Error: ${message}`)),
}

module.exports = logger
