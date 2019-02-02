#!/usr/bin/env node

const program = require('commander')
const log = require('./lib/log')
const inquirer = require('./lib/inquirer')
const sp = require('./lib/starter-project')

log.clear()
log.figlet('S-PRO', false)
log.message(`\n ** Starter Project CLI **\n`, false)

program
  .version('1.0.24-rc9')
  .description('Starter Project CLI')

program
  .command('start')
  .alias('s')
  .description('Initialize Starter Project')
  .action(() => {
    inquirer.basicInteraction().then((answers) => {
      sp.run(answers)
    })
  })

// program
//   .command('command')
//   .alias('c')
//   .description('Returns Gulp install command')
//   .action(() => {
//     sp.cmd(answers)
//   })

program.parse(process.argv)
