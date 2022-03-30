import { Command } from 'commander';
import { exec as execSync } from 'node:child_process';
import chalk from 'chalk';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import util from 'node:util';

const program = new Command();
const log = (...args) => console.log(chalk.green.bold(args));
const error = (...args) => console.log(chalk.red.bold(args));
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const exec = util.promisify(execSync);

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