const { Command } = require('commander');

const program = new Command();

program
    .command('general', 'General')
    .command('update', 'Update sysinfo');

program.parse(process.argv);
