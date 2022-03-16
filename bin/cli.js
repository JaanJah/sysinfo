const { Command } = require('commander');

const program = new Command();

program
    .command('general', 'General');

program.parse(process.argv);
