const { Command } = require('commander');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const chalk = require('chalk');

const program = new Command();
const log = (...args) => console.log(chalk.green.bold(args));
const error = (...args) => console.log(chalk.red.bold(args));

async function executeCommand(command) {
    const { err, stdout, stderr } = await exec(command);
    if (err || stderr) {
        error(err?.message || stderr);
        throw new Error(`Error executing ${command}`);
    }
    console.log(stdout);
};

program
    .action(async () => {
        log('Pulling git repo');
        await executeCommand(`cd ${__dirname} && git pull`);
        log('Installing NPM packages');
        await executeCommand(`cd ${__dirname} && npm install`);
        log('Successfully updated sysinfo');
    });

program.parse(process.argv);