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
    fs.writeFileSync(fileName, JSON.stringify(data), (e) => {
        if (e) {
            console.log(chalk.red('error in save contact'));
        } else {
            console.log(chalk.green('contact saved'));
        }
    });
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
    }else{
        console.log(chalk.red("contact is exists"));
    }
}

module.exports = {
    addContact,
    contacts,
}