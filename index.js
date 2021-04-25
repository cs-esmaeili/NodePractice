const yargs = require('yargs');
const contactManager = require('./contactsManager');

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

yargs.parse();