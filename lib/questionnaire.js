/* eslint-disable no-console */
/* eslint-env node */

const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');
const ui = new inquirer.ui.BottomBar();
const Gotos = {
  RESUME: 'Resumé',
  LINKEDIN: 'LinkedIn',
  GITHUB: 'GitHub'
};
module.exports = {
  Gotos,
  goodbye: () => {
    ui.log.write(chalk.white('Thank you!'));
  },
  intro: () => {
    clear();
    ui.log.write(chalk.blue(figlet.textSync('malix', { horizontalLayout: 'full' })));
    ui.log.write(`${chalk.grey('http://malix.io')}

  ${chalk.white('Welcome!')}

`);
  },
  run: () => {
    return inquirer
      .prompt([
        {
          name: 'goto',
          type: 'list',
          message: 'Where do you want to see malix’s info?',
          choices: [Gotos.RESUME, Gotos.LINKEDIN, Gotos.GITHUB, 'Exit']
        }
      ])
      .catch(() => {
        return Promise.resolve({});
      });
  }
};
