const { readdirSync } = require("fs");

module.exports = async client => {
    let count = 0;
    const dirsEvent = readdirSync("./events/");
    for (const dirs of dirsEvent) {
        const fileDirs = readdirSync(`./events/${dirs}/`).filter(f => f.endsWith(".js"));
        for (const file of fileDirs) {
            const event = require(`../events/${dirs}/${file}`);
            client.on(event.name, (...args) => event.run(client, ...args));
            count++;
        };
    };

    console.log(`[${count} events]`);
};