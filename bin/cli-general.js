import { Command } from 'commander';
import { version as _version, time as _time } from 'systeminformation';
import chalk from 'chalk';

const program = new Command();
const log = console.log;
const prefix = chalk.green.bold;
const info = chalk.white;

program
    .action(() => {
        const version = _version();
        const time = _time();

        log(prefix('systeminformation version:', info(version)));
        log(prefix('Epoch time:'), info(time.current));
        log(prefix('Uptime:', info(time.uptime)));
        log(prefix('Timezone:', info(time.timezone)));
        log(prefix('Timezone name:', info(time.timezoneName)));
    });

program.parse(process.argv);