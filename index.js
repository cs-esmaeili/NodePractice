const chalk = require('chalk');
const yargs = require('yargs');
const contactManager = require('./contactsManager');

yargs.scriptName(chalk.yellow('Contact manager'));
yargs.usage(`$0 ${chalk.red("<command>")} ${chalk.green("<args>")}`)

yargs.command({
    command: "create",
    describe: "[create new contact]",
    builder: {
        fullname: {
            alias: "f",
            describe: "Person fullname",
            demandOption: true,
            type: "string",
        },
        phone: {
            alias: "p",
            describe: "Person phone number",
            demandOption: true,
            type: "number",
        },
    },
    handler({
        fullname,
        phone
    }) {
        // console.log(fullname , phone);
        contactManager.addContact(fullname, phone);
    }
});
yargs.command({
    command: "list",
    describe: "[contacts list]",
    handler() {
        console.table(contactManager.contacts());
    }
});
yargs.command({
    command: "remove",
    describe: "[remove contact]",
    builder: {
        fullname: {
            alias: "f",
            describe: "Person fullname",
            demandOption: true,
            type: "string",
        },
    },
    handler({fullname}) {
        console.table(contactManager.removeContact(fullname));
    }
});

yargs.parse();