module.exports = {
    name: "ping",
    description: "Donne le ping du bot",

    async run(client, message) {
        message.reply(`Pong :ping_pong: La latence du bot est de :  \`${client.ws.ping}\` ms.`)
    }
};