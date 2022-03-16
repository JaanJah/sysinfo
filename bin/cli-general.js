const { Command } = require('commander');
const si = require('systeminformation');
const chalk = require('chalk');

const program = new Command();
const log = console.log;
const prefix = chalk.green.bold;
const info = chalk.white;

program
    .action(() => {
        const version = si.version();
        const time = si.time();


        log(prefix('systeminformation version:', info(version)));
        log(prefix('Epoch time:'), info(time.current));
        log(prefix('Uptime:', info(time.uptime)));
        log(prefix('Timezone:', info(time.timezone)));
        log(prefix('Timezone name:', info(time.timezoneName)));
    });

program.parse(process.argv);