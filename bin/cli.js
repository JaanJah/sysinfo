import { Command } from 'commander';

const program = new Command();

program
    .command('general', 'General')
    .command('update', 'Pulls git repo and installs packages for sysinfo');

program.parse(process.argv);
