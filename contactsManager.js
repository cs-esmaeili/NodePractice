const fs = require('fs');
const chalk = require('chalk');

const fileName = "contacts.json";

const contacts = (path = fileName) => {
    try {
        const data = fs.readFileSync(path).toString();
        return JSON.parse(data);
    } catch (error) {
        // console.log(error);
        return [];
    }
}
const writeFile = (data) => {
    try {
        fs.writeFileSync(fileName, JSON.stringify(data), (e) => {
            if (e) {
                console.log(chalk.red('error in save contact'));
            } else {
                console.log(chalk.green('contact saved'));
            }
        });
        console.log(chalk.green('contact saved'));
    } catch (error) {
        console.log(chalk.red('error in save contact'));
    }
}
const checkDuplicateContacts = (data, fullname, phone) => {
    const temp = data.find(c => (c.fileName === fullname || c.phone === phone));
    if (temp === undefined || temp.length === 0) {
        return true;
    }
    return false;
}

const addContact = (fullname, phone) => {
    const data = contacts(fileName);
    const check = checkDuplicateContacts(data, fullname, phone);
    if (check) {
        data.push({
            fullname,
            phone
        });
        writeFile(data);
    } else {
        console.log(chalk.red("contact is exists"));
    }
}

const removeContact = (fullname) => {
    const data = contacts(fileName);
    const filterdContact = data.filter(c => c.fullname !== fullname);

    if (data.length > filterdContact.length) {
        writeFile(filterdContact);
        console.log(chalk.green('contact removed !'));
    } else {
        console.log(chalk.red('contact not found !'));
    }
}
module.exports = {
    addContact,
    removeContact,
    contacts,
}