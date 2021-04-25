const javad = "hello javad";

const what = () => {
    console.log(javad);
}

module.exports.hello = true; // Exported from require of module
exports = { salam: false };  // Not exported, only available in the module